import { Component, OnInit } from '@angular/core';
import { AddTypeService } from '../addType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-type-start',
  templateUrl: './add-type-start.component.html',
  styleUrls: ['./add-type-start.component.css']
})
export class AddTypeStartComponent implements OnInit {
  addTypeForm: FormGroup;
  constructor(
    private AddTypeService: AddTypeService,
    private showComponentService: ShowComponentService, 
  ) { }


  ngOnInit() {
    this.addTypeForm= new FormGroup({
      'name':new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.AddTypeService.itemTypeAdded.name = this.addTypeForm.value.name;
    this.showComponentService.changeSceneTo("typeAdded");
  }
}
