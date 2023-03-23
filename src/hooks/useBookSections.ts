import {useAppDispatch, useAppSelector} from './storeHooks';
import {fetchAsyncBooks} from '../features/books/booksSlice';
import {useEffect} from 'react';

export const useBookSections = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.books.books);
  const isLoading = useAppSelector(state => state.books.isLoading);
  const genres = Array(...new Set(books.map(book => book.genre)));
  const filteredBook = useAppSelector(state => state.books.filteredBooks);

  useEffect(() => {
    dispatch(fetchAsyncBooks());
  }, [dispatch]);

  return {
    books,
    genres,
    dispatch,
    isLoading,
    filteredBook,
  };
};
