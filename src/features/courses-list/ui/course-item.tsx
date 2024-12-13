"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { CourseListElement } from "@/features/courses-list/model/types";

export function CourseItem({
  course,
  onDelete,
}: {
  course: CourseListElement;
  onDelete: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
