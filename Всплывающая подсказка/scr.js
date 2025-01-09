 // Функция для показа подсказки
 function showTooltip(event) {
    const tooltipText = event.target.getAttribute('title');
    const position = event.target.getAttribute('data-position') || 'top';
    
    // Создаем и показываем подсказку
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip);

    // Определяем позицию подсказки в зависимости от значения data-position
    const rect = event.target.getBoundingClientRect();

    let top, left;
    switch (position) {
        case 'top':
            top = rect.top - tooltip.offsetHeight - 5;
            left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;
            break;
        case 'bottom':
            top = rect.bottom + 5;
            left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;
            break;
        case 'left':
            top = rect.top + rect.height / 2 - tooltip.offsetHeight / 2;
            left = rect.left - tooltip.offsetWidth - 5;
            break;
        case 'right':
            top = rect.top + rect.height / 2 - tooltip.offsetHeight / 2;
            left = rect.right + 5;
            break;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.classList.add('tooltip_active');
}

// Добавляем обработчик клика для всех элементов с классом .has-tooltip
const tooltipElements = document.querySelectorAll('.has-tooltip');
tooltipElements.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Убираем все активные подсказки перед показом новой
        document.querySelectorAll('.tooltip_active').forEach(tooltip => {
            tooltip.remove();
        });
        
        showTooltip(event);
    });
});

// Закрытие подсказки при клике вне элемента
document.addEventListener('click', function(event) {
    // Проверяем, был ли клик за пределами элемента с классом .has-tooltip
    if (!event.target.closest('.has-tooltip')) {
        // Удаляем все активные подсказки
        document.querySelectorAll('.tooltip_active').forEach(tooltip => {
            tooltip.remove();
        });
    }
});