import { bundles, techs } from "../lib/lists";

const RemoveDuplicates = (courses) => {
  let newCourses = [];
  courses.forEach((i) => {
    if (!newCourses.includes(i)) {
      newCourses.push(i);
    }
  });
  return newCourses;
};

export default function GenerateCourses(selected) {
  let courses = [];
  if (selected.length > 0) {
    if (selected[0].startsWith("b")) {
      courses = bundles.find((i) => i.id == selected[0]).contents;
    } else {
      techs.forEach((i) => {
        if (selected.includes(i.id)) {
          courses = [...courses, ...i.contents];
        }
      });
      courses = RemoveDuplicates(courses);
    }
  }

  return courses;
}
