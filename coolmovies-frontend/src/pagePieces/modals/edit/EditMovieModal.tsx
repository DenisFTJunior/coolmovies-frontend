import { assoc, compose, pick } from "ramda";

import SelectDirector from "../../../components/edit/SelectDirector";
import SelectUser from "../../../components/edit/SelectUser";
import EditModal from "../../../components/modal/EditModal";
import { Movie } from "../../../schema/api/Movie";
import { Item } from "../../../schema/components/Modal";
import useMutateMovie from "../../../utils/hooks/useMutateMovie";

const editModalItems: Item[] = [
  { prop: "title", label: "Title", required: true },
  {
    prop: "releaseDate",
    label: "Release Date",
    typeInput: "Date",
    required: true,
  },
  {
    prop: "movieDirectorId",
    label: "Director",
    render: (data, item, { localValue, changeLocalValue }) => (
      <SelectDirector
        onBlur={(e, value) =>
          changeLocalValue({
            ...localValue,
            movieDirectorId: value?.id,
          })
        }
      />
    ),
    required: true,
  },
  {
    prop: "userCreatorId",
    label: "User",
    render: (data, item, { localValue, changeLocalValue }) => (
      <SelectUser
        onBlur={(e, value) =>
          changeLocalValue({
            ...localValue,
            userCreatorId: value?.id,
          })
        }
      />
    ),
    required: true,
  },
];

const cleanRequest = compose(
  pick(["userCreatorId", "movieDirectorId", "releaseDate", "title"]),
  (item: Movie) =>
    assoc("movieDirectorId", item?.director.id || item?.movieDirectorId)(item),
  (item: Movie) =>
    assoc("userCreatorId", item?.user.id || item?.userCreatorId)(item)
);

const EditMovieModal = () => {
  const { save, update } = useMutateMovie();
  return (
    <EditModal
      entity="movie"
      name="editMovie"
      items={editModalItems}
      request={save}
      updateRequest={update}
      cleanRequest={cleanRequest}
    />
  );
};

export default EditMovieModal;
