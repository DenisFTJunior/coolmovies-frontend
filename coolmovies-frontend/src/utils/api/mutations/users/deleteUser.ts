import { gql } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { DeleteUserVars } from "../../../../schema/api/mutation/User";

const DELETE_USER_BY_ID_MUTATION = gql`
  mutation DeleteUserById($input: DeleteUserByIdInput) {
    deleteUserById(input: $input) {
      id: clientMutationId
    }
  }
`;

const DELETE_USER_BY_NODEID_MUTATION = gql`
  mutation DeleteUser($input: DeleteUserInput) {
    deleteUser(input: $input) {
      id: clientMutationId
    }
  }
`;

const deleteUser = ({ nodeId, id }: DeleteUserVars) => {
  const mutation = nodeId
    ? DELETE_USER_BY_NODEID_MUTATION
    : DELETE_USER_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id } },
    refetchQueries: ["User", "Users"],
  });
};

export default deleteUser;
