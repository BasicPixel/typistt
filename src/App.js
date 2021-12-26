import Navbar from "./components/Navbar";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TestPage from "./components/TestPage";

function App() {
  const [font] = useLocalStorage("font", "sans");

  return (
    <BrowserRouter>
      <main
        className={`container h-screen lg:w-2/3 w-full px-4 flex flex-col ${font}`}
      >
        <Navbar />
        <Routes>
          <Route index element={<TestPage />}></Route>
          <Route path="words" element={<TestPage mode={"words"} />}></Route>
          <Route path="quote" element={<TestPage mode={"quote"} />}></Route>
          <Route path="custom" element={<TestPage mode={"custom"} />}></Route>
          <Route path="settings" element={<Settings />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
