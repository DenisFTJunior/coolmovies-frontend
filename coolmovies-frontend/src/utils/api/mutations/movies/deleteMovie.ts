import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import {
  DeleteMovieInput,
  DeleteMovieVars,
} from "../../../../schema/api/mutation/Movie";
import { Movie } from "../../../../schema/api/Movie";

const DELETE_MOVIE_BY_ID_MUTATION = gql`
  mutation DeleteMovieById($input: DeleteMovieByIdInput) {
    deleteMovieById(input: $input) {
      id: clientMutationId
    }
  }
`;

const DELETE_MOVIE_BY_NODEID_MUTATION = gql`
  mutation DeleteMovie($input: DeleteMovieInput) {
    deleteMovie(input: $input) {
      id: clientMutationId
    }
  }
`;

const deleteMovie = ({ nodeId, id }: DeleteMovieVars) => {
  const query = nodeId
    ? DELETE_MOVIE_BY_NODEID_MUTATION
    : DELETE_MOVIE_BY_ID_MUTATION;
  return useMutation<Movie, DeleteMovieInput>(query, {
    variables: { input: { nodeId, id } },
    client: moviesClient,
    refetchQueries: ["Movies", "Movie"],
  });
};

export default deleteMovie;
