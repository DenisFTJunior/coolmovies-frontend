import { gql } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { UpdateDirectorVars } from "../../../../schema/api/mutation/Director";

const UPDATE_DIRECTOR_BY_ID_MUTATION = gql`
  mutation UpdateMovieDirectorByID($input: UpdateMovieDirectorByIdInput) {
    updateMovieDirector(input: $input) {
      id: clientMutationId
    }
  }
`;

const UPDATE_DIRECTOR_BY_NODEID_MUTATION = gql`
  mutation UpdateMovieDirector($input: UpdateMovieDirectorInput) {
    updateMovieDirector(input: $input) {
      id: clientMutationId
    }
  }
`;

const updateDirector = ({
  nodeId,
  id,
  movieDirectorPatch,
}: UpdateDirectorVars) => {
  const mutation = nodeId
    ? UPDATE_DIRECTOR_BY_NODEID_MUTATION
    : UPDATE_DIRECTOR_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id, movieDirectorPatch } },
    refetchQueries: ["MovieDirector", "AllDirectors"],
  });
};

export default updateDirector;
