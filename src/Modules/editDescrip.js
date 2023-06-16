const edit = (newValue, index) => {
  const arr = JSON.parse(localStorage.getItem('taskList'));
  arr[index].description = newValue;
  localStorage.setItem('taskList', JSON.stringify(arr));
  return arr[index].description;
};

export default edit;