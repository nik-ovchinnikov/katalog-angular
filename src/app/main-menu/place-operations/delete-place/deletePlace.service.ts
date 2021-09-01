import { Storage } from '../../../shared/storage.model'
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowComponentService } from 'src/app/showComponent.service';
 
@Injectable()
export class DeletePlaceService {

    deletedStorage: Storage = new Storage();
    storageList: Storage[] = [];
    onStorageListChanged = new EventEmitter<Storage[]>();

    constructor(private http: HttpClient,
        private showComponentService: ShowComponentService) {}

    public getDeletedStorage (id: number) {
        for (let storage of this.storageList) {
            if (storage.name == id["placeToChange"]) {
                this.deletedStorage = storage;
            }
        }
    }

    public getStorages(showAbsendFlag: boolean = true) {
        this.storageList = [];
        this.http.get(
           this.showComponentService.serverPath + '/storage/getAll',
        ).subscribe(responseData => {
            // for (let elem in responseData) {
            //     this.storageList.push(
            //         responseData[elem]
            //     );
            // }
            if(!showAbsendFlag){
                for (let elem in responseData) {
                    if((responseData[elem].id != -1) 
                    ) {
                        this.storageList.push(
                            responseData[elem]
                        );
                    }
                }
            }else{
                for (let elem in responseData) {
                    this.storageList.push(
                        responseData[elem]
                    );
                }
            }    
            this.onStorageListChanged.emit(this.storageList);
        });
        
    }

    public deleteStorages() {
        this.http.delete(
           this.showComponentService.serverPath + '/storage/deleteStorage/' + this.deletedStorage.name
        ).subscribe(responseData => {
            console.log(responseData);
        });
        
    }
}