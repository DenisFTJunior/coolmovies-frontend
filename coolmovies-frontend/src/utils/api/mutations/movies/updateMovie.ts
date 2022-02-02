import { gql } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { UpdateMovieVars } from "../../../../schema/api/mutation/Movie";

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
  const mutation = nodeId
    ? UPDATE_MOVIE_BY_NODEID_MUTATION
    : UPDATE_MOVIE_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id, moviePatch } },
    refetchQueries: ["Movie", "Movies"],
  });
};

export default updateMovie;
