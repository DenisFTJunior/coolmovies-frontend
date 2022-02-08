import React from "react";
import { compose, pick } from "ramda";

import { Item } from "../../../schema/components/Modal";
import EditModal from "../../../components/modal/EditModal";
import useMutateDirector from "../../../utils/hooks/useMutateDirector";

const editModalItems: Item[] = [
  { prop: "name", label: "Name", required: true },
  { prop: "age", label: "Age", required: true, typeInput: "number" },
];

const cleanRequest = pick(["name", "age"]);

const EditDirectorModal = () => {
  const { save, update } = useMutateDirector();
  return (
    <EditModal
      entity="movieDirector"
      name="editDirector"
      items={editModalItems}
      request={save}
      updateRequest={update}
      cleanRequest={cleanRequest}
    />
  );
};

export default EditDirectorModal;
