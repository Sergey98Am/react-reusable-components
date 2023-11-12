import React from "react";
import { useContext } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAnimationControls, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DropdownContentContext } from "./DropdownContent";
import ctl from "@netlify/classnames-template-literals";

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item> & {
    onSelect?: () => void;
  }
>(({ className, children, onSelect = () => {}, ...props }, ref) => {
  const controls = useAnimationControls();
  const { closeMenu } = useContext(DropdownContentContext);

  const classes = ctl(
    `w-40
    select-none 
    rounded 
    px-2 
    py-1.5 
    text-gray-700 
    data-[highlighted]:bg-sky-400 
    data-[highlighted]:text-white 
    data-[highlighted]:focus:outline-none`
  );

  return (
    <RadixDropdownMenu.Item
      ref={ref}
      onSelect={async (e) => {
        e.preventDefault();

        await controls.start({
          backgroundColor: "#fff",
          color: "#000",
          transition: { duration: 0.04 },
        });

        await controls.start({
          backgroundColor: "#38bdf8",
          color: "#fff",
          transition: { duration: 0.04 },
        });

        await sleep(0.075);

        await closeMenu();
        onSelect();
      }}
      className={cn(classes, className)}
      {...props}
      asChild
    >
      <motion.div animate={controls}>{children}</motion.div>
    </RadixDropdownMenu.Item>
  );
});

const sleep = (s: number) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000));

export default DropdownItem;
