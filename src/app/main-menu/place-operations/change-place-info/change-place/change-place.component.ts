import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
 
import { Storage } from '../../../../shared/storage.model';
import { NgForm } from '@angular/forms';
import { ChangePlaceInfoService } from '../changePlaceInfo.service';
import { ShowComponentService } from 'src/app/showComponent.service';
@Component({
  selector: 'app-change-place',
  templateUrl: './change-place.component.html',
  styleUrls: ['./change-place.component.css']
})
export class ChangePlaceComponent implements OnInit {

  @ViewChild('f', { static: false })
  editPlaceForm: NgForm;

  constructor(public changePlaceInfoService: ChangePlaceInfoService,
              private showComponentService: ShowComponentService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    //console.log(this.editPlaceForm.value);
    this.changePlaceInfoService.getNewStorage(this.editPlaceForm.value);
    this.changePlaceInfoService.updateStorages();
    this.showComponentService.changeSceneTo('placeChanged');
  }
    
  
}
