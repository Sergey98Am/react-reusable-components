import React from "react";
import { createContext, useContext, useEffect } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, useAnimationControls, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DropdownContext } from ".";

export const DropdownContentContext = createContext({ closeMenu: () => {} });

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useContext(DropdownContext);
  const controls = useAnimationControls();

  async function closeMenu() {
    await controls.start("closed");
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      controls.start("open");
    }
  }, [controls, open]);

  return (
    <DropdownContentContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {open && (
          <RadixDropdownMenu.Portal forceMount>
            <RadixDropdownMenu.Content
              ref={ref}
              align="start"
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
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownContentContext.Provider>
  );
});

export default DropdownContent;
