import { Item } from 'src/app/shared/item.model';
import { Injectable } from '@angular/core';
@Injectable()
export class AddItemService {
    public addedItem: Item;
    constructor() {}
}