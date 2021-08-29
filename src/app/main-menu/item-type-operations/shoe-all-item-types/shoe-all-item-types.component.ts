import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemType } from 'src/app/shared/itemType.model';
import { ShowAllItemTypeService } from './showAllItemTypes.service';

@Component({
  selector: 'app-shoe-all-item-types',
  templateUrl: './shoe-all-item-types.component.html',
  styleUrls: ['./shoe-all-item-types.component.css'],
  providers: [ShowAllItemTypeService]
})
export class ShoeAllItemTypesComponent implements OnInit {

  types: ItemType[] = [];

  constructor(private showAllItemTypesService: ShowAllItemTypeService) { }

  ngOnInit(): void {
    this.types = this.showAllItemTypesService.getItemTypes(false);
  }
}
