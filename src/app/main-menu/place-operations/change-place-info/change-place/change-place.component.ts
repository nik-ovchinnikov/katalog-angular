import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
 
import { Storage } from '../../../../shared/storage.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangePlaceInfoService } from '../changePlaceInfo.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-change-place',
  templateUrl: './change-place.component.html',
  styleUrls: ['./change-place.component.css']
})
export class ChangePlaceComponent implements OnInit {

  changePlaceForm: FormGroup;
  nameExistFlag: boolean = false; 

  constructor(public changePlaceInfoService: ChangePlaceInfoService,
              private showComponentService: ShowComponentService,
              private http: HttpClient,
              ) { }

  ngOnInit(): void {
    this.changePlaceForm = new FormGroup({
      'name':new FormControl(this.changePlaceInfoService.oldStorageInfo.name, [Validators.required]),
      'description': new FormControl(this.changePlaceInfoService.oldStorageInfo.description, []),
    });
  }
  onSubmit() {
    //console.log(this.editPlaceForm.value);
    this.changePlaceInfoService.newStorageInfo.name = this.changePlaceForm.value.name;
    this.changePlaceInfoService.newStorageInfo.description = this.changePlaceForm.value.description;
    this.changePlaceInfoService.newStorageInfo.id = this.changePlaceInfoService.oldStorageInfo.id;
    this.changePlaceInfoService.updateStorages();
    
    this.showComponentService.changeSceneTo('placeChanged');
  }

  onKey(event) {
    this.http.get(
      this.showComponentService.serverPath + '/storage/isExist/' + event.target.value
    ).subscribe(responseData => {
      //console.log(event.target.value);
      console.log(this.changePlaceInfoService.oldStorageInfo.name);
      //понятия не имею, почему не передавалось присваиванием
      if((responseData == true) &&
        (event.target.value != this.changePlaceInfoService.oldStorageInfo.name)
      ) {
        this.nameExistFlag = true;
      }else {
        this.nameExistFlag = false;
      }
      console.log(this.nameExistFlag);
    });
  } 
  
}
