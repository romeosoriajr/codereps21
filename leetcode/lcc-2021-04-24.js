function criticalConnections (n, criticalConnections) {

  var graph = new Map();

  for (let [v1, v2] of criticalConnections) {
    var edges1 = graph.get(v1) || [];
    var edges2 = graph.get(v2) || [];

    edges1.push(v2);
    edges2.push(v1);

    graph.set(v1, edges1);
    graph.set(v2, edges2);

  }

  var time = 0;
  var criticals = [];
  var lows = [];
  var discoveries = Array(n).fill(Infinity);

  helper(0, -1);

  return criticals;

  function helper(v1, prev) {
    time++;
    discoveries[v1] = time;
    lows[v1] = time;

    for (let v2 of graph.get(v1)) {
      if (v2 == prev) continue;
      if (discoveries[v2] === Infinity) {
        helper(v2, v1);
        lows[v1] = Math.min(lows[v1], lows[v2]);
        if (lows[v2] > discoveries[v1]) {
          criticals.push([v1, v2])
        }
      } else {
        lows[v1] = Math.min(lows[v1], discoveries[v2])
      }
    }
  }
};

console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]));
