import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import {
  DeleteUserInput,
  DeleteUserVars,
} from "../../../../schema/api/mutation/User";
import { User } from "../../../../schema/api/User";

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
  const query = nodeId
    ? DELETE_USER_BY_NODEID_MUTATION
    : DELETE_USER_BY_ID_MUTATION;
  if (!id && !nodeId) return { error: "Impossible delete :(" };
  return useMutation<User, DeleteUserInput>(query, {
    variables: { input: { nodeId, id } },
    client: moviesClient,
    refetchQueries: ["User", "Users"],
  });
};

export default deleteUser;
