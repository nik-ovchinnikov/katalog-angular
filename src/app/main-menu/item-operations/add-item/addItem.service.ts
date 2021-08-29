import { Item } from 'src/app/shared/item.model';
import { Injectable, EventEmitter } from '@angular/core';
import { ShowAllPlacesService } from '../../place-operations/show-all-places/showAllPlace.service';
import { ShowAllItemTypeService } from '../../item-type-operations/shoe-all-item-types/showAllItemTypes.service';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from 'src/app/shared/storage.model'
import { HttpClient } from '@angular/common/http';
import { ShowComponentService } from 'src/app/showComponent.service';
@Injectable()
export class AddItemService {
    public addedItem: Item;
    public placeList: Storage[] = [];
    public typeList: ItemType[] = [];
    public storageListsChangedEmitter = new EventEmitter<Storage[]>();
    public typesListsChangedEmitter = new EventEmitter<ItemType[]>();
    public chosenItemType: ItemType;
    public chosenStorage: Storage;

    constructor(
        private showAllItemTypesservice: ShowAllItemTypeService,
        private showAllPlaceService: ShowAllPlacesService,
        private http: HttpClient,
        private showComponentService: ShowComponentService
    ) {}

    public getLists() {
        this.showAllPlaceService.getStorages(false);
        this.showAllItemTypesservice.getItemTypes(false); 

        this.showAllPlaceService.listEmitter.subscribe((storage) => {
            this.placeList = [];
            Object.assign(
                this.placeList,
                storage
            );
            this.storageListsChangedEmitter.emit(this.placeList);
        });

        this.showAllItemTypesservice.listEmitter.subscribe((types) => {
            this.typeList = [];
            Object.assign(
                this.typeList,
                types
            );
            types = [];
            this.typesListsChangedEmitter.emit(this.typeList);
        });
    }

    public addItem(files: File[]){
        
        this.http.post(
            this.showComponentService.serverPath + '/item/addItem',
            this.addedItem
        ).subscribe(responseData => {
            //Запрос с добавлением файлов
            for (let file of files) {
                const fd = new FormData();
                fd.append("file", file);
                this.http.post(
                  this.showComponentService.serverPath + '/files/addFile',
                  fd
                ).subscribe( res => {});
            }
        });
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
            if (place.name == storageName) {
                this.chosenStorage = place;
            }
        }
        return this.chosenStorage;
    }
}