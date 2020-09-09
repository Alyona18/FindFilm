# Movie-generator
# ***Техническое задание***

# 2. Введение
  2.1. Наименование программы: 
       
       ПоискКино

  2.2. Назначение и область применения: 
       
       Развлечения, досуг

# 4. Назначение и цели создания системы

  4.1. Назначение разработки: 
      
      web-приложение, которое, исходя из имеющихся данных, предоставляет пользователю
      рекомендацию в виде фильма и информации о нем. Если пользователь не зарегистрирован, то фильм подбирается случайно. 

  4.2. Цели создания: 
  
      Упростить поиск подходящего фильма для просмотра. Оказать помощь в организации досуга.

# 6. Условия эксплуатации

  6.1. Требования к квалификации и численности персонала:
  
    Ресурс планируется открытым, поэтому ограничений в количестве пользователей не присутствует. Каждый зарегистрированный 
    пользователь будет иметь доступ к личному кабинету по логину и паролю: в профиле отображаются данные пользователя и его 
    избранные фильмы, на которых будут основываться рекомендации. Незарегистрированные пользователи смогут использовать сайт 
    как поисковик, но не будут иметь возможность сохранения избранных. 
    Администрирование сайта происходит непосредственно разработчиком, на кого также будут направляться пользователи при необходимости техподдержки.

# 7. Требования к защите информации и программ

7.1. Требования к защите информации от несанкционированного доступа: 

    Пользователи ограничены в доступе к информации о других пользователях, а также в возможности изменения или 
    внесения новых данных о фильмах. Пользователь не имеет прав на изменение каких-либо данных, не касающихся его 
    профиля: логин, пароль, контакты и список избранных фильмов.

7.2. Требования к сохранности информации:
    
    При авариях и ошибках, имеющаяся информация должна сохранять целостность, и восстанавливающие работы
    не должны повлечь за собой потерю данных.

# 12. Разработка проекта системы базы данных
12.1. Требования к составу данных:

  **Данные о фильмах:**

        1.	Название

        2.	Год выпуска

        3.	Жанр

        4.	Страна 

        5.	Оценка (например iMDb)

        6.	Некоторое описание 

        7.	Количество пользователей, добавивших фильм в избранные

**Данные о пользователе:**
  
        1.	Логин

        2.	Пароль

        3.	Email

        4.	Избранные фильмы

12.2. Требования к представлению информации:
    
    Данные будут храниться в виде таблицы с полями, к которым будет происходить обращение при необходимости.
    Все данные должны быть на русском языке.

12.3. Требования по применению СУБД:

    •	Поддержка кириллицы, т.к. данные хранятся на русском языке

    •	Поддержка реляционной модели БД

    •	Импорт и экспорт данных

    •	Обеспечение безопасности данных на уровне сервера

# 13. Заполнение базы данных информацией

13.1. Требования к заполнению базы данных:

    Заполнение базы данных на основе имеющейся информации из открытых ресурсов с фильмами. Например: iMDb. 
    Периодическое обновление базы фильмов. База данных пользователей обновляется с регистрацией нового.

13.2. Требования к источникам информации:

    •	Соответствовать составу данных
  
    •	Обновление данных, актуальность
  
    •	Достоверность

