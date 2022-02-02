import { gql } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { DeleteDirectorVars } from "../../../../schema/api/mutation/Director";

const DELETE_DIRECTOR_BY_ID_MUTATION = gql`
  mutation DeleteMovieDirectorById($input: DeleteMovieDirectorByIdInput) {
    deleteMovieDirectorById(input: $input) {
      id: clientMutationId
    }
  }
`;

const DELETE_DIRECTOR_BY_NODEID_MUTATION = gql`
  mutation DeleteMovieDirector($input: DeleteMovieDirectorInput) {
    deleteMovieDirector(input: $input) {
      id: clientMutationId
    }
  }
`;

const deleteDirector = ({ nodeId, id }: DeleteDirectorVars) => {
  const mutation = nodeId
    ? DELETE_DIRECTOR_BY_NODEID_MUTATION
    : DELETE_DIRECTOR_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id } },
    refetchQueries: ["MovieDirector", "AllDirectors"],
  });
};

export default deleteDirector;
