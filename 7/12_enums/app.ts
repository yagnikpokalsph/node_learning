// Enums will save a key value pair as a constant
// It is the special class

// Default enums
enum currentDirection{
    North,
    South,
    East,
    West
}
let mydir = currentDirection.South
console.log(mydir)

// initialized with value enums
enum currentDirections {
    North=3,
    South,
    East,
    West
}
let mydir2 = currentDirections.North
console.log(mydir2)
