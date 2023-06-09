export default function trash() {
  const trash = document.querySelectorAll('.remove') || [];
  trash.forEach((icon) => {
    icon.addEventListener('click', () => {
      // removeData(button.getAttribute('book-id'));
      icon.parentElement.parentNode.remove();
      // emptyMessage();
    });
  });
}