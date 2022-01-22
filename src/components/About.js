const About = () => {
  return (
    <section>
      <h1>about</h1>
      <p>
        typistt is a simple typing test / typing practice website, inspired by
        monkeytype.com
      </p>
      <p>
        words mode uses the 200 most common english words by default or gets
        random words from{" "}
        <a
          href="https://random-word-api.herokuapp.com/home"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          an api
        </a>
        , while quote mode gets a random quote from{" "}
        <a
          href="https://api.quotable.io/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          quotable
        </a>
        .
      </p>
      <h1>abbreviations</h1>
      <ul className="list-disc">
        <li>wpm = words per minute</li>
        <li>cpm = characters per minute</li>
        <li>acc = accuracy</li>
      </ul>
      <h1>hotkeys</h1>
      <ul className="list-disc">
        <li>tab: restart test</li>
        <li>esc: reshuffle words (words mode)</li>
        <li>
          note: typistt does not yet support ctrl+enter to delete a whole world
          (adding later)
        </li>
      </ul>
      <h1>contact me</h1>
      <ul className="list-disc">
        <li>Email: osama.mo.qudah@gmail.com</li>
        <li>Twitter: @pQudah</li>
        <li>Github: BasicPixel</li>
      </ul>
      <p className="my-4 text-center dark:text-slate-400 text-slate-600">
        finely crafted by BasicPixel using react + tailwind.
      </p>
    </section>
  );
};

export default About;
