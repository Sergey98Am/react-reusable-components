import React from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>
>(({ className, ...props }, ref) => {
  return (
    <RadixDropdownMenu.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-gray-700", className)}
      {...props}
    />
  );
});

export default DropdownSeparator;
