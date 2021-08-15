import { ItemType } from 'src/app/shared/itemType.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChangeItemTypeService {
    public oldItemTypeInfo: ItemType = new ItemType();
    public newItemTypeInfo: ItemType = new ItemType();

    public itemTypeList: ItemType[] = [];
    public onListChanged = new EventEmitter<ItemType[]>();

    constructor(private http: HttpClient) {}

    public getItemTypes() {
        this.http.get(
            'http://localhost:8080/itemType/getAll',
        ).subscribe(responseData => {
            for (let elem in responseData) {
                this.itemTypeList.push(
                    responseData[elem]
                );
            }
            this.onListChanged.emit(this.itemTypeList);
        });
    }

    public getOldItemType(id: number) {
        for (let itemType of this.itemTypeList) {
            if (itemType.name == id["typeToChange"]) {
                this.oldItemTypeInfo= itemType;
            }
        }
    }

    public getNewItemType (changedInfo: Storage) {
        Object.assign(this.newItemTypeInfo, this.oldItemTypeInfo);
        this.newItemTypeInfo.name = changedInfo["editedItemTypeName"];
        this.newItemTypeInfo.description = changedInfo["editedItemTypeDescription"];
    }

    public updateItemType() {
        //console.log(this.newStorageInfo); 
        this.http.put(
            'http://localhost:8080/itemType/updateItemType',
            this.newItemTypeInfo
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }

}