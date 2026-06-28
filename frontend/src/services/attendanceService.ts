import api from "./api";
import type { Attendance } from "../types/attendance";

export async function getAttendance(): Promise<Attendance[]> {
  const response = await api.get("/attendance");

  return response.data;
}