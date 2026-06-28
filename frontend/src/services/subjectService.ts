import api from "./api";
import type { Subject } from "../types/subject";

export async function getSubjects(): Promise<Subject[]> {
  const response = await api.get("/subjects");

  return response.data;
}