import React from "react";
import CourseItem from "./course-item";

type course = number;
const TrendingCourses = () => {
  const courses: course[] = [1, 2, 3];
  return (
    <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
      {courses.map((course) => (
        <CourseItem key={course} />
      ))}
    </ul>
  );
};

export default TrendingCourses;
