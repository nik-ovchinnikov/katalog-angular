import { HttpClient } from '@angular/common/http'
import { Storage } from 'src/app/shared/storage.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShowAllPlacesService { 
    constructor (private http: HttpClient) {}

    storageList: Storage[] = [];
    listEmitter = new EventEmitter<Storage[]>();

    public getStorages() {
        this.storageList = [];
        this.http.get(
            'http://localhost:8080/storage/getAll', 
        ).subscribe(responseData => {
            for (let elem in responseData) {
                this.storageList.push(
                    responseData[elem]
                );
            }
            this.listEmitter.emit(this.storageList);
        });
        return this.storageList;
    }
}