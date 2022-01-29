import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { UpdateMovieInput, UpdateMovieVars } from "../../../../schema/api/mutation/Movie";
import { Movie } from "../../../../schema/api/Movie";

const UPDATE_MOVIE_BY_ID_MUTATION = gql`
  mutation UpdateMovieById($input: UpdateMovieByIdInput) {
    updateMovieById(input: $input) {
      id: clientMutationId
    }
  }
`;

const UPDATE_MOVIE_BY_NODEID_MUTATION = gql`
  mutation updateMovie($input: UpdateMovieInput) {
    updateMovie(input: $input) {
      id: clientMutationId
    }
  }
`;

const updateMovie = ({ nodeId, id, moviePatch }: UpdateMovieVars) => {
  const query = nodeId
    ? UPDATE_MOVIE_BY_NODEID_MUTATION
    : UPDATE_MOVIE_BY_ID_MUTATION;
  if (!id && !nodeId) return { error: "Impossible delete :(" };
  return useMutation<Movie, UpdateMovieInput>(query, {
    variables: { input: { nodeId, id, moviePatch } },
    client: moviesClient,
    refetchQueries: ["MovieReview"],
  });
};

export default updateMovie;
