import { Item } from 'src/app/shared/item.model';
import { Injectable } from '@angular/core';
import { Button } from 'src/app/button.service';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from '../../../shared/storage.model'
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class ChangeItemInfoService {
    itemToChange: Item = new Item();
    itemNewInfo: Item = new Item();
    idForChange: string = '';    
        //!! Это запрос на сервер
    items = [
        new Item(
          "Крест серебрянный требный",
          "Крест серебрянный требный. Производство Софрино. Среднего размера. Есть царапины. Выносится на Господские праздники",
          ["sadfsf", "sfafsfsfd", "afdsafsaddf", "dafsdfasf"],
          "КCT1",
          new Date(),
          new Storage("Сосудохранительница"),
          new ItemType("Крест Требный")
        ),
        new Item(
          "Крест золотой",
          "Крест  золтойтребный. Производство Софрино. Малого размера. Есть царапины. Выносится на Господские праздники",
          ["sadfsf", "sfafsfsfd", "afdsafsaddf", "dafsdfasf"],
          "КЗT1",
          new Date(),
          new Storage("Ризница"),
          new ItemType("Крест Требный")
        ), 
        new Item(
          
          "Евангелие золотой",
          "Евангелие золтое требный. Производство Софрино. Среднего размера. Есть царапины. Выносится на Господские праздники",
          ["sadfsf", "sfafsfsfd", "afdsafsaddf", "dafsdfasf"],
          "ЕЗT1",
          new Date(),
          new Storage("Ризница"),
          new ItemType("Евангелие")
        ),
    ]

    constructor(
        private showComponentService: ShowComponentService,        
    ) {}

    //по айдишнику находит из массива элемент и записывает его в ИтемТуЧендж
    getChangeItem(id: string) {
       this.items.forEach((item) => {
           if(item.key == id) {
            this.itemToChange = item;
           }
       }); 
    }

    //вешает на кнопки "изменить" переход на другую страницу с записью выбранного предмета
    changeButtonListener() {
        document.querySelectorAll(".change-btn").forEach((btn) => {
            btn.addEventListener('click', () => {
                this.getChangeItem(btn.id);
                this.showComponentService.changeSceneTo('changeChosenItem');
            });
        });
    }
}