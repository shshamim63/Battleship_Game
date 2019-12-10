const Ship = (len) => {
  const shipPosition = new Array(len).fill('O');
  const shipLength = len;
  const hit = (position) => {
    shipPosition[position] = 'X';
  };
  const isSunk = () => shipPosition.every((element) => element === 'X');
  return {
    shipPosition,
    shipLength,
    hit,
    isSunk,
  };
};
export default Ship;
