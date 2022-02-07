import React from "react";
import { Box, Rating, TextField, Typography } from "@mui/material";

import SelectMovie from "../../../components/edit/SelectMovie";
import SelectUser from "../../../components/edit/SelectUser";
import EditModal from "../../../components/modal/EditModal";
import { Item } from "../../../schema/components/Modal";
import useMutateReview from "../../../utils/hooks/useMutateReview";

const editModalItems: Item[] = [
  { prop: "title", label: "Title", required: true },
  {
    prop: "movieId",
    label: "Movie",
    render: (data, item, { localValue, changeLocalValue }) => (
      <SelectMovie
        onBlur={(e, value) =>
          changeLocalValue({
            ...localValue,
            movieId: value?.id,
          })
        }
      />
    ),
    required: true,
  },
  {
    prop: "userReviewerId",
    label: "User",
    render: (data, item, { localValue, changeLocalValue }) => (
      <SelectUser
        onBlur={(e, value) =>
          changeLocalValue({
            ...localValue,
            userReviewerId: value?.id,
          })
        }
      />
    ),
    required: true,
  },
  {
    prop: "rating",
    label: "Rating",
    render: (data, item, { localValue, changeLocalValue }) => (
      <Rating
        onChange={(e, value) =>
          changeLocalValue({
            ...localValue,
            rating: value,
          })
        }
      />
    ),
    required: true,
  },
  {
    prop: "body",
    label: "Review Body",
    render: (data, item, { localValue, changeLocalValue }) => (
      
        <TextField
          sx={{ backgroundColor: "#fff", width: "100%" }}
          label="Body"
          multiline
          rows={6}
          value={localValue?.body}
          onChange={(e) =>
            changeLocalValue({
              ...localValue,
              body: e.target.value,
            })
          }
        />

    ),
    required: true,
  },
];

const EditReviewModal = () => {
  const { save, update } = useMutateReview();
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

export default EditReviewModal;
