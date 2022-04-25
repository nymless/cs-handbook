export const breadthFirstSearch = `
function breadthFirstSearch(graph, vertex) {
  let searchQueue = [];
  searchQueue.push(...graph[vertex]);
  let searched = [];

  while (searchQueue.length) {
    let node = searchQueue.shift();

    if (!searched.includes(node)) {
      if (isDesired(node)) {
        return true;
      } else {
        searchQueue.push(...graph[node]);
        searched.push(node);
      }
    }
  }

  return false;

  function isDesired(node) {} // return true if node is correct or false otherwise
}
`;
