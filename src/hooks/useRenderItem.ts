interface Props {
  item: string;
}

export const useRenderItem = (item: Props) => {
  let iconName = '';
  if (item === 'All') {
    iconName = 'book-outline';
  } else if (item === 'Science') {
    iconName = 'bulb-outline';
  } else if (item === 'History') {
    iconName = 'man-outline';
  } else if (item === 'Social Philosophy') {
    iconName = 'leaf-outline';
  } else if (item === 'Biology') {
    iconName = 'flask-outline';
  } else if (item === 'Cosmology') {
    iconName = 'rocket-outline';
  } else if (item === 'Self Help') {
    iconName = 'happy-outline';
  } else {
    iconName = 'book-outline';
  }

  return {
    iconName,
  };
};
