import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Trophy, 
  Gamepad2, 
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useRouter } from '../router/RouterContext';

type Board = number[][];

export const ArcadePage: React.FC = () => {
  const { navigate } = useRouter();
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
  const [won2048, setWon2048] = useState(false);

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
    setWon2048(false);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

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

      // Check 2048 win
      if (!won2048 && finalBoard.some(row => row.some(cell => cell >= 2048))) {
        setWon2048(true);
        try {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } catch (e) {}
      }

      setScore(prev => {
        const updated = prev + totalScore;
        if (updated > bestScore) {
          setBestScore(updated);
          localStorage.setItem('2048-best-score', String(updated));
        }
        return updated;
      });
    }
  }, [board, gameOver, bestScore, won2048]);

  useEffect(() => {
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
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleMove]);

  const getTileColor = (val: number) => {
    switch (val) {
      case 2: return 'bg-zinc-800 text-zinc-200';
      case 4: return 'bg-zinc-700 text-zinc-100';
      case 8: return 'bg-rose-950/80 text-rose-200 border border-rose-800/60';
      case 16: return 'bg-rose-900 text-rose-100 border border-rose-700/80';
      case 32: return 'bg-rose-700 text-white font-bold';
      case 64: return 'bg-rose-500 text-white font-bold shadow-lg shadow-rose-500/20';
      case 128: return 'bg-amber-600 text-white font-bold';
      case 256: return 'bg-amber-500 text-white font-bold shadow-lg shadow-amber-500/30';
      case 512: return 'bg-emerald-600 text-white font-bold';
      case 1024: return 'bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/30';
      case 2048: return 'bg-cyan-500 text-slate-950 font-extrabold shadow-xl shadow-cyan-500/40';
      default: return 'bg-zinc-900/60 text-transparent';
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-xl mx-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-800">
          <button
            onClick={() => navigate('#/')}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-rose-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
            <Gamepad2 className="w-4 h-4" />
            <span>Arcade Mode</span>
          </div>
        </div>

        {/* Game Arena Card */}
        <div className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-8 shadow-2xl flex flex-col items-center">
          
          {/* Score Strip */}
          <div className="w-full flex items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
                2048 ARCADE
              </h1>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
                Join tiles to unlock the 2048 quantum tile!
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="px-3.5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Score</span>
                <span className="font-display font-extrabold text-base text-white">{score}</span>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-amber-400 uppercase flex items-center justify-center gap-1">
                  <Trophy className="w-2.5 h-2.5" /> Best
                </span>
                <span className="font-display font-extrabold text-base text-amber-300">{bestScore}</span>
              </div>
            </div>
          </div>

          {won2048 && (
            <div className="w-full p-3 mb-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2">
              <Award className="w-4 h-4" />
              <span>Congratulations! You reached the 2048 milestone!</span>
            </div>
          )}

          {/* 4x4 Grid Board */}
          <div className="relative p-3.5 rounded-3xl bg-[#111117] border border-zinc-800 mb-6 w-full max-w-[360px] aspect-square shadow-inner">
            <div className="grid grid-cols-4 gap-3 h-full w-full">
              {board.map((row, rIdx) =>
                row.map((cell, cIdx) => (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`rounded-2xl flex items-center justify-center font-display font-black text-xl sm:text-2xl transition-all duration-150 select-none ${getTileColor(cell)}`}
                  >
                    {cell !== 0 ? cell : ''}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Mobile Direction Controls */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-[200px] mb-6 sm:hidden">
            <div />
            <button
              onClick={() => handleMove('up')}
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono font-bold"
            >
              ↑
            </button>
            <div />
            <button
              onClick={() => handleMove('left')}
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono font-bold"
            >
              ←
            </button>
            <button
              onClick={() => handleMove('down')}
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono font-bold"
            >
              ↓
            </button>
            <button
              onClick={() => handleMove('right')}
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono font-bold"
            >
              →
            </button>
          </div>

          {/* Controls Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800 text-xs font-mono">
            <button
              onClick={startNewGame}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold transition-all shadow-md shadow-rose-500/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Game</span>
            </button>

            <span className="text-zinc-500 text-[11px] hidden sm:inline">
              Controls: Arrow Keys (↑ ↓ ← →) or WASD
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
