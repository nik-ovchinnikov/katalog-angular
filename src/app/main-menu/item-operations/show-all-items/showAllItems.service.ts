import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/shared/item.model';
import { ShowComponentService } from 'src/app/showComponent.service';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from 'src/app/shared/storage.model';

@Injectable()
export class ShowAllItemsService {
    constructor (private http: HttpClient,
        private showComponentService: ShowComponentService) {}

    itemsList: Item[] = [];
    listEmitter = new EventEmitter<Item[]>();
    pictureNames: String[] = []

    public getItems() {
        this.pictureNames = [];
        this.itemsList = [];
        this.http.get(
            this.showComponentService.serverPath + '/item/getAll', 
        ).subscribe(responseData => {
            for (let elem in responseData) {
                this.itemsList.push(
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
                //собираем названия картинок
                //хотя это не нужно по большому счёту
                for(let itemPicture of responseData[elem].itemPicture) {
                    this.pictureNames.push(itemPicture.name);
                    // responseData[elem].itemPicturesURLs = window.URL.createObjectURL(new File(itemPicture.path + itemPicture.name, ));
                    //тут мы сделаем запрос за картинками
                    // this.http.get(
                    //     this.showComponentService.serverPath + '/files/getFile/' + itemPicture.name
                    // ).subscribe(responseData => {
                    //     console.log(responseData);
                    // })
                }
            }
            this.listEmitter.emit(this.itemsList);

        });
        
        return this.itemsList;
    }
}