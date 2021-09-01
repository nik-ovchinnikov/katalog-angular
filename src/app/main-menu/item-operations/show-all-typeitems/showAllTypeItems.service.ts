import { ItemType } from 'src/app/shared/itemType.model';
import { Item } from 'src/app/shared/item.model';
import { Storage } from 'src/app/shared/storage.model';
import { HttpClient } from '@angular/common/http';
import { ShowAllItemTypeService } from '../../item-type-operations/shoe-all-item-types/showAllItemTypes.service';
import { Injectable, EventEmitter } from '@angular/core';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class ShowAllTypeItemsService {
     
       chosenType: ItemType= new ItemType();

       typeList: ItemType[] = [];
       itemsToShow: Item[] = [];
       listEmitter = new EventEmitter<Item[]>();

       constructor (
        private showAllTypeService: ShowAllItemTypeService,
        private http: HttpClient,
        private showComponentService: ShowComponentService,
       ) {}

      getTypeList(): ItemType[] {
         this.typeList= this.showAllTypeService.getItemTypes();
         return this.typeList;   
      }

   getTypeItems(): Item[] {
    this.itemsToShow = [];
    this.http.get(
      this.showComponentService.serverPath + '/item/getItemsByType/' + this.chosenType.name
    ).subscribe(responseData => {
      console.log(responseData);
      for (let elem in responseData) {
        this.itemsToShow.push(

                    new Item(
                        responseData[elem].name,
                        responseData[elem].description,
                        responseData[elem].itemPicture,
                        responseData[elem].key,
                        responseData[elem].incomeDate,
                        new Storage(
                            responseData[elem].storage.name,
                            responseData[elem].storage.description,
                            responseData[elem].storage.id,
                        ),
                        new ItemType(
                            responseData[elem].itemType.name,
                            responseData[elem].itemType.description,
                            responseData[elem].itemType.id,
                        ),
                        responseData[elem].id,
                    // responseData[elem]
                    )
        );
      }
      this.listEmitter.emit(this.itemsToShow);
    });

    return this.itemsToShow;

  }

}