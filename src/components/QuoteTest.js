import { useFetch } from "../hooks/useFetch";

const QuoteTest = () => {
  const { data, loading } = useFetch("https://api.quotable.io/random");

  return (
    <>
      {loading && <h1>loading...</h1>}
      {!loading && <p>{data?.content}</p>}
    </>
  );
};

export default QuoteTest;
