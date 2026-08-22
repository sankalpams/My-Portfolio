import React, { useState, useEffect, useCallback } from 'react';
import { X, RotateCcw, ArrowLeft, Trophy, Gamepad2 } from 'lucide-react';

interface Game2048ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Board = number[][];

export const Game2048Modal: React.FC<Game2048ModalProps> = ({ isOpen, onClose }) => {
  const [board, setBoard] = useState<Board>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem('2048-best-score') || 0);
  });
  const [gameOver, setGameOver] = useState(false);

  const addRandomTile = (currentBoard: Board): Board => {
    const emptyCells: { r: number; c: number }[] = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (currentBoard[r][c] === 0) {
          emptyCells.push({ r, c });
        }
      }
    }
    if (emptyCells.length === 0) return currentBoard;

    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const newBoard = currentBoard.map(row => [...row]);
    newBoard[randomCell.r][randomCell.c] = Math.random() < 0.9 ? 2 : 4;
    return newBoard;
  };

  const startNewGame = useCallback(() => {
    let newBoard: Board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    newBoard = addRandomTile(newBoard);
    newBoard = addRandomTile(newBoard);
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      startNewGame();
    }
  }, [isOpen, startNewGame]);

  const slideAndMergeRow = (row: number[]) => {
    const nonZero = row.filter(val => val !== 0);
    const newRow: number[] = [];
    let gainedScore = 0;

    for (let i = 0; i < nonZero.length; i++) {
      if (i < nonZero.length - 1 && nonZero[i] === nonZero[i + 1]) {
        const mergedVal = nonZero[i] * 2;
        newRow.push(mergedVal);
        gainedScore += mergedVal;
        i++;
      } else {
        newRow.push(nonZero[i]);
      }
    }

    while (newRow.length < 4) {
      newRow.push(0);
    }

    return { newRow, gainedScore };
  };

  const moveLeft = (currentBoard: Board) => {
    let changed = false;
    let totalScore = 0;
    const newBoard: Board = [];

    for (let r = 0; r < 4; r++) {
      const { newRow, gainedScore } = slideAndMergeRow(currentBoard[r]);
      newBoard.push(newRow);
      totalScore += gainedScore;
      if (newRow.some((val, idx) => val !== currentBoard[r][idx])) {
        changed = true;
      }
    }

    return { newBoard, changed, totalScore };
  };

  const rotateBoard = (b: Board): Board => {
    const rotated: Board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        rotated[c][3 - r] = b[r][c];
      }
    }
    return rotated;
  };

  const handleMove = useCallback((direction: 'left' | 'right' | 'up' | 'down') => {
    if (gameOver) return;

    let tempBoard = board.map(row => [...row]);
    let rotations = 0;

    if (direction === 'up') {
      tempBoard = rotateBoard(rotateBoard(rotateBoard(tempBoard)));
      rotations = 1;
    } else if (direction === 'right') {
      tempBoard = rotateBoard(rotateBoard(tempBoard));
      rotations = 2;
    } else if (direction === 'down') {
      tempBoard = rotateBoard(tempBoard);
      rotations = 3;
    }

    const { newBoard, changed, totalScore } = moveLeft(tempBoard);

    if (changed) {
      let finalBoard = newBoard;
      for (let i = 0; i < (4 - rotations) % 4; i++) {
        finalBoard = rotateBoard(finalBoard);
      }

      finalBoard = addRandomTile(finalBoard);
      setBoard(finalBoard);

      setScore(prev => {
        const updated = prev + totalScore;
        if (updated > bestScore) {
          setBestScore(updated);
          localStorage.setItem('2048-best-score', String(updated));
        }
        return updated;
      });
    }
  }, [board, gameOver, bestScore]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        handleMove('up');
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault();
        handleMove('down');
      } else if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault();
        handleMove('left');
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        handleMove('right');
      } else if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, handleMove, onClose]);

  if (!isOpen) return null;

  const getTileColor = (val: number) => {
    switch (val) {
      case 2: return 'bg-slate-800 text-slate-200';
      case 4: return 'bg-slate-700 text-slate-100';
      case 8: return 'bg-rose-900/80 text-rose-200 border border-rose-700/50';
      case 16: return 'bg-rose-800 text-rose-100 border border-rose-600/60';
      case 32: return 'bg-rose-600 text-white font-bold';
      case 64: return 'bg-rose-500 text-white font-bold shadow-lg shadow-rose-500/20';
      case 128: return 'bg-amber-600 text-white font-bold';
      case 256: return 'bg-amber-500 text-white font-bold shadow-lg shadow-amber-500/30';
      case 512: return 'bg-emerald-600 text-white font-bold';
      case 1024: return 'bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/30';
      case 2048: return 'bg-cyan-500 text-slate-950 font-extrabold shadow-xl shadow-cyan-500/40';
      default: return 'bg-slate-900/50 text-transparent';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md rounded-3xl bg-[#0a0a0e] border border-slate-800 shadow-2xl z-10 p-6 flex flex-col items-center animate-fadeIn">
        
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-mono transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-rose-400" />
            <span className="font-display font-bold text-sm text-white">2048 Arcade</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Score Board */}
        <div className="w-full flex items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="font-display font-extrabold text-2xl text-white">2048</h3>
            <p className="text-[11px] font-mono text-slate-400">Join tiles to get to 2048!</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Score</span>
              <span className="font-display font-bold text-sm text-white">{score}</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                <Trophy className="w-2.5 h-2.5 text-amber-400" /> Best
              </span>
              <span className="font-display font-bold text-sm text-amber-300">{bestScore}</span>
            </div>
          </div>
        </div>

        {/* Game Grid Board */}
        <div className="relative p-3 rounded-2xl bg-[#121218] border border-slate-800/80 mb-5 w-full max-w-[320px] aspect-square">
          <div className="grid grid-cols-4 gap-2.5 h-full w-full">
            {board.map((row, rIdx) =>
              row.map((cell, cIdx) => (
                <div
                  key={`${rIdx}-${cIdx}`}
                  className={`rounded-xl flex items-center justify-center font-display font-bold text-lg sm:text-xl transition-all duration-150 select-none ${getTileColor(cell)}`}
                >
                  {cell !== 0 ? cell : ''}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Controls & Reset */}
        <div className="w-full flex items-center justify-between text-xs font-mono">
          <button
            onClick={startNewGame}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>New Game</span>
          </button>

          <span className="text-slate-500 text-[11px]">
            Use Arrow Keys (↑ ↓ ← →) or WASD
          </span>
        </div>

      </div>
    </div>
  );
};
