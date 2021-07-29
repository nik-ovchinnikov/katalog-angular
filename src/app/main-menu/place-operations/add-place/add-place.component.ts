import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddPlaceService } from './addPlace.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowComponentService } from 'src/app/showComponent.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
  providers: [AddPlaceService]
})
export class AddPlaceComponent implements OnInit{

  addPlaceForm: FormGroup;

  constructor(private addPlaceService: AddPlaceService,
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
