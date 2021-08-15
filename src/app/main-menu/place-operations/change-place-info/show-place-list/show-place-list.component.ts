import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { Storage } from '../../../../shared/storage.model';
import { NgForm } from '@angular/forms';
import { ChangePlaceInfoService } from '../changePlaceInfo.service'; 
import { ShowComponentService } from 'src/app/showComponent.service';

@Component({
  selector: 'app-show-place-list',
  templateUrl: './show-place-list.component.html',
  styleUrls: ['./show-place-list.component.css']
})
export class ShowPlaceListComponent implements OnInit {

  places: Storage[] = [];

  @ViewChild('f', { static: false })
  choosePlaceForm: NgForm;

  constructor(private changePlaceInfoService: ChangePlaceInfoService,
              private showComponentService: ShowComponentService) { }

  ngOnInit(){
    this.changePlaceInfoService.storageList = [];
    this.changePlaceInfoService.getStorages();
    this.changePlaceInfoService.onStorageListChanged.subscribe((storageListChanged: Storage[])=> {
      this.places = storageListChanged;
    });
  }


  onSubmit() {
    this.changePlaceInfoService.getOldStorage(this.choosePlaceForm.value);
    this.showComponentService.changeSceneTo('changePlaceInfo');

  }
}
