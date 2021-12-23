function findOrder(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).reduce((total, _, i) => {
    total[i] = [];
    return total;
  }, {});

  for (let [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  var reduced = true;
  var order = [];

  while (reduced) {
    reduced = false;
    for (var key in graph) {
      graph[key] = graph[key].filter((c) => graph[c]);
      if (!graph[key].length) {
        order.push(Number(key));
        reduced = true;
        delete graph[key];
        numCourses--;
      }
    }
  }

  return numCourses ? [] : order;
}
const numCourses = 2,
  prerequisites = [[0, 1]];
console.log(findOrder(numCourses, prerequisites));
