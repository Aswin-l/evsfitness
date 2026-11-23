import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

/**
 * API foundation only. Replace/extend these endpoints when the backend is ready.
 * Keep server secrets out of NEXT_PUBLIC_* variables.
 */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Enquiry", "Membership", "Program"],
  endpoints: (builder) => ({
    submitEnquiry: builder.mutation<{ success: boolean; message?: string }, {
      name: string; phone: string; email?: string; goal: string; message?: string;
    }>({
      query: (body) => ({ url: "/enquiries", method: "POST", body }),
      invalidatesTags: ["Enquiry"],
    }),
    getPrograms: builder.query<unknown[], void>({
      query: () => "/programs",
      providesTags: ["Program"],
    }),
  }),
});
export const { useSubmitEnquiryMutation, useGetProgramsQuery } = apiSlice;
