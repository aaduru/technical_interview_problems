# Algorithm

# 1. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes.
# 2. Set the initial node as current. Mark all other nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.
# 3. For the current node, consider all of its neighbors and calculate their tentative distances. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one. For example, if the current node A is marked with a distance of 6, and the edge connecting it with a neighbor B has length 2, then the distance to B (through A) will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, keep the current value.
# 4. When we are done considering all of the neighbors of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again.
# 5. If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished.
# 6. Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 3.


class Edge
  attr_accessor :src, :dst, :length

  def initialize(src, dst, length =1)
    @src = src
    @dst = dst
    @length = length
  end
end

class Graph < Array
  attr_reader :edges

  def initialize
    @edges = []
  end

  def connect(src, dst, length = 1)
    unless self.include?(src)
      raise ArgumentException "this is not a vertex"
    end
    unless self.include?(dst)
      raise ArgumentException "this is not a vertex"
    end

    @edges.push(Edge.new(src,dst,length))
  end

  def connect_mutually(vertex1,vertex2,length = 1)
    self.connect(vertex1,vertex2,length)
    self.connect(vertex2,vertex1,length)
  end

  def neighbors(vertex)
      neighbors = []
      @edges.each do |edge|
        neighbors.push(edge.dst) if edge.src == vertex
      end
      return neighbors.uniq
    end

  def length_between(src, dst)
     @edges.each do |edge|
       return edge.length if edge.src == src && edge.dst == dst
     end
     nil
   end

  def dijkstra(src, dst, length = 1 )

    distances = {}
    previouses = {}

# initialize all the tentative distances to infinity

    self.each do |vertex|
      distances[vertex] = nil
      previouses[vertex] = nil
    end

    distances[src] = 0
    vertices = self.clone

    # For the current node, consider all of its neighbors and calculate their tentative distances

    until vertices.empty?

      nearest_vertex = vertices.inject do |a, b|
        next b unless distances[a]
        next a unless distances[b]
        next a if distances[a] < distances[b]
        b
      end

      break unless distances[nearest_vertex] # infinity

      if dst && nearest_vertex == dst
        return distances[dst]
      end

      neighbors = vertices.neighbors(nearest_vertex)

      neighbors.each do |vertex|
        alt = distances[nearest_vertex] + vertices.length_between(nearest_vertex, vertex)

        if distances[vertex].nil? || alt < distances[vertex]
          distances[vertex] = alt
          previouses[vertices] = nearest_vertex
        end
      end

      vertices.delete(nearest_vertex)
    end
    if dst
      return nil
    else
      return distances
    end
  end


end


graph = Graph.new
(1..6).each {|node| graph.push node }
graph.connect_mutually 1, 2, 7
graph.connect_mutually 1, 3, 9
graph.connect_mutually 1, 6, 14
graph.connect_mutually 2, 3, 10
graph.connect_mutually 2, 4, 15
graph.connect_mutually 3, 4, 11
graph.connect_mutually 3, 6, 2
graph.connect_mutually 4, 5, 6
graph.connect_mutually 5, 6, 9

p graph
p graph.length_between(2, 1)
p graph.neighbors(1)
p graph.dijkstra(1, 5)
