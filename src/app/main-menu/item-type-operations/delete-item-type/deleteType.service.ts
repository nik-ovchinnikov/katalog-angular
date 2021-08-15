import { ItemType } from 'src/app/shared/itemType.model';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DeleteTypeService {
    deletedType: ItemType = new ItemType();
    itemTypeList: ItemType[] = [];
    onListChanged = new EventEmitter<ItemType[]>();

    constructor(private http: HttpClient) {}

    public getItemTypes() {
        this.itemTypeList = [];

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
    
    public getDeletedItemType(id: number) {
        for (let itemType of this.itemTypeList) {
            if (itemType.name == id["placeToChange"]) {
                this.deletedType = itemType;
            }
        }
    }

    public deleteTypes() {
        this.http.delete(
            'http://localhost:8080/itemType/deleteItemType/' + this.deletedType.name
        ).subscribe(responseData => {
            console.log(responseData);
        });
        
    }
}
