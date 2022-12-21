export const Output = ({ output }) => {
  if (output?.message) return <div>{output?.message}</div>;

  else if (!output?.length)
    return <div>Excellent! All your words are English!</div>;

  const nonEnglishWords = output.join(', ')
  return (
    <div>
      Non-English words: {nonEnglishWords}
    </div>
  );
};
