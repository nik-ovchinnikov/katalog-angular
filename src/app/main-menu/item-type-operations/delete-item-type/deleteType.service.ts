import { ItemType } from 'src/app/shared/itemType.model';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ShowComponentService } from 'src/app/showComponent.service';
import { ShowAllItemTypeService } from '../shoe-all-item-types/showAllItemTypes.service';

@Injectable()
export class DeleteTypeService {
    deletedType: ItemType = new ItemType();
    itemTypeList: ItemType[] = [];
    onListChanged = new EventEmitter<ItemType[]>();

    constructor(private http: HttpClient,
        private showComponentService: ShowComponentService,
        private showAllItemTypesservice: ShowAllItemTypeService,
        ) {}

    public getItemTypes(showAbsendFlag: boolean = true) {
        this.itemTypeList = [];
        // this.itemTypeList = this.showAllItemTypesservice.getItemTypes(false);
        // this.onListChanged.emit(this.itemTypeList);


        this.http.get(
            this.showComponentService.serverPath + '/itemType/getAll',
        ).subscribe(responseData => {
            // for (let elem in responseData) {
            //     this.itemTypeList.push(
            //         responseData[elem]
            //     );
            // }
            //исключает "Отсутствует", гду флаг, остальные добавляет
            if(!showAbsendFlag){
                for (let elem in responseData) {
                    if((responseData[elem].id != -1) 
                    ) {
                        this.itemTypeList.push(
                            responseData[elem]
                        );
                    }
                }
            }else{
                for (let elem in responseData) {
                    this.itemTypeList.push(
                        responseData[elem]
                    );
                }
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
            this.showComponentService.serverPath + '/itemType/deleteItemType/' + this.deletedType.name
        ).subscribe(responseData => {
            console.log(responseData);
        });
        
    }
}
