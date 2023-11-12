import ctl from "@netlify/classnames-template-literals";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

const DropdownButton = ({ children }: { children: ReactNode }) => {
  const classes = ctl(
    `cursor-default
    select-none 
    rounded 
    px-4 
    text-2xl 
    hover:bg-gray-200/50 
    focus-visible:outline-none 
    data-[state=open]:bg-gray-200/75`
  );

  return (
    <RadixDropdownMenu.Trigger className={classes}>
      {children}
    </RadixDropdownMenu.Trigger>
  );
};

export default DropdownButton;
