---
title: BPMN Процесс Онлайн-бронирование инвентаря
sidebar_position: 1
---
# BPMN Процесс Онлайн-бронирование инвентаря


![image.png](image.png)

### DML:

### **1) Identify_category и 2)** choosing_alternative_inventory

В процессе аренды спортивного инвентаря (или другого товара) система должна идентифицировать категории товаров, для того чтобы предлагать пользователям альтернативные и похожие варианты. Соответственно в зависимости от категории будут меняться различные факторы, например, если товар категории "футбольное оборудование", то цена будет варьироваться до 500 и более, если категория "Туристическое снаряжение" то цена будет до 1000 и более. В дальнейшем можно рассмотреть данную логику намного глубже, например, если категория товара "Обувь", то в зависимости от размера будет выдавать список похожего товара.

![image.png]![alt text](image-1.png)

![image.png]![ ](image-2.png)

### 3) registration_client

Процесс регистрации клиента в системе аренды инвентаря включает проверку корректности, валидности введенных данных, проверку уникальности и подтверждение email. DMN позволяет систематизировать эти проверки в виде легко управляемых правил, так как не все проверки интуитивно понятны. 

![image.png]![alt text](image-3.png)

