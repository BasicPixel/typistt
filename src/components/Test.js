import { useEffect, useState, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import getWords from "../words";

const Test = ({ text, setCommonWords, count, mode, quoteLoading }) => {
  const [highScore, setHighScore] = useLocalStorage("highScore", 0);

  const testDiv = useRef(null);

  const [cursorPos, setCursorPos] = useState(0);

  // Object to store typed letters (letter index in original text as key, correctness as value (true or false))
  const [typedLetters, setTypedLetters] = useState({});

  const [stats, setStats] = useState({
    time: "00:00",
    wpm: 0,
    cpm: 0,
    accuracy: 0,
    isHighScore: false,
  });
  const [showStats, setShowStats] = useState(false);

  let [startTime, setStartTime] = useState(0);

  useEffect(() => {
    testDiv.current.focus();
  }, []);

  useEffect(() => {
    setCursorPos(0);
    setTypedLetters({});
    testDiv.current.focus();
  }, [mode, text]);

  const millisecondsToSeconds = (ms) => {
    let seconds = ms / 1000;
    seconds = parseInt(seconds % 60);

    return seconds;
  };

  const calculateStats = () => {
    const numberOfWords = text && text.split(" ").length;
    const numberOfChars = text && text.length - 1;
    if (Object.keys(typedLetters).length === numberOfChars) {
    }
    const correctCount = Object.keys(typedLetters).filter(
      (c) => typedLetters[c]
    ).length;

    const seconds = millisecondsToSeconds(performance.now() - startTime);

    const accuracy = Math.round((100 * correctCount) / numberOfChars);

    const wpm = Math.round((numberOfWords / seconds) * 60);

    setStats({
      time: `${seconds}s`,
      wpm: wpm,
      cpm: Math.round((numberOfChars / seconds) * 60),
      accuracy: `${accuracy}%`,
      isHighScore: wpm > highScore,
    });

    setShowStats(true);
    setHighScore(wpm > highScore ? wpm : highScore);
  };

  const restart = ({ reshuffle = false } = {}) => {
    if (reshuffle && setCommonWords && count) {
      setCommonWords(getWords(count));
    }
    setCursorPos(0);
    setTypedLetters({});
    setStartTime(0);
    testDiv.current.focus();
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        restart({ reshuffle: true });
        break;
      case "Tab":
        e.preventDefault();
        restart();
        break;
      case "Backspace":
        if (cursorPos > 0) {
          let newTypedLetters = { ...typedLetters };
          delete newTypedLetters[cursorPos - 1];
          setTypedLetters(newTypedLetters);
          setCursorPos(cursorPos - 1);
        }
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (e) => {
    if (cursorPos === 0) {
      setStartTime(performance.now());
      setStats({ time: "00:00", wpm: 0, cpm: 0, accuracy: 0 });
      setShowStats(false);
    }

    // Add the typed letter to the typedLetters dictionary, with true / false value representing correctness
    setTypedLetters({
      ...typedLetters,
      [cursorPos]: e.charCode === text.charCodeAt(cursorPos),
    });

    if (cursorPos === text.length - 1) {
      calculateStats();
      restart();
    } else {
      setCursorPos(cursorPos + 1);
    }
  };

  if (mode === "quote" && quoteLoading === true) {
    return (
      <>
        <p className="text-xl select-none dark:text-slate-400 text-slate-600">
          loading...
        </p>
      </>
    );
  } else {
    return (
      <div>
        {showStats && (
          <div
            id="stats"
            className="text-slate-500 flex justify-between mb-4 select-none min-w-[20em]"
          >
            <div>
              wpm: {stats.isHighScore && <span>👑</span>}
              <span className="dark:text-slate-300 text-slate-700">
                {stats.wpm}
              </span>
            </div>
            <div>
              cpm:{" "}
              <span className="dark:text-slate-300 text-slate-700">
                {stats.cpm}
              </span>
            </div>
            <div>
              acc:{" "}
              <span className="dark:text-slate-300 text-slate-700">
                {stats.accuracy}
              </span>
            </div>
            <div>
              time:{" "}
              <span className="dark:text-slate-300 text-slate-700">
                {stats.time}
              </span>
            </div>
          </div>
        )}
        <div
          tabIndex={-1}
          className="text-xl select-none focus:outline-none dark:text-slate-200 text-slate-800"
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          ref={testDiv}
        >
          {Object.keys(typedLetters).map((letterPosition) => {
            if (typedLetters[letterPosition] === false) {
              return (
                <span
                  className="text-red-500 underline decoration-red-500"
                  key={letterPosition}
                >
                  {text[letterPosition]}
                </span>
              );
            } else {
              return <span key={letterPosition}>{text[letterPosition]}</span>;
            }
          })}
          <span className="py-1 rounded dark:bg-slate-200 dark:text-slate-800 bg-slate-600 text-slate-200">
            {text && text[cursorPos]}
          </span>
          <span className="dark:text-slate-500 text-slate-400">
            {text && text.slice(cursorPos + 1)}
          </span>
        </div>
      </div>
    );
  }
};

export default Test;
