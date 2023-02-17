import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateFeedbackDto } from "src/dto/create.feedback.dto";
import { Feedback } from "./feedback.model";
import { FeedbacksService } from "./feedbacks.service";

@ApiTags("Feedback")
@Controller("/feedbacks")
export class FeedbacksController {
  constructor(private feedbacksService: FeedbacksService) {}

  @ApiOperation({ summary: "Create feedback" })
  @ApiResponse({ status: 200, type: Feedback })
  @Post()
  create(@Body() feedbackDto: CreateFeedbackDto) {
    return this.feedbacksService.createFeedback(feedbackDto);
  }
  @ApiOperation({ summary: "Return all feedback" })
  @ApiResponse({ status: 200, type: [Feedback] })
  @Get()
  getAllFeedbacks() {
    return this.feedbacksService.getAllFeedback();
  }
}
