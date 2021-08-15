import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShowAllItemsService {
    constructor (private http: HttpClient) {}

    itemsList: Storage[] = [];
    listEmitter = new EventEmitter<Storage[]>();

    public getItems() {
        this.itemsList = [];
        this.http.get(
            'http://localhost:8080/item/getAll', 
        ).subscribe(responseData => {
            for (let elem in responseData) {
                this.itemsList.push(
                    responseData[elem]
                );
            }
            this.listEmitter.emit(this.itemsList);
        });
        return this.itemsList;
    }
}