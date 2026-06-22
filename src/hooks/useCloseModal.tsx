import { useEffect } from "react";

export const useCloseModal = (closeModal: () => void) => {
  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      console.log(e.code);
      if (e.code === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", keyDown);

    return () => {
      document.removeEventListener("keydown", keyDown);
      console.log("Buy!");
    };
  }, []);
};
