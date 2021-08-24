import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgForm, FormControl, Validators, FormGroup, } from '@angular/forms';
import { ShowComponentService } from 'src/app/showComponent.service';
import { AddPlaceService } from '../addPlace.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-place-start',
  templateUrl: './add-place-start.component.html',
  styleUrls: ['./add-place-start.component.css'] 
})
export class AddPlaceStartComponent { 

  addPlaceForm: FormGroup; 
  nameExistFlag: boolean = false;

  constructor(public addPlaceService: AddPlaceService,
              private showComponentService: ShowComponentService,
              private http: HttpClient, 
              ) { } 

  ngOnInit() {
    this.addPlaceForm = new FormGroup({
      'name':new FormControl(null, [Validators.required]),
      'description': new FormControl(null, []),
    });
  }

  onSubmit() {
    
    this.addPlaceService.addedPlace.name = this.addPlaceForm.value.name;
    this.addPlaceService.addedPlace.description = this.addPlaceForm.value.description;
    this.addPlaceService.addStorage();
    this.showComponentService.changeSceneTo("onPlaceAdded");
  }


  onKey(event) {
    this.http.get(
      this.showComponentService.serverPath + '/storage/isExist/' + event.target.value
    ).subscribe(responseData => {
      //понятия не имею, почему не передавалось присваиванием
      if(responseData == true) {
        this.nameExistFlag = true;
      }else {
        this.nameExistFlag = false;
      }
      console.log(this.nameExistFlag);
    });
  }

}
