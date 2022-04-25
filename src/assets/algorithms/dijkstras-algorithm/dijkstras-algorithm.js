export const dijkstrasAlgorithm = `
function dijkstrasAlgorithm(graph, source) {
  let weights = new Weights(graph, source);
  let parents = new Parents(graph);
  let processed = [];
  let node = findLowestWeightNode(weights);

  while (node) {
    let weight = weights[node];
    let neighbors = graph[node];

    for (let neighbor of Object.keys(neighbors)) {
      let newWeight = weight + neighbors[neighbor];

      if (weights[neighbor] > newWeight) {
        weights[neighbor] = newWeight;
        parents[neighbor] = node;
      }
    }

    processed.push(node);
    node = findLowestWeightNode(weights);
  }

  return { weights, parents };

  function Weights(graph, source) {
    for (let node of Object.keys(graph)) {
      if (node !== source) {
        this[node] = Infinity;
      }
    }

    for (let neighbor of Object.keys(graph[source])) {
      this[neighbor] = graph[source][neighbor];
    }
  }

  function Parents(graph) {
    for (let node of Object.keys(graph)) {
      if (node !== source) {
        this[node] = null;
      }
    }

    for (let neighbor of Object.keys(graph[source])) {
      this[neighbor] = source;
    }
  }

  function findLowestWeightNode(weights) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node of Object.keys(weights)) {
      let cost = weights[node];

      if (cost < lowestCost && !processed.includes(node)) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }
    return lowestCostNode;
  }
}
`;
