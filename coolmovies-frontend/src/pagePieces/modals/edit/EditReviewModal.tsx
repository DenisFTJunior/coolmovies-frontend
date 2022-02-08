import React from "react";
import { Box, Rating, TextField, Typography } from "@mui/material";

import SelectMovie from "../../../components/edit/SelectMovie";
import SelectUser from "../../../components/edit/SelectUser";
import EditModal from "../../../components/modal/EditModal";
import { Item } from "../../../schema/components/Modal";
import useMutateReview from "../../../utils/hooks/useMutateReview";
import { assoc, compose, pick } from "ramda";
import { Review } from "../../../schema/api/Review";

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
        id={data?.movieId}
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
        id={data?.userReviewerId}
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
        defaultValue={data?.rating || 0}
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
        defaultValue={data?.body || ""}
      />
    ),
    required: true,
  },
];

const cleanRequest = pick([
  "userCreatorId",
  "userReviewerId",
  "movieId",
  "title",
]);

const EditReviewModal = () => {
  const { save, update } = useMutateReview();
  return (
    <EditModal
      entity="movieReview"
      name="editReview"
      items={editModalItems}
      request={save}
      updateRequest={update}
      cleanRequest={cleanRequest}
    />
  );
};

export default EditReviewModal;
