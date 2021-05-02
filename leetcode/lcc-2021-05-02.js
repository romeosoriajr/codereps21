function scheduleCourse(courses) {
  const n = courses.length;

  if (!n) return 0;

  courses.sort((a, b) => b[1] - a[1]);

  let courseCount = Array(n+1).fill(-1);

  courseCount[0] = Number.MAX_SAFE_INTEGER
  let maxCount = 0;

  for (let [duration, deadline] of courses) {
    for (let i=maxCount+1; i > 0; i--) {
      courseCount[i] = Math.max(courseCount[i], Math.min(courseCount[i-1], deadline) - duration);

      if (courseCount[i] > -1 && i > maxCount) maxCount = i;
    }
  }

  return maxCount;

}

// will TLE
function scheduleCourseRecursive(courses) {

  var maxCourses = 0;
  var visited = Array(courses.length).fill(false);

  helper(courses, 0, visited, 0);

  function helper(courses, daysPast, visited, currCount) {

    maxCourses = Math.max(maxCourses, currCount);

    for (let i=0; i < courses.length; i++) {
      var [duration, lastDay]= courses[i];

      if (visited[i] || daysPast + duration > lastDay) continue;

      visited[i] = true;
      helper(courses, daysPast+duration, visited, currCount+1);
      visited[i] = false;

    }

  }

  return maxCourses;

}

const courses = [[100,200],[200,1300],[1000,1250],[2000,3200]];
const altCourses = [[1,2]];

console.log(scheduleCourse(courses));
