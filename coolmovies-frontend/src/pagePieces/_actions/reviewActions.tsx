import AssignmentIcon from "@mui/icons-material/Assignment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Movie } from "../../schema/api/Movie";
import { Action } from "../../schema/components/Table";
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { actions as _reviewActions } from "../../utils/stateManager/slice/async/review/reviewSlice";
import { actions as modalActions } from "../../utils/stateManager/slice/sync/modalSlice";

const reviewActions = (): Action[] => {
  const dispatch = useStateDispatch();
  const { deleteReview } = _reviewActions;
  const { toogleModal } = modalActions;

  return [
    {
      icon: <EditIcon />,
      label: "Update",
      action: (item: Movie) => {
        toogleModal({ modal: "editReview", data: item });
      },
    },
    {
      icon: <DeleteIcon />,
      label: "Delete",
      action: (item: Movie) => {
        dispatch(deleteReview({ vars: { id: item.id } }));
      },
    },
  ];
};

export default reviewActions;
