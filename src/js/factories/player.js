const Player = () => {
  const validMoves = [];
  const isArrayEqual = (first, second) => first.length === second.length
    && first.every((v, i) => v === second[i]);

  const allreadyPlayed = (first, second) => first.some(
    (firstElem) => isArrayEqual(firstElem, second),
  );
  const placeAttack = (gameboard, x, y) => {
    const res = gameboard.receiveAttack(x, y);
    validMoves.push([x, y]);
    return res;
  };
  const attack = (gameboard, x, y) => {
    if (!allreadyPlayed(validMoves, [x, y])) {
      return placeAttack(gameboard, x, y);
    }
    return false;
  };
  const generateRandomPosition = (size) => Math.floor(Math.random() * size);
  const computerAttack = (gameboard) => {
    let attackCoordinate;
    do {
      attackCoordinate = [generateRandomPosition(gameboard.boardRow),
        generateRandomPosition(gameboard.boardRow)];
    } while (allreadyPlayed(validMoves, attackCoordinate));
    return placeAttack(gameboard, attackCoordinate[0], attackCoordinate[1]);
  };
  return {
    validMoves,
    attack,
    computerAttack,
  };
};
export default Player;
