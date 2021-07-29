import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgForm, FormControl, Validators, FormGroup, } from '@angular/forms';
import { ShowComponentService } from 'src/app/showComponent.service';
import { AddPlaceService } from '../addPlace.service';
@Component({
  selector: 'app-add-place-start',
  templateUrl: './add-place-start.component.html',
  styleUrls: ['./add-place-start.component.css']
})
export class AddPlaceStartComponent {

  addPlaceForm: FormGroup;

  constructor(public addPlaceService: AddPlaceService,
              private showComponentService: ShowComponentService ) { }

  ngOnInit() {
    this.addPlaceForm = new FormGroup({
      'name':new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.addPlaceService.addedPlace.name = this.addPlaceForm.value.name;
    this.showComponentService.changeSceneTo("onPlaceAdded");
  }
}
