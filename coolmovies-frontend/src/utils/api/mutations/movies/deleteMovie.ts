import { gql } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { DeleteMovieVars } from "../../../../schema/api/mutation/Movie";

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
  const mutation = nodeId
    ? DELETE_MOVIE_BY_NODEID_MUTATION
    : DELETE_MOVIE_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id } },
    refetchQueries: ["Movies", "Movie"],
  });
};

export default deleteMovie;
