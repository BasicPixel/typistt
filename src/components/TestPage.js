import getWords from "../words";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useFetch } from "../hooks/useFetch";
import Test from "./Test";

const TestPage = ({ mode }) => {
  // get localStorage settings
  const [wordsCount] = useLocalStorage("wordsCount", 100);
  const [wordsMode] = useLocalStorage("wordsMode", "common");
  const [customText, setCustomText] = useLocalStorage("customText", "");

  if (customText === "") {
    setCustomText("No custom text. add some in the settings.");
  }

  const [commonWords, setCommonWords] = useState(getWords(wordsCount));
  const [randomWordsData, randomWordsLoading] = useFetch(
    `https://random-word-api.herokuapp.com/word?number=${wordsCount}`
  );
  const [quoteData, quoteLoading] = useFetch("https://api.quotable.io/random");

  return (
    <div className="flex items-center justify-center flex-auto py-4">
      <div className="flex items-center justify-center flex-auto py-4">
        {/* If content is loading */}
        {quoteLoading || randomWordsLoading ? (
          <p className="text-xl select-none dark:text-slate-400 text-slate-600">
            loading...
          </p>
        ) : // If nothing is loading, check current mode
        mode === "words" ? (
          // If mode is words, check word mode (random / common)
          wordsMode === "common" ? (
            <Test
              text={commonWords}
              setCommonWords={setCommonWords}
              count={wordsCount}
              mode={mode}
            />
          ) : (
            !randomWordsLoading && (
              <Test text={randomWordsData?.join(" ")} mode={mode} />
            )
          )
        ) : mode === "quote" && !quoteLoading ? (
          <Test text={quoteData?.content} mode={mode} />
        ) : mode === "custom" ? (
          <Test text={customText} mode={mode} />
        ) : (
          <p className="text-xl select-none dark:text-slate-400 text-slate-600">
            Choose a mode from the navigation bar to start.
          </p>
        )}
      </div>
    </div>
  );
};

export default TestPage;
