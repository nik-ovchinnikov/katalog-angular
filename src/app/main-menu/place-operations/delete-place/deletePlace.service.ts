import { Storage } from '../../../shared/storage.model'
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class DeletePlaceService {

    deletedStorage: Storage = new Storage();
    storageList: Storage[] = [];
    onStorageListChanged = new EventEmitter<Storage[]>();

    constructor(private http: HttpClient) {}

    public getDeletedStorage (id: number) {
        for (let storage of this.storageList) {
            if (storage.name == id["placeToChange"]) {
                this.deletedStorage = storage;
            }
        }
    }

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
            this.onStorageListChanged.emit(this.storageList);
        });
        
    }

    public deleteStorages() {
        this.http.delete(
            'http://localhost:8080/storage/deleteStorage/' + this.deletedStorage.name
        ).subscribe(responseData => {
            console.log(responseData);
        });
        
    }
}