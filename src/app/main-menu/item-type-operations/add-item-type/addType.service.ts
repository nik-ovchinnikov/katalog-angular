import { ItemType } from 'src/app/shared/itemType.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddTypeService {
    itemTypeAdded: ItemType = new ItemType();

    constructor(private http: HttpClient){}

    public addItemType(){
        this.http.post(
            'http://localhost:8080/itemType/addItemType',
            {
                "name": this.itemTypeAdded.name,
                "description": this.itemTypeAdded.description
            }
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }
}