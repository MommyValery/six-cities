# Личный проект «Six cities»

## О проекте
«Шесть городов» — сервис для путешественников, не желающих переплачивать за аренду жилья. Выбирайте один из шести популярных городов для путешествий и получайте актуальный список предложений по аренде. Подробная информация о жилье, показ объекта на карте, а также лаконичный интерфейс сервиса помогут быстро выбрать оптимальное предложение.

## 1. Описание функциональности
 1.1. Страницы приложения
Приложение состоит из нескольких страниц: Main (/), Login (/login), Favorites (/favorites) (приватная), Room (/offer/:id).

Страница Favorites доступна только авторизованным пользователям.

Если пользователь авторизован, то при переходе на страницу Login выполняется перенаправление на главную страницу.

Если пользователь не авторизован, то при попытке перехода к приватной странице выполняется перенаправление на страницу «Login» (/login).

В шапке каждой страницы отображается ссылка на страницу «Login» (если пользователь не авторизован) или email пользователя и кнопка «Log Out» (если пользователь авторизован).

Клик по кнопке «Log Out» приводит к завершению сеанса работы — выходу из закрытой части приложения.

Клик по email пользователя в шапке выполняет переход на страницу «Favorites» (/favorites).

Обращение к несуществующей странице (например, через адресную строку) не приводит к появлению ошибок в приложении, а корректно обрабатывается маршрутизацией. Пользователь перенаправляется на страницу «404». 

## 2. Главная страница
На главной странице отображается список городов, для которых возможно запросить предложения по аренде: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf.

Сервер всегда возвращает информацию только для этих шести городов.

После загрузки приложения всегда активен сразу первый город из списка на главной странице — Paris. По этому городу загружены предложения по аренде.

На карте предложения отображаются в виде синих маркеров.

При смене города выполняется обновление списка предложений и карта.

В заголовке списка предложений отображается количество доступных предложений. Пример корректного заголовка: 312 places to stay in Amsterdam.

Кнопка «Избранное» каждого предложения. Клик по кнопке «Избранное» добавляет карточку в избранное. Повторный клик по кнопке «Избранное» выполняет обратное действие — удаляет из избранного. Если пользователь не авторизован, то выполняется перенаправление на страницу Login. Иконка на кнопке меняется в зависимости от действия: добавить в избранное (прозрачная), удалить из избранного (синяя).

## 3. Список предложений
Пользователь может менять сортировку списка предложений. Варианты сортировки:

Popular. Вариант по умолчанию. Предложения отображаются в порядке, полученном с сервера.
Price: low to high. От дешёвых к дорогим.
Price: high to low. От дорогих к дешёвым.
Top rated first. От высокого рейтинга к низкому.
При смене варианта сортировки список предложений перерисовывается.

Каждая карточка в списке предложений содержит информацию:

Изображение. Фотография жилья.
Премиальность. Метка «Premium».
Стоимость за ночь. Стоимость всегда отображается в евро.
Заголовок. Краткое описание предложения. 
Тип жилья. Одно из нескольких значений: apartment, room, house, hotel.
Кнопка «Избранное». Клик по кнопке «Избранное» добавляет карточку в избранное. Если пользователь не авторизован, то выполняется перенаправление на страницу Login.
Рейтинг. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5. Оценка округляется до ближайшего целого. 
Клик по заголовку карточки выполняет переход на страницу с подробной информацией о предложении.

## 4. Карта
Все предложения выбранного города отображаются на карте в виде синих маркеров.

При наведении курсора на карточку предложения, маркер, соответствующий объявлению, становится оранжевым. Пункт справедлив только для главной страницы, на странице предложения цвет маркера изменяться не должен.

# 5. Страница предложения
На странице предложения (/offer) представлена расширенная информация об объекте для аренды:

Фотографии. Выводится до 6-ти изображений.
Заголовок. Краткое описание предложения.
Подробное описание.
Премиальность.
Тип жилья. Одно из предопределённых значений: apartment (Apartment), room (Private Room), house (House), hotel (Hotel).
Рейтинг. Оценка предложения отображается в виде закрашенных звезд и среднего балла (например, 4.8). Максимальное количество звёзд — 5.
Количество спален. 
Максимальное количество гостей. 
Стоимость аренды за ночь. Сумма всегда отображается в евро.
Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
Информация о хозяине: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись Pro под именем хозяина.
Кнопка «Избранное». Клик по кнопке «Избранное» добавляет карточку в избранное. Если пользователь не авторизован, то выполняется перенаправление на страницу Login.

Отзывы пользователей. В заголовке блока отображается общее количество отзывов. 

Для авторизованных пользователей отображается форма отправки нового отзыва.

Под списком отзывов отображается карта с предложениями неподалёку. На карте отмечено 3 предложения неподалёку и маркер текущего предложения (итого 4 маркера). Маркеры предложений выделены синим. Маркер текущего предложения выделен оранжевым.

Карточки представленных предложений отображаются сразу под картой и содержат тот же набор информации, что и на главной странице.

## 6. Отзывы
Каждый отзыв содержит:

Аватар автора.
Имя автора.
Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
Дата отзыва в формате: Месяц Год.
Текст отзыва.
В заголовке блока отображается общее количество отзывов.

## 7. Форма отправки отзыва
Форма отправки отзыва отображается только для авторизованных пользователей.

Пользователь должен выставить рейтинг. Рейтинг выставляется от 1 до 5.

Текст отзыва должен содержать от 50 до 300 символов.

Пока пользователь не выбрал оценку и не ввёл текст допустимой длины, кнопка отправки отзыва не активна.

При нажатии кнопки «Submit» и отправке данных кнопка «Submit» и вся форма должны блокироваться. Разблокировка формы и кнопки происходит в случае успешной отправки или при возникновении ошибки.

В случае успешной отправки отзыва форма очищается.

В случае возникновения ошибки следует уведомить пользователя. 

## 8. Страница Login
Для входа в сервис пользователь вводит логин (email) и пароль. Поскольку у сервиса отсутствует возможность регистрации, логин и пароль могут быть любыми, но не пустыми.

Страница доступна только неавторизованным пользователям. Авторизованных пользователей перенаправляет на главную страницу.

## 9. Favorites
Страница «Favorites» доступна только авторизованным пользователям. Если пользователь не авторизован, то выполняется перенаправление на страницу «Login».

Переход на страницу «Favorites» осуществляется при клике на email авторизованного пользователя.

Если пользователь не добавил ни одного предложения в избранное, то на странице отображается «Nothing yet saved» .

На странице «Favorites» пользователь может удалить предложение из избранного. 
После удаления предложения из избранного, список предложений актуализируется (удалённое предложение пропадает).

В шапке, рядом с email авторизованного пользователя, отображается количество предложений, добавленных в избранное. Добавление предложения в избранное, или удаление предложения из избранного, приводит к немедленному пересчёту количества предложений.

# 10. Взаимодействие с сервером
Все необходимые данные загружаются с сервера.
Сервер доступен по адресу: _https://10.react.htmlacademy.pro/six-cities_.
Спецификация по взаимодействию с сервером в формате OpenAPI — _https://10.react.htmlacademy.pro/six-cities/spec_.
В случае недоступности сервера отображается информационное сообщение. Дизайн сообщения остаётся на усмотрение разработчика.
Авторизация на сервере происходит на основании токена. Токен передаётся с каждым запросом в заголовке X-Token.
