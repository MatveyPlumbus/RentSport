---
title: Concept DB
sidebar_position: 1
---

# Модель данных

import Drawio from '@theme/Drawio'
import diagram from '!!raw-loader!./model.drawio';

<Drawio content={diagram} editable={false} />


## ### Таблица 1. Сущность Категории инвентаря (inventory_category)

|Атрибут|Описание|Тип данных|Значение по умолчанию|Ограничения|Обязательность|
|-|-|-|-|-|-|
|category_id |Идентификатор категории|Целочисленный||PRIMARY KEY|Да|
|name|Название категории|Текстовый||NOT NULL|Да|

Категории инвентаря решено было вынести в отдельную сущность, так как скорее всего они редко будут пополняться и будут иметь определенный список


