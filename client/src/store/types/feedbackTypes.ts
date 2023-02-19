export type Feedback = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type FeedbackState = {
  Feedbacks: Feedback[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string;
};

export type PostFeedback = {
  name: string;
  email: string;
  message: string;
};
