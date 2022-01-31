import { Movie } from "../../../../schema/api/Movie";
import { Action } from "../../../../schema/components/Table";
import { useStateDispatch } from "../../../../utils/stateManager/hooks/useDispatch";
import { actions as movieActions } from "../../../../utils/stateManager/slice/async/movie/movieSlice";
import { actions as modalActions } from "../../../../utils/stateManager/slice/sync/modalSlice";

const movieListActions = (): Action[] => {
  const dispatch = useStateDispatch();
  const { deleteMovie } = movieActions;
  const { toogleModalEdit, transferDataToModal } = modalActions;

  return [
    {
      label: "Delete item",
      action: (item: Movie) => dispatch(deleteMovie({ vars: { id: item.id } })),
      Icon: "DeleteIcon",
    },
    {
      label: "Update item",
      action: (item: Movie) => {
        dispatch(transferDataToModal({ modal: "edit", data: item }));
        dispatch(toogleModalEdit());
      },
      Icon: "DeleteIcon",
    },
  ];
};

export default movieListActions;
