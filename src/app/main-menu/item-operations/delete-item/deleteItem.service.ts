import { Item } from 'src/app/shared/item.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from '../../../shared/storage.model'
import { Injectable } from '@angular/core';
import { ShowComponentService } from 'src/app/showComponent.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeleteItemService {
    itemToDelete: Item = new Item();
    items: Item[] = [];

    deleteButtonCounter = 0;
    
    constructor(
        private showComponentService: ShowComponentService,
        private http: HttpClient        
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
                if(this.deleteButtonCounter == 0) {
                    this.getDeleteItem(btn.id);
                    this.deleteItem();
                    this.showComponentService.changeSceneTo('itemDeleted');
                    this.deleteButtonCounter++;
                }
            });
        });
    }

    public deleteItem() {
        this.http.delete(
            this.showComponentService.serverPath + '/item/deleteItem/' + this.itemToDelete.key
        ).subscribe(responseData => {
            console.log(responseData);
        });
        
    }
}