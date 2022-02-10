import { render, RenderResult, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import ReviewCard from "../../pagePieces/cards/ReviewCard";
import EditReviewModal from "../../pagePieces/modals/edit/EditReviewModal";
import { Provider } from "./config/Provider";
import { Review } from "../../schema/api/Review";

const renderReview = (review: Review): RenderResult =>
  render(
    <Provider>
      <ReviewCard review={review} />
    </Provider>
  );

const renderAddReview = (): RenderResult =>
  render(
    <Provider>
      <EditReviewModal />
    </Provider>
  );

const review: Review = {
  id: "3121111",
  nodeId: "2321",
  body: "teste body",
  movieId: "12312321312",
  rating: 3,
  title: "My title test",
  userReviewerId: "231123",
};

describe("card and editCard exist", () => {
  it("should exist card", async () => {
    const reviewCard = renderReview(review);
    const title = reviewCard.findByTestId("reviewTitle");
    const movie = reviewCard.findByTestId("reviewMovie");
    const body = reviewCard.findByTestId("reviewBody");
    const rating = reviewCard.findByTestId("reviewRating");

    expect(reviewCard).toBeDefined();
    expect(title).toBeDefined();
    expect(movie).toBeDefined();
    expect(body).toBeDefined();
    expect(rating).toBeDefined();
  });

  it("should exist EditReviewCard", () => {
    const addReviewCard = renderAddReview();
    expect(addReviewCard).toBeDefined();
  });
});
