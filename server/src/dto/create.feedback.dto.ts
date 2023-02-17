import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateFeedbackDto {
  @ApiProperty({ example: "test@test.org", description: "Email" })
  @IsString({ message: "Change to string" })
  @IsEmail({}, { message: "Email is wrong" })
  @IsNotEmpty({ message: "Can not be empty" })
  readonly email: string;

  @IsString({ message: "Change to string" })
  @IsNotEmpty({ message: "Can not be empty" })
  @ApiProperty({ example: "Valera", description: "Name" })
  readonly name: string;

  @IsString({ message: "Change to string" })
  @IsNotEmpty({ message: "Can not be empty" })
  @ApiProperty({ example: "some text", description: "message" })
  readonly message: string;
}
