// Функция для отправки GET-запроса и загрузки данных
        function fetchCurrencyData() {
            const loader = document.getElementById('loader');
            const itemsContainer = document.getElementById('items');
            
            // Показываем анимацию загрузки
            loader.classList.add('loader_active');
            
            // Отправляем GET-запрос
            fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
                .then(response => response.json())
                .then(data => {
                    // Скрываем анимацию загрузки после получения данных
                    loader.classList.remove('loader_active');
                    
                    // Извлекаем валюты из ответа
                    const currencies = data.response.Valute;
                    
                    // Для каждой валюты создаем HTML-разметку
                    Object.values(currencies).forEach(currency => {
                        const item = document.createElement('div');
                        item.classList.add('item');
                        
                        item.innerHTML = `
                            <div class="item__code">${currency.CharCode}</div>
                            <div class="item__value">${currency.Value}</div>
                            <div class="item__currency">руб.</div>
                        `;
                        
                        // Добавляем валюту в контейнер
                        itemsContainer.appendChild(item);
                    });
                })
                .catch(error => {
                    // Если произошла ошибка при загрузке данных
                    loader.classList.remove('loader_active');
                    itemsContainer.innerHTML = `<p>Ошибка загрузки данных</p>`;
                    console.error('Ошибка загрузки данных:', error);
                });
        }

        // Загружаем данные о курсе валют при загрузке страницы
        window.onload = fetchCurrencyData;
 