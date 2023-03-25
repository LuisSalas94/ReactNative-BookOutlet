export const useBookTitle = title => {
  const substring = ':';
  const colonIndex = title.indexOf(substring);
  const newTitle =
    title.indexOf(substring) !== -1 ? title.slice(0, colonIndex) : title;
  return {
    newTitle,
  };
};
