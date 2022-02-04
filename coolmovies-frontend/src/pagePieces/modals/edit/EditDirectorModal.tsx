import React from "react";

import { Item } from "../../../schema/components/Modal";
import EditModal from "../../../components/modal/EditModal";
import useMutateDirector from "../../../utils/hooks/useMutateDirector";

const editModalItems: Item[] = [
  { prop: "name", label: "Name", required: true },
  { prop: "age", label: "Age", required: true, typeInput: "number" },
];

const EditDirectorModal = () => {
  const { save, update } = useMutateDirector();
  return (
    <EditModal
      entity="movieDirector"
      name="editDirector"
      items={editModalItems}
      request={save}
      updateRequest={update}
    />
  );
};

export default EditDirectorModal;
