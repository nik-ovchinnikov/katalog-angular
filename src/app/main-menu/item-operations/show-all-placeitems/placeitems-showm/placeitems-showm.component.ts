import { Component, OnInit } from '@angular/core';
import { ShowAllPlaceItemsService } from '../showAllPlaceItems.service';

@Component({
  selector: 'app-placeitems-showm',
  templateUrl: './placeitems-showm.component.html',
  styleUrls: ['./placeitems-showm.component.css']
})
export class PlaceitemsShowmComponent implements OnInit {

  constructor(
              public showAllPlaceItemsService: ShowAllPlaceItemsService
  ) { }

  ngOnInit(): void {
    this.showAllPlaceItemsService.listEmitter.subscribe((items) => {
      for (let item of items) {
        item.imageSource = item.imageURL();
      }
    });
  }

}
