import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowAllPlaceItemsService } from '../showAllPlaceItems.service';
import { NgForm } from '@angular/forms';
import { Storage } from 'src/app/shared/storage.model';
import { ShowComponentService } from 'src/app/showComponent.service';

@Component({
  selector: 'app-chose-place',
  templateUrl: './chose-place.component.html',
  styleUrls: ['./chose-place.component.css']
})
export class ChosePlaceComponent implements OnInit {

  @ViewChild('f', { static: false })
  choosePlaceForm: NgForm;
  places: Storage[] = [];

  constructor(private showComponentSercvice: ShowComponentService,
              public showAllPlaceItemsService: ShowAllPlaceItemsService
  ) { }

  ngOnInit(): void {
    this.places = this.showAllPlaceItemsService.getStorageList();
  }



  onSubmit() {
    this.showAllPlaceItemsService.chosenStorage.name = this.choosePlaceForm.value.placeToChange;
    this.showAllPlaceItemsService.getStorageItems();
    this.showComponentSercvice.changeSceneTo('placeItemsShown');


  }
}
