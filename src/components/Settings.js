import { useLocalStorage } from "../hooks/useLocalStorage";

const Settings = () => {
  const [font, setFont] = useLocalStorage("font", "mono");
  const [customText, setCustomText] = useLocalStorage("customText", "");
  const [wordsMode, setWordsMode] = useLocalStorage("wordsMode", "common");
  const [wordsCount, setWordsCount] = useLocalStorage("wordsCount", 100);

  if (customText === "No custom text. add some in the settings.") {
    setCustomText("");
  }

  return (
    <>
      <h1 className="text-2xl text-slate-500 py-2">Settings</h1>

      <label htmlFor="font">font family (refresh to see effect)</label>
      <select
        id="font"
        className="bg-slate-700 rounded p-2 w-full mb-2 mt-1"
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
        className="w-full bg-slate-700 rounded mb-2 mt-1 focus:outline-none p-2 h-48"
        value={customText}
        onChange={(e) => {
          setCustomText(e.target.value);
        }}
        spellCheck={false}
      ></textarea>

      <label htmlFor="words-mode">words mode: choose words</label>
      <select
        id="words-mode"
        className="bg-slate-700 rounded p-2 w-full mb-2 mt-1"
        value={wordsMode}
        onChange={(e) => setWordsMode(e.target.value)}
      >
        <option value="common">commonly used words</option>
        <option value="random">randomly</option>
      </select>

      <label htmlFor="words-count">words mode: word count ({wordsCount})</label>
      <input
        type="range"
        id="words-count"
        className="accent-slate-500 mb-2 mt-1"
        value={wordsCount}
        onChange={(e) => {
          setWordsCount(e.target.value);
        }}
        min={5}
        max={200}
      />
    </>
  );
};

export default Settings;
