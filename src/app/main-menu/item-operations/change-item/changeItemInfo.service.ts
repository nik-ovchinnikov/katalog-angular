import { Item } from 'src/app/shared/item.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Button } from 'src/app/button.service';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from '../../../shared/storage.model'
import { ShowComponentService } from 'src/app/showComponent.service';
import { AddItemService } from '../add-item/addItem.service';
import { ShowAllPlacesService } from '../../place-operations/show-all-places/showAllPlace.service';
import { ShowAllItemTypeService } from '../../item-type-operations/shoe-all-item-types/showAllItemTypes.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChangeItemInfoService {
    itemToChange: Item = new Item();
    itemNewInfo: Item = new Item();
    idForChange: string = '';    

    items: Item[] = [];
    typeList: ItemType[] = [];
    placeList: Storage[] = [];
//Для отправки измений. Это для поиска объекта класса по имени в форме
    public chosenItemType: ItemType;
    public chosenStorage: Storage;

//Костыль. Избавляет от двойного нажатия из-за нескольких eventListener-ов
    changeButtonCounter = 0;
    counterUpdate = 0;

    constructor(
        private showComponentService: ShowComponentService,
        private showAllPlaceService: ShowAllPlacesService,
        private showAllItemTypesservice: ShowAllItemTypeService,
        private http: HttpClient,
    ) {}

    //по айдишнику находит из массива элемент и записывает его в ИтемТуЧендж
    getChangeItem(id: string) {
        console.log(this.items);
       this.items.forEach((item) => {
           if(item.key == id) {
            this.itemToChange = item;
            console.log(this.itemToChange);
           }
       }); 
    }

    //вешает на кнопки "изменить" переход на другую страницу с записью выбранного предмета
    changeButtonListener() {
        document.querySelectorAll(".change-btn").forEach((btn) => {
            btn.addEventListener('click', () => {
                if(this.changeButtonCounter == 0){
                    this.getChangeItem(btn.id);
                    this.showComponentService.changeSceneTo('changeChosenItem');
                    this.changeButtonCounter++;
                }
            });
        });
    }

    //Забирает из сервера списки типов и мест
    getLists() {
        this.placeList = this.showAllPlaceService.getStorages();
        this.typeList = this.showAllItemTypesservice.getItemTypes();
        return [this.placeList, this.typeList];
    }

    public updateItem() {
        // console.log(this.itemNewInfo); 
        if(this.counterUpdate == 0){
            this.http.put(
                'http://localhost:8080/item/updateItem',
                this.itemNewInfo
            ).subscribe(responseData => {
                //console.log(responseData);
            });
        }
        this.counterUpdate++;
        
    }

    public getItemTypeByName (typeName: string ): ItemType  {
        this.chosenItemType = new ItemType();
        for (let itemType of this.typeList) {
            if (itemType.name == typeName) {
                this.chosenItemType = itemType;
            }
        }
        return this.chosenItemType;
    }

    public getStorageByName (storageName: string) {
        for (let place of this.placeList) {
            // console.log(place.name);
            if (place.name == storageName) {
                this.chosenStorage = place;
            }
        }
        return this.chosenStorage;
    }
}