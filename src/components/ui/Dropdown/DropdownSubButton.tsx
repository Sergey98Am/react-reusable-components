import { ReactNode } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import ctl from "@netlify/classnames-template-literals";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const DropdownSubButton = ({ children }: { children: ReactNode }) => {
  const classes = ctl(
    `w-40 
    flex
    items-center
    select-none 
    rounded 
    px-2 
    py-1.5 
    text-gray-700 
    data-[highlighted]:bg-sky-400 
    data-[highlighted]:text-white 
    data-[highlighted]:focus:outline-none 
    data-[state=open]:bg-sky-300 
    data-[state=open]:text-white 
    data-[highlighted]:data-[state=open]:bg-sky-400`
  );

  return (
    <RadixDropdownMenu.SubTrigger className={classes}>
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </RadixDropdownMenu.SubTrigger>
  );
};

export default DropdownSubButton;
