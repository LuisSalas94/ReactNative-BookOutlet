import {useAppDispatch, useAppSelector} from './storeHooks';
import {fetchAsyncBooks} from '../features/books/booksSlice';
import {useEffect} from 'react';

export const useBookSections = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.books.books);
  const genres = Array(...new Set(books.map(book => book.genre)));

  useEffect(() => {
    dispatch(fetchAsyncBooks());
  }, [dispatch]);

  return {
    books,
    genres,
    dispatch,
  };
};
