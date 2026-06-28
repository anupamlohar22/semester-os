import api from "./api";
import type { Exam } from "../types/exam";

export async function getExams(): Promise<Exam[]> {
  const response = await api.get("/exams");

  return response.data;
}