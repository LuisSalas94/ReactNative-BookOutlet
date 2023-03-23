import {useAppSelector} from './storeHooks';

export const useRenderAuthors = () => {
  const {books} = useAppSelector(state => state.books);
  const authors = Array(...new Set(books.map(book => book.author)));
  const authorImages = Array(...new Set(books.map(book => book.author_image)));

  return {
    authors,
    authorImages,
  };
};
