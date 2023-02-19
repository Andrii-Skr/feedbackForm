import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feedback, FeedbackState } from "../types/feedbackTypes";
import { createFeedback, getFeedback } from "./actionCreator";

const initialState: FeedbackState = {
  Feedbacks: [],
  isLoading: false,
  isLoaded: false,
  error: "",
};
export const FeedbackSlice = createSlice({
  name: "feedback",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeedback.fulfilled, (state, action: PayloadAction<Feedback[]>) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.error = "";
        state.Feedbacks = action.payload;
      })
      .addCase(getFeedback.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(getFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const feedbackReducer = FeedbackSlice.reducer;
