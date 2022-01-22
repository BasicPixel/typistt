import { useLocalStorage } from "../hooks/useLocalStorage";

const Settings = () => {
  const CUSTOM_TEXT_MIN_LENGTH = 20;

  const [font, setFont] = useLocalStorage("font", "mono");
  const [customText, setCustomText] = useLocalStorage("customText", "");
  const [customTextLength, setCustomTextLength] = useLocalStorage(
    "customTextLength",
    customText.length
  );
  const [wordsMode, setWordsMode] = useLocalStorage("wordsMode", "common");
  const [wordsCount, setWordsCount] = useLocalStorage("wordsCount", 100);
  const [quoteCategory, setQuoteCategory] = useLocalStorage(
    "quoteCategory",
    "famous-quotes"
  );
  const [highScore] = useLocalStorage("highScore", 0);

  if (customText === "No custom text. add some in the settings.") {
    setCustomText("");
  }

  return (
    <section className="py-4">
      <h1>Settings</h1>
      <label htmlFor="font">font family (refresh to see effect)</label>
      <select
        id="font"
        className="w-full p-2 mt-1 mb-2 rounded dark:bg-slate-700 bg-slate-300"
        value={font}
        onChange={(e) => setFont(e.target.value)}
      >
        <option value="mono">monospace</option>
        <option value="sans">sans-serif</option>
        <option value="serif">serif</option>
      </select>
      <label htmlFor="custom-text">custom mode text</label>
      <textarea
        id="custom-text"
        className="w-full h-48 p-2 mt-1 mb-2 rounded dark:bg-slate-700 bg-slate-300 focus:outline-none"
        value={customText}
        onChange={(e) => {
          setCustomText(e.target.value);
          setCustomTextLength(customText.length);
        }}
        spellCheck={false}
      ></textarea>
      {customTextLength < CUSTOM_TEXT_MIN_LENGTH && (
        <div className="text-red-500">
          Custom text must be at least {CUSTOM_TEXT_MIN_LENGTH} characters long.
        </div>
      )}
      <label htmlFor="words-mode">words mode: choose words</label>
      <select
        id="words-mode"
        className="w-full p-2 mt-1 mb-2 rounded dark:bg-slate-700 bg-slate-300"
        value={wordsMode}
        onChange={(e) => setWordsMode(e.target.value)}
      >
        <option value="common">commonly used words</option>
        <option value="random">randomly</option>
      </select>
      <label htmlFor="quote-category">quotes mode: quote category</label>
      <select
        id="quote-category"
        className="w-full p-2 mt-1 mb-2 rounded dark:bg-slate-700 bg-slate-300"
        value={quoteCategory}
        onChange={(e) => setQuoteCategory(e.target.value)}
      >
        <option value="famous-quotes">famous-quotes</option>
        <option value="inspirational">inspirational</option>
        <option value="nature">nature</option>
        <option value="technology">technology</option>
      </select>
      <label htmlFor="words-count">words mode: word count ({wordsCount})</label>
      <input
        type="range"
        id="words-count"
        className="block w-full mt-1 mb-2 accent-slate-500"
        value={wordsCount}
        onChange={(e) => {
          setWordsCount(e.target.value);
        }}
        min={5}
        max={200}
      />

      <h1>Stats</h1>
      <ul className="list-disc">
        <li>👑 High score: {highScore}</li>
      </ul>
    </section>
  );
};

export default Settings;
