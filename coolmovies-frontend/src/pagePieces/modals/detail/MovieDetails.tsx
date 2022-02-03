import { ShowDirectorById } from "../../../components/show/ShowDirector";
import { ShowReviewById } from "../../../components/show/ShowReview";
import { DetailItem } from "../../../schema/components/Modal";

const detailModalItems: DetailItem[] = [
  { label: "Title", prop: "title" },
  { label: "Release Date", prop: "releaseDate" },
  {
    prop: "directorId",
    label: "Director",
    render: (data, item) => <ShowDirectorById id={data.movieDirectorId} />,
  },
  {
    prop: "reviewId",
    label: "Review",
    render: (data, item) => <ShowReviewById movieId={data.id} />,
  },
];
