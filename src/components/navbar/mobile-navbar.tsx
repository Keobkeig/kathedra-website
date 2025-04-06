"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-context";
import { motion } from "framer-motion";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { links } from "./links";
import { config } from "@/config";
export default function MobileNavbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 50 || document.location.hash) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  }, [setHasScrolled]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>,
    callback?: () => void
  ) => {
    e.preventDefault();
    setIsOpen(false);
    callback?.();
  };

  return (
    <div
      className={cn(
        "top-0 sticky md:hidden w-full transition-all duration-500 ease-in-out z-50",
        hasScrolled && "bg-black bg-opacity-20 backdrop-blur-xl"
      )}
    >
      <div
        className={cn(
          "flex justify-between items-center px-8 py-4 transition-all duration-500 ease-in-out",
          !hasScrolled && "border-b"
        )}
      >
        <div className="flex items-center gap-2">
          <motion.span className={cn(hasScrolled && "")} id="companyName">
            <span className="text-xl"> 
              {" "}
              <motion.span className="font-bold not-italic">
                {config.name}
              </motion.span>
            </span>
          </motion.span>
        </div>

        <div>
          <div onClick={() => setIsOpen(true)}>
            <Menu />
          </div>
          <Drawer direction="right" open={isOpen}>
            <DrawerContent className="z-[1000] px-8 py-4">
              <div className="top-4 right-8 absolute">
                <X className="size-[24px]" onClick={() => setIsOpen(false)} />
              </div>
              <DrawerTitle>{""}</DrawerTitle>
              <div className="top-4 inset-0">
                <div className="flex gap-16 h-fit text-sm">
                  <motion.ul
                    className={cn(
                      "flex flex-col gap-8 text-3xl text-muted-foreground font-bold" 
                    )}
                  >
                    {links.map((link) => (
                      <li key={link.href}>
                        <span
                          className="cursor-pointer flex items-center gap-4" 
                          onClick={(e) =>
                            handleLinkClick(e, () => {
                              window.location.href = link.href;
                            })
                          }
                        >
                          {link.icon}
                          {link.name}
                        </span>
                      </li>
                    ))}
                  </motion.ul>
                </div>

              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
