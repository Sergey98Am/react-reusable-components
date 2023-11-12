import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode, createContext, useState } from "react";

export const DropdownSubContext = createContext<{
  openSub: boolean;
  setOpenSub: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  openSub: false,
  setOpenSub: () => {},
});

const DropdownSub = ({ children }: { children: ReactNode }) => {
  const [openSub, setOpenSub] = useState(false);

  return (
    <DropdownSubContext.Provider value={{ openSub, setOpenSub }}>
      <RadixDropdownMenu.Sub open={openSub} onOpenChange={setOpenSub}>
        {children}
      </RadixDropdownMenu.Sub>
    </DropdownSubContext.Provider>
  );
};

export default DropdownSub;
