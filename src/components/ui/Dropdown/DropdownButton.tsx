// import ctl from "@netlify/classnames-template-literals";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

const DropdownButton = ({ children }: { children: ReactNode }) => {
  // const classes = ctl(
  //   `select-none
  //   rounded
  //   bg-orange-600
  //   text-white
  //   px-4
  //   py-3
  //   text-xl
  //   hover:bg-orange-500
  //   focus-visible:outline-none
  //   data-[state=open]:bg-orange-500`
  // );

  return <RadixDropdownMenu.Trigger>{children}</RadixDropdownMenu.Trigger>;
};

export default DropdownButton;
