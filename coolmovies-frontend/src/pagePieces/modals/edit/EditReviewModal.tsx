import SelectMovie from "../../../components/edit/SelectMovie";
import EditModal from "../../../components/modal/EditModal";
import { Item } from "../../../schema/components/Modal";
import useMutateMovie from "../../../utils/hooks/useMutateMovie";

const editModalItems: Item[] = [
  { prop: "title", label: "Title", required: true },
  { prop: "releaseDate", label: "Release Date", typeInput: "Date" },
  {
    prop: "userCreatorId",
    label: "User",
    render: (data, item, { localValue, changeLocalValue }) => (
      <SelectMovie
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
      entity="movieReview"
      name="editReview"
      items={editModalItems}
      request={save}
      updateRequest={update}
    />
  );
};

export default EditMovieModal;
