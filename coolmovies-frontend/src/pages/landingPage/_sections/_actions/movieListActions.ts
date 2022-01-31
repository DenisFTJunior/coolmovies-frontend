import { Movie } from "../../../../schema/api/Movie";
import { Action } from "../../../../schema/components/Table";
import { useStateDispatch } from "../../../../utils/stateManager/hooks/useDispatch";
import { actions as movieActions } from "../../../../utils/stateManager/slice/async/movie/movieSlice";
import { actions as modalActions } from "../../../../utils/stateManager/slice/sync/modalSlice";

const movieListActions = (): Action[] => {
  const dispatch = useStateDispatch();
  const { deleteMovie } = movieActions;
  const { toogleModalEdit, toogleModalDetail, transferDataToModal } =
    modalActions;

  return [
    {
      label: "See Details",
      action: (item: Movie) => {
        dispatch(transferDataToModal({ modal: "detail", data: item }));
        dispatch(toogleModalDetail());
      },
      Icon: "Assignment",
    },
    {
      label: "Update",
      action: (item: Movie) => {
        dispatch(transferDataToModal({ modal: "edit", data: item }));
        dispatch(toogleModalEdit());
      },
      Icon: "Edit",
    },
    {
      label: "Delete",
      action: (item: Movie) => dispatch(deleteMovie({ vars: { id: item.id } })),
      Icon: "Delete",
    },
  ];
};

export default movieListActions;
