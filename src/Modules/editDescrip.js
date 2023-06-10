const edit = (editinput, index) => {
// console.log(editinput.value)
  const p = document.createElement('p');
  p.className = 'pt';
  const newValue = editinput.value;
  p.textContent = newValue;
  const arr = JSON.parse(localStorage.getItem('taskList'));
  arr[index].description = newValue;
  editinput.replaceWith(p);
  localStorage.setItem('taskList', JSON.stringify(arr));
  window.location.reload();
};

export default edit;