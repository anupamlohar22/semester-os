import api from "./api";
import type { Grade } from "../types/grade";

export async function getGrades(): Promise<Grade[]> {
  const response = await api.get("/grades");

  return response.data;
}