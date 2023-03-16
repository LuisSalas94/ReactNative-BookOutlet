import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch} from '../hooks/storeHooks';
import {fetchAsyncBooks} from '../features/books/booksSlice';

const BookApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncBooks());
  }, []);

  return (
    <View>
      <Text>BookApp</Text>
    </View>
  );
};

export default BookApp;
