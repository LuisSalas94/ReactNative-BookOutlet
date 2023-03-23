import {useAppDispatch, useAppSelector} from './storeHooks';

export const useBookSections = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.books.books);
  const genres = Array(...new Set(books.map(book => book.genre)));

  return {
    books,
    genres,
    dispatch,
  };
};
