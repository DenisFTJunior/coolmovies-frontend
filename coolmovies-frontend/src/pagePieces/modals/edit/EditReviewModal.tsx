import SelectDirector from "../../../components/edit/SelectDirector";
import SelectUser from "../../../components/edit/SelectUser";
import EditModal from "../../../components/modal/EditModal";
import { Item } from "../../../schema/components/Modal";
import useMutateMovie from "../../../utils/hooks/useMutateMovie";

const editModalItems: Item[] = [
  { prop: "title", label: "Title", required: true },
  { prop: "releaseDate", label: "Release Date", typeInput: "Date" },
  {
    prop: "directorId",
    label: "Director",
    render: (data, item, { localValue, changeLocalValue }) => (
      <SelectDirector
        onBlur={(e, value) =>
          changeLocalValue({
            ...localValue,
            directorId: value.id,
          })
        }
      />
    ),
  },
  {
    prop: "userCreatorId",
    label: "User",
    render: (data, item, { localValue, changeLocalValue }) => (
      <SelectUser
        onBlur={(e, value) =>
          changeLocalValue({
            ...localValue,
            userCreatorId: value.id,
          })
        }
      />
    ),
  },
];

const EditMovieModal = () => {
  const { save, update } = useMutateMovie();
  return (
    <EditModal
      entity="movie"
      name="editMovie"
      items={editModalItems}
      request={save}
      updateRequest={update}
    />
  );
};

export default EditMovieModal;
