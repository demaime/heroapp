import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  {
    title: "Search",
    href: `/`,
  },

  {
    title: "My Team",
    href: `/team`,
  },
  {
    title: "About",
    href: `/about`,
  },
];

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const router = useRouter();

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden text-gray-300">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[  rem] p-5 pt-0 bg-gray-800  z-[1000] h-full"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={"flex items-center justify-between"}
                      href={{
                        pathname: route.href,
                        query: router.query,
                      }}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
