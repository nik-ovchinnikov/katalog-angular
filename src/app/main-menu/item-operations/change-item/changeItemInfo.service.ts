import { Item } from 'src/app/shared/item.model';
import { Injectable, EventEmitter, Sanitizer } from '@angular/core';
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
       this.items.forEach((item) => {
           if(item.id == parseInt(id, 10)) {
            console.log(item);
            this.itemToChange = item;
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
        this.placeList = this.showAllPlaceService.getStorages(false);
        this.typeList = this.showAllItemTypesservice.getItemTypes(false);
        return [this.placeList, this.typeList];
    }

    public updateItem(files: File[]) {
        
         console.log(this.counterUpdate); 
        if(this.counterUpdate == 0){
            this.http.put(
                this.showComponentService.serverPath + '/item/updateItem',
                this.itemNewInfo
            ).subscribe(responseData => {
                //выгрузка на сервер файлов новых(все новые файлы из массива файлов) из массива файлов
                for(let file of files) {
                       const fd = new FormData();
                       fd.append("file", file); 
                       this.http.post(
                           this.showComponentService.serverPath + '/files/addFile',
                           fd
                       ).subscribe( res => {})
                }
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