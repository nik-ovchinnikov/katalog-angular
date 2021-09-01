import { Storage } from 'src/app/shared/storage.model';
import { Item } from 'src/app/shared/item.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { ShowAllPlacesService } from '../../place-operations/show-all-places/showAllPlace.service';
import { ShowAllItemTypeService } from '../../item-type-operations/shoe-all-item-types/showAllItemTypes.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class ShowAllPlaceItemsService {
   chosenStorage: Storage = new Storage();
   // формируется запросом в базу
   itemsToShow: Item[] = [];
   storageList: Storage[] = [];


   listEmitter = new EventEmitter<Item[]>();

   constructor (
     private showAllPlaceService: ShowAllPlacesService,
     private http: HttpClient,
     private showComponentService: ShowComponentService,
   ) {}

   getStorageList(): Storage[] {
      this.storageList = this.showAllPlaceService.getStorages();
      console.log(this.storageList);
      return this.storageList;   
  }

  getStorageItems(): Item[] {
      this.itemsToShow = [];
      this.http.get(
        this.showComponentService.serverPath + '/item/getItemsByStorage/' + this.chosenStorage.name
    ).subscribe(responseData => {
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