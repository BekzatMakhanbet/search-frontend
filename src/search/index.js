import { useState } from "react";
import { searchForText } from "../api/search";
import { Output } from "./Output";
import { SearchForm } from "./SearchForm";

const Search = () => {
  const [output, setOutput] = useState();

  const onSearch = async (text) => {
    await searchForText(text)
      .then((res) => res.json())
      .then(setOutput);
  };

  return (
    <>
      <SearchForm onSearch={onSearch} />
      {output && <Output output={output} />}
    </>
  );
};

export default Search;
