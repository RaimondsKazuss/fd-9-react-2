import { createContext } from "react";

interface ModalContextInterface {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
}

const ModalContext = createContext<ModalContextInterface>({
  isOpen: false,
  setIsOpen: () => {},
});

export default ModalContext;
