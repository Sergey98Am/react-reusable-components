import React from "react";
import { useContext, useEffect } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, useAnimationControls, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DropdownSubContext } from "./DropdownSub";
import { DropdownContentContext } from "./DropdownContent";

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.SubContent>
>(({ className, children, ...props }, ref) => {
  const { openSub, setOpenSub } = useContext(DropdownSubContext);
  const controls = useAnimationControls();

  async function closeMenu() {
    await controls.start("closed");
    setOpenSub(false);
  }

  useEffect(() => {
    if (openSub) {
      controls.start("open");
    }
  }, [controls, openSub]);

  return (
    <DropdownContentContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {openSub && (
          <RadixDropdownMenu.Portal forceMount>
            <RadixDropdownMenu.SubContent
              ref={ref}
              // align="start"
              className={cn(
                "mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur",
                className
              )}
              {...props}
              asChild
            >
              <motion.div
                initial="closed"
                animate={controls}
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: "easeOut", duration: 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: "easeIn", duration: 0.2 },
                  },
                }}
              >
                {children}
              </motion.div>
            </RadixDropdownMenu.SubContent>
          </RadixDropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownContentContext.Provider>
  );
});

export default DropdownSubContent;
