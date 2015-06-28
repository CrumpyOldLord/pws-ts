/// <reference path="./../common.ts"/>

module TSP {
    export module Heuristics {
        export function Nearest(vertices: Vector[], dimensions: Size) {
            function findNearest(vertex: Vector, remainingVertices: Vector[]): Vector {
                let lengths = remainingVertices.map((match: Vector) => vertex.to(match).lengthSquared)
                let minLength = Math.min.apply(null, lengths)
                let index = lengths.indexOf(minLength)
                
                return remainingVertices[index]
            }
            
            if (vertices.length < 3) {
                return new Path(vertices)
            }
            
            let result: Vector[] = []
            var current = vertices[0]
            var remaining = vertices.slice(1)
            
            result.push(current)
            while (remaining.length !== 0) {
                let nearest = findNearest(current, remaining)
                if (nearest === null) {break}
                
                result.push(nearest)
                
                current = nearest
                remaining = remove(remaining, nearest)
            }
            
            return new Path(result)
        }
    }
}
