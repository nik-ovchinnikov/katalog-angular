import { HttpClient } from '@angular/common/http'
import { Storage } from 'src/app/shared/storage.model';
import { Injectable, EventEmitter } from '@angular/core';
import { ItemType } from 'src/app/shared/itemType.model';

@Injectable()
export class ShowAllItemTypeService { 
    constructor (private http: HttpClient) {} 

    typeList: ItemType[] = [];
    listEmitter = new EventEmitter<ItemType[]>();

    public getItemTypes() {
        this.typeList = [];
        this.http.get(
            'http://localhost:8080/itemType/getAll',
        ).subscribe(responseData => {
            for (let elem in responseData) {
                this.typeList.push(
                    responseData[elem]
                );
            }
            this.listEmitter.emit(this.typeList);
        });
        return this.typeList;
    }
}