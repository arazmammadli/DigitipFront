import { apiSlice } from "../../redux/api/auth/apiSlice";
import { logout } from "../reducers/authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        authCheck: builder.mutation({
            query: (credentials: { email: string }) => ({
                url: "/auth/check",
                method: "post",
                body: { ...credentials }
            })
        }),
        signinUser: builder.mutation({
            query: (credentials: { email: string; password: string }) => ({
                url: "/auth/login",
                method: "post",
                body: { ...credentials }
            })
        }),
        signinGoogle: builder.mutation({
            query: (credentials: { tokenId: string }) => ({
                url: "/auth/google",
                method: "post",
                body:{...credentials}
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "post"
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(logout());
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000)
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        signupUser: builder.mutation({
            query: (credentials: { name: string, email: string, password: string, repeatPassword: string }) => ({
                url: "/auth/signup",
                method: "post",
                body: { ...credentials }
            })
        }),
        forgotPassword: builder.mutation({
            query: (credentials: { email: string }) => {
                return {
                    url: "/auth/forgotpassword",
                    method: "post",
                    body: { ...credentials }
                }
            }
        }),
        resetPassword: builder.mutation({
            query: (credentials: { password: string, verifyPassword: string, resetToken: string }) => {
                return {
                    url: `/auth/resetpassword/${credentials.resetToken}`,
                    method: "post",
                    body: {
                        password: credentials.password,
                        verifyPassword: credentials.verifyPassword
                    }
                }
            }
        })
    })
});

export const { useAuthCheckMutation,
    useSigninUserMutation,
    useSignupUserMutation,
    useSigninGoogleMutation,
    useSendLogoutMutation, useForgotPasswordMutation, useResetPasswordMutation } = authApiSlice;