import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 
import { Storage } from '../../../shared/storage.model'
import { ShowAllPlacesService } from './showAllPlace.service';
import { GetStorageByIdService } from '../getStorageById.service';
@Component({
  selector: 'app-show-all-places',
  templateUrl: './show-all-places.component.html',
  styleUrls: ['./show-all-places.component.css'],
  providers: [ShowAllPlacesService],
})
export class ShowAllPlacesComponent implements OnInit {

  constructor(private showAllPlacesService: ShowAllPlacesService,
  private getStorageByIdService: GetStorageByIdService) { }

  places: Storage[] = [];
  place: Storage = new Storage();

  ngOnInit(): void {
    this.places = this.showAllPlacesService.getStorages(); 
  }

  ngAfterViewChecked() {
    //this.place = this.getStorageByIdService.storage;
  }
  
}
