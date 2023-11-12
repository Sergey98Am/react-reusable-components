import { cn } from "@/lib/utils";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { DotFilledIcon } from "@radix-ui/react-icons";
import ctl from "@netlify/classnames-template-literals";

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.RadioItem>
>(({ className, children, ...props }, ref) => {
  const classes = ctl(
    `relative 
    flex 
    cursor-default 
    select-none 
    items-center 
    rounded-sm 
    py-1.5 
    pl-6 
    pr-2 
    text-gray-700 
    outline-none 
    transition-colors 
    focus:bg-accent 
    focus:text-accent-foreground 
    data-[disabled]:pointer-events-none 
    data-[disabled]:opacity-50 
    data-[highlighted]:bg-sky-400 
    data-[highlighted]:text-white 
    data-[highlighted]:focus:outline-none`
  );

  return (
    <RadixDropdownMenu.RadioItem
      ref={ref}
      className={cn(classes, className)}
      {...props}
    >
      <span className="absolute left-1.5 flex h-3.5 w-3.5 items-center justify-center">
        <RadixDropdownMenu.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </RadixDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RadixDropdownMenu.RadioItem>
  );
});

export default DropdownRadioItem;
