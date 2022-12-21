import { useState } from "react";

export const SearchForm = ({ onSearch }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Enter your text</label>
      <div>
        <textarea
          style={{ width: "100%" }}
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!text.length}>
        Check
      </button>
    </form>
  );
};
