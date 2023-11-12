import { ReactNode, createContext, useState } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";
import DropdownSub from "./DropdownSub";
import DropdownSubButton from "./DropdownSubButton";
import DropdownSubContent from "./DropdownSubContent";
import DropdownRadioItem from "./DropdownRadioItem";
import DropdownSeparator from "./DropdownSeparator";
import DropdownCheckboxItem from "./DropdownCheckboxItem";
import DropdownShortcut from "./DropdownShortcut";

export const DropdownContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDropdownMenu.Root>
    </DropdownContext.Provider>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
Dropdown.Sub = DropdownSub;
Dropdown.SubButton = DropdownSubButton;
Dropdown.SubContent = DropdownSubContent;
Dropdown.Group = RadixDropdownMenu.Group;
Dropdown.Separator = DropdownSeparator;
Dropdown.Shortcut = DropdownShortcut;
Dropdown.RadioGroup = RadixDropdownMenu.RadioGroup;
Dropdown.RadioItem = DropdownRadioItem;
Dropdown.CheckboxItem = DropdownCheckboxItem;

export default Dropdown;
