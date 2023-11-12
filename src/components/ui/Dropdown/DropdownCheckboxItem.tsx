import { cn } from "@/lib/utils";
import ctl from "@netlify/classnames-template-literals";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
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
    <RadixDropdownMenu.CheckboxItem
      ref={ref}
      className={cn(classes, className)}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixDropdownMenu.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </RadixDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RadixDropdownMenu.CheckboxItem>
  );
});

export default DropdownCheckboxItem;
