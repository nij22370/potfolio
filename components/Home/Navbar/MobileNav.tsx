import React from "react";
import Link from "next/link";
import { NavLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[10001] bg-black/60 backdrop-blur-sm w-full h-screen`}
      ></div>

      {/* navlinks */}
      <div
        className={`text-[var(--color-text-primary)] ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[var(--color-canvas)] space-y-6 z-[10002] right-0 border-l border-[#3E7BFA]/30`}
      >
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className="text-[var(--text-heading)] w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-[#3E7BFA]/40 sm:text-[30px] hover:text-[var(--text-accent)] transition-colors">
                {link.Label}
              </p>
            </Link>
          );
        })}
        {/* cross icon  */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-[var(--color-text-primary)]"
        />
      </div>
    </div>
  );
};

export default MobileNav;
