import { motion } from "framer-motion";
import type { StackData } from "~/data/stackData";

type Props = StackData & {
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function StackCard({ name, icon, index }: Props) {
  const IconComponent = icon;

  return (
    <motion.article
      whileHover={{
        scale: 1.1,
        opacity: 1,
      }}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="select-none  bg-secondary p-2 sm:p-4 lg:p-5  rounded-lg flex flex-col justify-center items-center gap-3 shadow-md border-2 "
    >
      <IconComponent />
      <h1 className="text-xl">{name}</h1>
    </motion.article>
  );
}

export default StackCard;
