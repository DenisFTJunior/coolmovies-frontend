import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { DeleteDirectorInput } from "../../../../schema/api/mutation/Director";
import { Director } from "../../../../schema/api/Director";

const DELETE_DIRECTOR_BY_ID_MUTATION = gql`
  mutation DeleteMovieDirectorById($input: CreateCommentInput) {
    deleteMovieDirectorById(input: $input) {
      id: clientMutationId
    }
  }
`;

const DELETE_DIRECTOR_BY_NODEID_MUTATION = gql`
  mutation DeleteMovieDirector($input: CreateCommentInput) {
    deleteMovieDirector(input: $input) {
      id: clientMutationId
    }
  }
`;

const deleteDirector = ({ nodeId, id }: DeleteDirectorInput) => {
  const query = nodeId
    ? DELETE_DIRECTOR_BY_NODEID_MUTATION
    : DELETE_DIRECTOR_BY_ID_MUTATION;
  if (!id && !nodeId) return { error: "Impossible delete :(" };
  return useMutation<Director, DeleteDirectorInput>(query, {
    variables: { nodeId, id },
    client: moviesClient,
    refetchQueries: ["MovieDirector", "AllDirectors"],
  });
};

export default deleteDirector;
