"use server";
import { coursesRepository } from "@/features/courses-list/courses.repository";
import { revalidatePath } from "next/cache";
import { CreateCourseListElementCommand } from "@/features/courses-list/model/types";

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
