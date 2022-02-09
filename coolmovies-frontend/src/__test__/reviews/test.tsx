import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";

import ReviewCard from "../../pagePieces/cards/ReviewCard";
import EditReviewModal from "../../pagePieces/modals/edit/EditReviewModal";
import { Review } from "../../schema/api/Review";
import { Provider } from "./config/Provider";
import useFetchingReviews from "../../utils/hooks/useFetchReview";
import useMutateReview from "../../utils/hooks/useMutateReview";
import { Reviews } from "../../schema/api/Reviews";

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

describe("CRUD Reviews and editCard", () => {
  const { result: resultQuery } = renderHook(() => useFetchingReviews());
  console.log("resultQuery", resultQuery.current);
  const { result: resultMutation } = renderHook(() => useMutateReview());
  console.log("resultMutation", resultMutation.current);
  const { save, remove, update } = resultMutation.current;
  const [reviews] = resultQuery.current;
  const review = reviews?.allMovieReviews?.reviews[0];

  it("should exist card", () => {
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

  it("add card", () => {
    const initialLenght = reviews?.allMovieReviews?.reviews.lenght;
    save({
      movieReview: {
        title: "test title",
        movieId: review.movieId,
        userReviewerId: review.userReviewerId,
        rating: 2,
        body: "test lorem ipsum",
      },
    });

    const afterRemoveLenght = reviews?.allMovieReviews?.reviews.lenght;
    expect(initialLenght).toBeGreaterThan(afterRemoveLenght);
  });

  it("update card", () => {
    const createdReview = reviews?.allMovieReviews?.reviews.filter(
      (review: Review) => review.title === "test title"
    );
    update({
      id: createdReview[0].id,
      movieReviewPatch: {
        title: "test update review",
        movieId: review.movieId,
        userReviewerId: review.userReviewerId,
        rating: 5,
        body: "test lorem ipsum",
      },
    });

    const updateReview = reviews?.allMovieReviews?.reviews.filter(
      (review: Review) => review.title === "test update review"
    );

    expect(updateReview[0].title).toBe("test update review");
    expect(updateReview[0].movieId).toBe(review.movieId);
    expect(updateReview[0].userReviewerId).toBe(review.userReviewerId);
    expect(updateReview[0].rating).toBe(5);
    expect(updateReview[0].body).toBe("test lorem ipsum");
  });

  it("removeCard", () => {
    const initialLenght = reviews?.allMovieReviews?.reviews.lenght;

    const updateReview = reviews?.allMovieReviews?.reviews.filter(
      (review: Review) => review.title === "test update review"
    );
    remove({ id: updateReview[0].id });

    const reviewCard = renderReview(updateReview);
    const afterRemoveLenght = reviews?.allMovieReviews?.reviews.lenght;
    const notFoundMessage = reviewCard.findByTestId("reviewNotFound");

    expect(notFoundMessage).toBeDefined();
    expect(initialLenght).toBeGreaterThan(afterRemoveLenght);
  });

  it("should exist EditReviewCard", () => {
    const addReviewCard = renderAddReview();
    expect(addReviewCard).toBeDefined();
  });
});
