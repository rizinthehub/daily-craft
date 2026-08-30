/**
 * Graph Implementation (Adjacency List)
 */

interface GraphEdge {
  to: number;
  weight?: number;
}

export class Graph {
  private adjacency: Map<number, GraphEdge[]> = new Map();

  addVertex(v: number): void {
    if (!this.adjacency.has(v)) {
      this.adjacency.set(v, []);
    }
  }

  addEdge(from: number, to: number, directed = false, weight?: number): void {
    this.addVertex(from);
    this.addVertex(to);

    this.adjacency.get(from)!.push({ to, weight });
    if (!directed) {
      this.adjacency.get(to)!.push({ to: from, weight });
    }
  }

  // BFS - Breadth First Search
  bfs(start: number): number[] {
    const visited = new Set<number>();
    const result: number[] = [];
    const queue: number[] = [start];

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      if (visited.has(vertex)) continue;

      visited.add(vertex);
      result.push(vertex);

      for (const { to } of this.adjacency.get(vertex) || []) {
        if (!visited.has(to)) queue.push(to);
      }
    }

    return result;
  }

  // DFS - Depth First Search
  dfs(start: number): number[] {
    const visited = new Set<number>();
    const result: number[] = [];

    const dfsHelper = (vertex: number) => {
      visited.add(vertex);
      result.push(vertex);

      for (const { to } of this.adjacency.get(vertex) || []) {
        if (!visited.has(to)) dfsHelper(to);
      }
    };

    dfsHelper(start);
    return result;
  }

  getNeighbors(vertex: number): number[] {
    return (this.adjacency.get(vertex) || []).map((e) => e.to);
  }
}
