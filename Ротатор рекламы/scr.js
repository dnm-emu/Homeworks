// Функция для запуска ротатора
function startRotator(rotatorElement) {
    const cases = rotatorElement.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    // Функция смены активного текста
    function changeText() {
        // Получаем текущий активный элемент
        const currentCase = cases[activeIndex];
        // Убираем класс активности у текущего элемента
        currentCase.classList.remove('rotator__case_active');

        // Переходим к следующему элементу
        activeIndex = (activeIndex + 1) % cases.length;
        const nextCase = cases[activeIndex];

        // Добавляем класс активности к следующему элементу
        nextCase.classList.add('rotator__case_active');

        // Изменяем цвет текста в зависимости от data-color
        const color = nextCase.getAttribute('data-color');
        nextCase.style.color = color;
    }

    // Запуск смены текста с интервалом, указанным в data-speed
    setInterval(changeText, 1000);
}

// Инициализация всех ротаторов на странице
document.querySelectorAll('.rotator').forEach(rotator => {
    startRotator(rotator);
});