import { dbClient } from "@/lib/db";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";
import { CoursesList } from "@/features/courses-list/pub/courses-list";

export default async function Home() {
  const courses = await dbClient.course.findMany();

  console.log(courses);
  return (
    <div className="flex min-h-screen flex-col p-8">
      <h1>Check CI/CD Pipeline for testing</h1>
      <CreateCourseForm revalidatePath="/" className="max-w-[300px] mb-5" />
      <CoursesList revalidatePagePath="/" />
    </div>
  );
}
