import { describe, expect, it, jest } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { CourseItem } from "@/features/courses-list/ui/course-item";

describe("course item", () => {
  it("should call delete callback", async () => {
    // test here
    const onDelete = jest.fn();
    render(
      <CourseItem
        course={{ id: "dsf", description: "sdfsd", name: "dsfdsf" }}
        onDelete={onDelete as never}
      />,
    );
    await userEvent.click(screen.getByText("Delete"));

    expect(onDelete).toHaveBeenCalled();
  });
});
