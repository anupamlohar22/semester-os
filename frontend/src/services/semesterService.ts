import api from "./api";
import type { Semester } from "../types/semester";

export async function getSemesters(): Promise<Semester[]> {
  const response = await api.get("/semesters");

  return response.data;
}