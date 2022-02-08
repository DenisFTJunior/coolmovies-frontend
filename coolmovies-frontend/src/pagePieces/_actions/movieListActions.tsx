import AssignmentIcon from "@mui/icons-material/Assignment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Movie } from "../../schema/api/Movie";
import { Action } from "../../schema/components/Table";
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { actions as movieActions } from "../../utils/stateManager/slice/async/movie/movieSlice";
import { actions as modalActions } from "../../utils/stateManager/slice/sync/modalSlice";


const movieListActions = (): Action[]  => {
  const dispatch = useStateDispatch();
  const { deleteMovie } = movieActions;
  const { toogleModal } = modalActions;

  return [
    {
      icon: <AssignmentIcon />,
      label: "See Details",
      action: (item: Movie) => {
        dispatch(toogleModal({ modal: "detailMovie", data: item }));
      },
    },
    {
      icon: <EditIcon />,
      label: "Update",
      action: (item: Movie) => {
        dispatch(toogleModal({ modal: "editMovie", data: item }));
      },
    },
    {
      icon: <DeleteIcon />,
      label: "Delete",
      action: (item: Movie) => {
        dispatch(deleteMovie({ vars: { id: item.id } }));
      },
    },
  ];
};

export default movieListActions;
