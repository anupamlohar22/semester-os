import api from "./api";
import type { Assignment } from "../types/assignment";

export async function getAssignments(): Promise<Assignment[]> {
  const response = await api.get("/assignments");

  return response.data;
}