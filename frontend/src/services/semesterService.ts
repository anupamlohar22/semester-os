import api from "./api";
import type { CreateSemester } from "../types/createSemester";
import type { Semester } from "../types/semester";

export async function getSemesters(): Promise<Semester[]> {
  const response = await api.get("/semesters");

  return response.data;
}

export async function createSemester(
  data: CreateSemester,
) {
  const response = await api.post(
    "/semesters",
    data,
  );

  return response.data;
}