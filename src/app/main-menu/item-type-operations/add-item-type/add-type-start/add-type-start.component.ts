import { Component, OnInit } from '@angular/core';
import { AddTypeService } from '../addType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-type-start',
  templateUrl: './add-type-start.component.html',
  styleUrls: ['./add-type-start.component.css']
})
export class AddTypeStartComponent implements OnInit {
  addTypeForm: FormGroup;
  nameExistFlag: boolean = false;

  constructor(
    private AddTypeService: AddTypeService,
    private showComponentService: ShowComponentService,
    private http: HttpClient, 
  ) { }


  ngOnInit() {
    this.addTypeForm= new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, []),

    });
  }

  onSubmit() {
    this.AddTypeService.itemTypeAdded.name = this.addTypeForm.value.name;
    this.AddTypeService.itemTypeAdded.description= this.addTypeForm.value.description;
    this.AddTypeService.addItemType();
    this.showComponentService.changeSceneTo("typeAdded");
  }

  onKey(event) {
    this.http.get(
      this.showComponentService.serverPath + '/itemType/isExist/' + event.target.value
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
