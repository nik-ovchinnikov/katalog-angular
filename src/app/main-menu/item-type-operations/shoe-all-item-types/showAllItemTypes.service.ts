import { HttpClient } from '@angular/common/http'
import { Storage } from 'src/app/shared/storage.model';
import { Injectable, EventEmitter } from '@angular/core';
import { ItemType } from 'src/app/shared/itemType.model';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class ShowAllItemTypeService { 
    constructor (private http: HttpClient,
     private showComponentService: ShowComponentService,
        ) {} 

    typeList: ItemType[] = [];
    listEmitter = new EventEmitter<ItemType[]>();

    public getItemTypes(showAbsendFlag: boolean = true) {
        this.typeList = [];
        this.http.get(
           this.showComponentService.serverPath + '/itemType/getAll',
        ).subscribe(responseData => {
            //исключает "Отсутствует", гду флаг, остальные добавляет
            if(!showAbsendFlag){
                for (let elem in responseData) {
                    if((responseData[elem].id != -1) 
                    ) {
                        this.typeList.push(
                            responseData[elem]
                        );
                    }
                }
            }else{
                for (let elem in responseData) {
                    this.typeList.push(
                        responseData[elem]
                    );
                }
            }    
            this.listEmitter.emit(this.typeList);
        });
        return this.typeList;
    }
}