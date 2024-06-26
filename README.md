# jsgraduatepaper
JS Graduate Paperwork. JS by MDA. 2024Q2


### Задачи
* ЗАДАЧА №00: SPIN-OFF: запись на выпускной (hard-party spin-off)
* Задача 01: разобраться с тем, как что-то записать в firebase (+).
* Задача 02: разобраться с тем, как что-то прочитать из firebase (+).
* Задача 03: записать пункты 1 и 2 в раздел **Ценные указания**.(+)
* Задача 04: заполнить firebase тестовыми данными.(+)
* Задача 05: подготовить html-код для чтения из firebase.(+)
* Задача 06: подготовить JS-код для чтения из firebase.(+)
* Задача 07: хорошенько все протестировать.(+)
* Задача 08: все стилизовать в CSS по БЭМу и по красоте.(пока пропускаю этот пункт...)
* Задача 09: запомнить разработанную структуру данных, использованную в firebase.(+)
* Задача 10: снести firebase.(пока что тоже пропускаю этот пункт...)
* Задача 11: подготовить html-код для записи в firebase.(+)
* Задача 12: подготовить JS-код для записи в firebase.(+)
* Задача 13: заполнить firebase тестовыми данными, уже используя написанную для этого web-страницу.(+)
* Задача 14: хорошенько все протестировать: можно ли все эти данные получить обратно из firebase?
* Задача 15: все стилизовать в CSS по БЭМу и по красоте.
* Задача 16: выявить хотя бы три самых слабых места в моей выпускной работе.
* Задача 17: попытаться (за оставшиеся считанные часы) хоть что-то исправить в лучшую сторону.
* Задача 18: снова хорошенько все протестировать: записываются ли номера? читаются ли они из firebase?
* Задача 19: найти ещё хотя бы один "косяк".
* Задача 20: попытаться его исправить.
* Задача 21: снова хорошенько все протестировать: записываются ли номера? читаются ли они из firebase?
* Задача 22: ФИНАЛОЧКА: записать видос. (бета)
* Задача 23: ФИНАЛОЧКА: отправить видос и проект на проверку. (бета)
* Задача 24: если замечания есть, то перейти к циклу из пунктов: 16-18, 22+23. Ждать ответа преподавателя.
* Задача 25: если КРИТИЧЕСКИЕ замечания всё-таки отсутствуют, то начинать писать речь для выступления.
* Задача 26: дать своему "детищу" хоть какое-то человекочитаемое название. Например: "Прототип web-приложения для записи на IT-курсы для ООО 'МАРР'"


### Замечания
* Замечание 1
* Замечание 2

### Ценные указания
* Указание 1: чтение из firebase:

```
const getCards = () => {
    fetch('https://test4-d0426-default-rtdb.firebaseio.com/db.json')
    .then(response => {
        return response.json()
    })
    .then(cards => {
        if (localStorage.getItem('user')){
            const user = JSON.parse(localStorage.getItem('user'))
            const newArr = cards.map(card => {
                card.price = card.price-(card.price*user[0].discont/100)
                return card
            })
            localStorage.setItem('cards', JSON.stringify(newArr))
        } else {
            localStorage.setItem('cards', JSON.stringify(cards))
        }                   
    })
}
getCards()
```

* Указание 2: запись в firebase:

```
const sendBtn = document.querySelector('.send__btn');
const sendForm = document.querySelector('.send__form');
let i = 0;

sendBtn.addEventListener('click', () => {
  console.log(i++);
  const order = {};
  for (const el of sendForm.elements) {
    order[el.name] = el.value;
    
  }
  const shopCart = JSON.parse(localStorage.getItem('shopCart'));
  order.shopCart = shopCart;
  
  const time = new Date();
  
  order.time = time.toLocaleString();
  console.log(order);
  const firebase = new Firebase(`https://test4-d0426-default-rtdb.firebaseio.com/orders/order${i}`);
  firebase.update(order);
  console.log(firebase);
  
})
```

* Указание 3: подключение JS-библиотеки для работы с firebase:

```
<script src="https://cdn.firebase.com/js/client/1.1.1/firebase.js"></script>
```

### Решение

* Задача 1: разобраться с тем, как что-то записать в firebase.

1. Шаг: создать новый проект на firebase.google.com

2. Шаг: в этом новом проекте создать (и преднастроить) новую realtime database.

3. Шаг: установить правила (см. вкладку **Rules**) для чткния и записи на **true**.

4. Шаг: изначально в базу можно записать какие-то тестовые данные (см. раздел **Ценные указания**).

5. Шаг: затем же можно записать туда и данные, оставляемые пользователем на форме для последующей их отправки (также см. раздел **Ценные указания**).

* Задача 2: разобраться с тем, как что-то прочитать из firebase.

1. Шаг: пока определимся с тем, что читать будем в консоль (для простоты "вспоминания").

2. Шаг: ранее (при работе в классе) мы уже пробовали прочитать что-то из firebase.

3. Шаг: суть процесса сводилась к тому, чтобы в JS-коде создать констукцию **fetch**, которая и будет выполнять все необходимые нам обработки (с помощью **.then()**).

4. Шаг: далее: см. раздел **Ценные указания**, там это всё будет повторено ещё один раз... 

* Задача 3: готово: см. раздел **Ценные указания**.

* Задача 4

1. Шаг: этими данными мы заполним нашу первую БД firebase:

```
// db.json
{
    "db": [
        {
            "datetime": "21051993",
            "tel": "+375298237919"
        },
        {
            "datetime": "18091987",
            "tel": "+375297474241"
        },
        {
            "datetime": "03081961",
            "tel": "+375297474425"
        }
    ]
}
```


* Задача 5: подготовить html-код для чтения из firebase.

1. Шаг: это будет обычный html-файл, вызываемый emmetoм из шаблона "!", с той лишь разницей, что в области **head** мы будем подключать файл ```app.js```.

* Задача 06: подготовить JS-код для чтения из firebase.

А код до безумия прост:

```
// app.js
fetch('https://jsbymda-default-rtdb.firebaseio.com/db.json')
.then(response => {
    return response.json();
})
.then(response => {
    console.log(response);
    console.log(response.length);
});
```


* Задача 7: хорошенько все протестировать.

1. Шаг. Проверка - все работает как часы: db.json выводится в консоль браузера.

* Задача 8

1. Шаг

2. Шаг

3. Шаг

4. Шаг

* Задача 09: запомнить разработанную структуру данных, использованную в firebase.

1. Шаг.

В общем, все элементарно: база должна будет представлять собой пары, состоящие из:

* номера телефона;

* даты и времени, когда их оставили на сайте.


* Задача 10

1. Шаг

2. Шаг

3. Шаг

4. Шаг

* Задача 11-14

1. Шаг: HTML

```
// register.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>МАРР: запись на ИТ-курсы</title>
</head>
<body>
    <form action="">
        <input type="number" class="tel"><br>
        <button class="btn">Send</button>
    </form>
    <script src="https://cdn.firebase.com/js/client/1.1.1/firebase.js"></script>
    <script src="reg.js"></script>
</body>
</html>
```

2. Шаг: JS

```
// reg.js
const tel = document.querySelector('.tel');
const btn = document.querySelector('.btn');


const handler = (e) => {
    e.preventDefault();
    const order = {};
    const time = new Date();

    id = time.getTime();
    order.tel = tel.value;

    const firebase = new Firebase(`https://jsbymda-default-rtdb.firebaseio.com/orders/${id}`);
    firebase.update(order);
    console.log(order);
}

btn.addEventListener('click', handler);
```

3. Шаг: заполнение: пять минут - полёт "нормальный" :)


* Задача 14: хорошенько все протестировать: можно ли все эти данные получить обратно из firebase?

1. Шаг: попытаемся прочитать содержимое ```orders.json``` из ```firebase```

```
// app.js (в новой редакции)
fetch('https://jsbymda-default-rtdb.firebaseio.com/orders.json')
.then(response => {
    return response.json();
})
.then(response => {
    console.log(response);
    console.log(response.length);
});
```

Результат: данные успешно читаются из firebase, вот только пока не ясно: что с этим всем "добром" делать...


2. Шаг

3. Шаг

4. Шаг


* Задача 15

1. Шаг

2. Шаг

3. Шаг

4. Шаг

* Задача 16

1. Шаг

2. Шаг

3. Шаг

4. Шаг