import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
 
import { Storage } from '../../../../shared/storage.model'
import { NgForm } from '@angular/forms';
import { ShowComponentService } from 'src/app/showComponent.service';
import { DeletePlaceService } from '../deletePlace.service';
@Component({
  selector: 'app-show-place-list-to-delete',
  templateUrl: './show-place-list-to-delete.component.html',
  styleUrls: ['./show-place-list-to-delete.component.css']
})
export class ShowPlaceListToDeleteComponent implements OnInit {

  places: Storage[] = [];

  @ViewChild('f', { static: false })
  choosePlaceForm: NgForm;

  constructor(private showComponentSercvice: ShowComponentService,
              private deletePlaceService: DeletePlaceService) { }

  ngOnInit(): void {
    this.deletePlaceService.getStorages();
    this.deletePlaceService.onStorageListChanged.subscribe((storageListChanged: Storage[])=> {
      this.places = storageListChanged;
    });
  }

  onSubmit() {
    this.deletePlaceService.getDeletedStorage(this.choosePlaceForm.value);
    this.deletePlaceService.deleteStorages();
    this.showComponentSercvice.changeSceneTo('placeDeleted');
  }
}
