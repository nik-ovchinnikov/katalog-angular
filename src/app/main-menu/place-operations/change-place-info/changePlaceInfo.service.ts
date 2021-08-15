import { Storage } from '../../../shared/storage.model' 
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChangePlaceInfoService {
    public oldStorageInfo: Storage = new Storage();
    public newStorageInfo: Storage = new Storage();

    public storageList: Storage[] = [];
    public onStorageListChanged = new EventEmitter<Storage[]>();

    constructor(private http: HttpClient) {}

    public getStorages() {
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

    public getOldStorage (id: number) {
        for (let storage of this.storageList) {
            console.log(storage);
            if (storage.id == id["placeToChange"]) {
                this.oldStorageInfo = storage;
            }
        }
    }

    public getNewStorage (changedInfo: Storage) {
        Object.assign(this.newStorageInfo, this.oldStorageInfo);
        this.newStorageInfo.name = changedInfo["editedPlaceName"];
        this.newStorageInfo.description = changedInfo["editedPlaceDescription"];
    }

    public updateStorages() {
        //console.log(this.newStorageInfo); 
        this.http.put(
            'http://localhost:8080/storage/updateStorage',
            this.newStorageInfo
        ).subscribe(responseData => {
            console.log(responseData);
        });
        
    }
    
}