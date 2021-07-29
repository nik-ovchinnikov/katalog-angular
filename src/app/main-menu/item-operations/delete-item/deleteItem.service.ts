import { Item } from 'src/app/shared/item.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from '../../../shared/storage.model'
import { Injectable } from '@angular/core';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class DeleteItemService {
    itemToDelete: Item = new Item();
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

    //по айдишнику находит из массива элемент и записывает его в ИтемТуДелит
    getDeleteItem(id: string) {
       this.items.forEach((item) => {
           if(item.key == id) {
            this.itemToDelete = item;
           }
       }); 
    }

    //вешает на кнопки "изменить" переход на другую страницу с записью выбранного предмета
    changeButtonListener() {
        document.querySelectorAll(".delete-btn").forEach((btn) => {
            btn.addEventListener('click', () => {
                this.getDeleteItem(btn.id);
                //!! тут запрос в базу
                alert("Вы действительно хотите удалить " + this.itemToDelete.name + "?");
                this.showComponentService.changeSceneTo('itemDeleted');
            });
        });
    }
}