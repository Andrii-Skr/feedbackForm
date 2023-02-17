import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateFeedbackDto } from "src/dto/create.feedback.dto";
import { Feedback } from "./feedback.model";

@Injectable()
export class FeedbacksService {
  constructor(@InjectModel(Feedback) private feedbackRepository: typeof Feedback) {}

  async createFeedback(dto: CreateFeedbackDto) {
    const feedback = await this.feedbackRepository.create(dto);
    return feedback;
  }

  async getAllFeedback() {
    const feedbacks = await this.feedbackRepository.findAll();
    return feedbacks;
  }
}
