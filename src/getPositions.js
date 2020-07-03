// Filters a list of coordinates and returns only unique values.

export function getPositions(arrayOfCoordinates) {
  const uniqueCoordinates = arrayOfCoordinates.filter((coord, index, array) => {
    return (
      array.findIndex(
        (coordinate) => coordinate.x === coord.x && coordinate.y === coord.y
      ) === index
    );
  });

  return uniqueCoordinates;
}
