import loginInterface from "models/login.model";
import { UserInterface } from "models/user.model";
import service from "./";

export const usersApi = service.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<UserInterface, loginInterface>({
      query: (data) => ({
        url: "login",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    getUsers: build.query<UserInterface[], void>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "User" as const,
                id,
              })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
    getUser: build.query<UserInterface, number>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    addUser: build.mutation<UserInterface, UserInterface>({
      query(body) {
        return {
          url: `users`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),

    updateUser: build.mutation<UserInterface, UserInterface>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `users/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
    deleteUser: build.mutation<UserInterface, number>({
      query(id) {
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "User" as const, id }],
    }),
  }),
});

export const {
  endpoints,
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
} = usersApi;
