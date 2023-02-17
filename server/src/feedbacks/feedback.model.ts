import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface FeedbackCreationAttributes {
  name: string;
  email: string;
  message: string;
}

@Table({ tableName: "feedbacks" })
export class Feedback extends Model<Feedback, FeedbackCreationAttributes> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ApiProperty({ example: "Valera", description: "Name" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @ApiProperty({ example: "test@test.org", description: "Email" })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;
  @ApiProperty({ example: "some text", description: "message" })
  @Column({ type: DataType.STRING, allowNull: false })
  message: string;
}
