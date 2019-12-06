const Player = () => {
  const validMoves = [];
  const isArrayEqual = (first, second) => first.length === second.length
    && first.every((v, i) => v === second[i]);

  const allreadyPlayed = (first, second) => first.some(
    (firstElem) => isArrayEqual(firstElem, second),
  );
  const attack = (gameboard, x, y) => {
    if (!allreadyPlayed(validMoves, [x, y])) {
      const res = gameboard.receiveAttack(x, y);
      validMoves.push([x, y]);
      return res;
    }
    return false;
  };
  return {
    validMoves,
    attack,
    allreadyPlayed,
  };
};
module.exports = Player;
