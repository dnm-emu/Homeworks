  // Получаем элементы
  const editor = document.getElementById('editor');
  const clearButton = document.getElementById('clearButton');

  // Восстанавливаем текст из localStorage, если он есть
  window.addEventListener('load', () => {
      const savedText = localStorage.getItem('editorContent');
      if (savedText) {
          editor.value = savedText;
      }
  });

  // Сохраняем текст в localStorage при изменении
  editor.addEventListener('input', () => {
      localStorage.setItem('editorContent', editor.value);
  });

  // Очистка содержимого редактора и localStorage
  clearButton.addEventListener('click', () => {
      editor.value = ''; // очищаем текстовое поле
      localStorage.removeItem('editorContent'); // удаляем сохранённый текст из localStorage
  });