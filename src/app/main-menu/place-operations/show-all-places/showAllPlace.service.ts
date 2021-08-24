import { HttpClient } from '@angular/common/http'
import { Storage } from 'src/app/shared/storage.model';
import { Injectable, EventEmitter } from '@angular/core';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class ShowAllPlacesService { 
    constructor (private http: HttpClient,
        private showComponentService: ShowComponentService) {}

    storageList: Storage[] = [];
    listEmitter = new EventEmitter<Storage[]>();

    public getStorages() {
        this.storageList = [];
        this.http.get(
            this.showComponentService.serverPath + '/storage/getAll', 
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