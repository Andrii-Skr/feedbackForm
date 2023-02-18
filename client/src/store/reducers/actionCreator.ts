import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Feedback, PostFeedback } from "../types/feedbackTypes";

export const getFeedback = createAsyncThunk("feedback/getAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<Feedback[]>(`/api/feedbacks`);

    return response.data;
  } catch (error) {
    console.log("error", error);
    return thunkAPI.rejectWithValue("Something went wrong:(");
  }
});
export const createFeedback = createAsyncThunk(
  "feedback/",
  async (data: PostFeedback, thunkAPI) => {
    try {
      const response = await axios.post<Feedback[]>(`/api/feedbacks`, data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue("Something went wrong:(");
    }
  }
);
