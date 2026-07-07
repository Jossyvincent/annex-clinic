import { db } from "~/lib/db.server";
import crypto from "crypto";

export async function createQuestion(data: {
  title?: string;
  question?: string;
  age?: number;
  gender?: string;
}) {
  const token = crypto.randomUUID();
  try {
    await db.query(
      `INSERT INTO questions (token, title, question, age, gender) 
       VALUES ($1, $2, $3, $4, $5)`,
      [token, data.title, data.question, data.age, data.gender],
    );
  } catch (error) {
    console.log("Failed to create question:", error);
    throw new Error("Unable to create question");
  }
  return {
    token,
    questionLink: `/questions/${token}`,
    Error
  };
}
