import { apiSlice } from "../../redux/api/auth/apiSlice";
import { IUserUpdateReq } from "../../types/auth";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        showMe: builder.query({
            query: () => ({
                url: "/user/me",
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError,
            }),
            providesTags: ["User"]
        }),
        updateUser: builder.mutation({
            query: (initialUserData: IUserUpdateReq) => ({
                url: "/user/me",
                method: "PUT",
                body: {
                    ...initialUserData
                }
            }),
            invalidatesTags: ["User"]
        })
    })
});

export const { useShowMeQuery, useUpdateUserMutation } = userApiSlice