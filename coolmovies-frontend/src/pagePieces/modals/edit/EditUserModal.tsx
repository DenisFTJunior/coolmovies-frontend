import { compose, pick } from "ramda";
import React from "react";

import { Item } from "../../../schema/components/Modal";
import EditModal from "../../../components/modal/EditModal";
import useMutateUsers from "../../../utils/hooks/useMutateUsers";

const editModalItems: Item[] = [
  { prop: "name", label: "Name", required: true },
];

const cleanRequest = compose(pick(["name"]));

const EditUserModal = () => {
  const { save, update } = useMutateUsers();
  return (
    <EditModal
      entity="user"
      name="editUser"
      items={editModalItems}
      request={save}
      updateRequest={update}
      cleanRequest={cleanRequest}
    />
  );
};

export default EditUserModal;
