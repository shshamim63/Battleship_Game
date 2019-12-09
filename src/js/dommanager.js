const board1 = document.querySelector('.player');
const board2 = document.querySelector('.computer');
const reset = document.querySelector('.reset');
const renderBoard = (board, rowSize, boardId) => {
  const currentBoard = boardId === 0 ? board1 : board2;
  [...currentBoard.children].forEach((el) => el.remove());
  for (let i = 0; i < rowSize; i += 1) {
    const boardRowContainer = document.createElement('div');
    boardRowContainer.classList.add('row');
    for (let j = 0; j < rowSize; j += 1) {
      const boardPartContainer = document.createElement('div');
      boardPartContainer.classList.add('col', 'box');
      const boardIndex = (i * rowSize) + j;
      boardPartContainer.dataset.id = boardIndex;
      boardRowContainer.appendChild(boardPartContainer);
    }
    currentBoard.appendChild(boardRowContainer);
  }
};

export { renderBoard };
