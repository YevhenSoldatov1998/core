import { cache } from "react";
import { dbClient } from "@/lib/db";
import {
  CourseListElement,
  CreateCourseListElementCommand,
  DeleteCourseListElementCommand,
} from "@/features/courses-list/model/types";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );
  createCourseElement = (
    command: CreateCourseListElementCommand,
  ): Promise<CourseListElement> => {
    return dbClient.course.create({
      data: command,
    });
  };
  deleteCourseElement = (command: DeleteCourseListElementCommand) => {
    return dbClient.course.delete({
      where: {
        id: command.id,
      },
    });
  };
}

export const coursesRepository = new CoursesRepository();
