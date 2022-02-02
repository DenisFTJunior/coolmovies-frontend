import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as modalActions } from "../stateManager/slice/sync/modalSlice";

const useModal = (name: string) => {
  const modalState = useStateSelector((state) => state.modal);
  const { closeModal, toogleModal } = modalActions;
  const isOpen = modalState.modal.edit.isOpen;
  const data = modalState.modal.edit.data;

  return [modalState.modal[name],{closeModal, toogleModal}, modalState];
};

export default useModal;
