import { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";

export type MeetingGetOne = inferRouterOutputs<AppRouter>["meeting"]["getOne"];
export type MeetingGetMany =
  inferRouterOutputs<AppRouter>["meeting"]["getMany"]["items"];

export enum MeetingStatus {
  upcoming = "upcoming",
  active = "active",
  completed = "completed",
  processing = "processing",
  cancelled = "cancelled",
}
