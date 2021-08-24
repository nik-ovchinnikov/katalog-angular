import { ItemType } from 'src/app/shared/itemType.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class AddTypeService {
    itemTypeAdded: ItemType = new ItemType();

    constructor(private http: HttpClient,
     private showComponentService: ShowComponentService,
        ){}

    public addItemType(){
        this.http.post(
            this.showComponentService.serverPath + '/itemType/addItemType',
            {
                "name": this.itemTypeAdded.name,
                "description": this.itemTypeAdded.description
            }
        ).subscribe(responseData => {
        });
    }
}