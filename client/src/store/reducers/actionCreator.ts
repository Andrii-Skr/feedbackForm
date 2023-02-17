import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Feedback, PostFeedback } from "../types/feedbackTypes";

export const getFeedback = createAsyncThunk("feedback/getAll", async (_, thunkAPI) => {
  try {
    //console.log("response", `${process.env.API_URL}/Feedbacks`);
    const response = await axios.get<Feedback[]>(`http://localhost:3200/Feedbacks`);

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
      console.log(data);
      const response = await axios.post<Feedback[]>(`http://localhost:3200/Feedbacks`, data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue("Something went wrong:(");
    }
  }
);
