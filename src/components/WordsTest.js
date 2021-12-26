import getWords from "../words";
import { useEffect, useRef, useState } from "react";

const WordsTest = () => {
  const [text, setText] = useState(getWords());
  const [cursorPos, setCursorPos] = useState(0);
  const testDiv = useRef(null);

  // Object to store typed letters (letter index in original text as key, correctness as value (true or false))
  let [typedLetters, setTypedLetters] = useState({});

  useEffect(() => {
    testDiv.current.focus();
  }, []);

  const restart = ({ reshuffle = false } = {}) => {
    if (reshuffle) {
      setText(getWords());
    }
    setCursorPos(0);
    setTypedLetters({});
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
    if (e.charCode === text.charCodeAt(cursorPos)) {
      setTypedLetters({ ...typedLetters, [cursorPos]: true });
    } else {
      setTypedLetters({ ...typedLetters, [cursorPos]: false });
    }
    setCursorPos(cursorPos + 1);
  };

  return (
    <>
      <div
        tabIndex={-1}
        className="text-xl focus:outline-none select-none dark:text-slate-200 text-slate-800"
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
        ref={testDiv}
      >
        {Object.keys(typedLetters).map((letterPosition) => {
          if (typedLetters[letterPosition] === false) {
            return (
              <span className="text-red-500" key={letterPosition}>
                {text[letterPosition]}
              </span>
            );
          } else {
            return <span key={letterPosition}>{text[letterPosition]}</span>;
          }
        })}
        <span className="dark:bg-slate-200 dark:text-slate-800 bg-slate-800 text-slate-200 rounded py-1">
          {text[cursorPos]}
        </span>
        <span className="dark:text-slate-500 text-slate-400">
          {text.slice(cursorPos + 1)}
        </span>
      </div>
    </>
  );
};

export default WordsTest;
