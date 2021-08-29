import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeItemTypeService } from '../changeItemType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-type-info',
  templateUrl: './change-type-info.component.html',
  styleUrls: ['./change-type-info.component.css']
})
export class ChangeTypeInfoComponent implements OnInit {
  changeTypeForm: FormGroup;
  nameExistFlag: boolean = false;
  

  constructor( 
    public changeItemTypeService: ChangeItemTypeService,
    private showComponentService: ShowComponentService,
    private http: HttpClient,
    ) { }
  
  ngOnInit(): void {
    this.changeTypeForm= new FormGroup({
      'name': new FormControl(this.changeItemTypeService.oldItemTypeInfo.name, [Validators.required]),
      'description': new FormControl(this.changeItemTypeService.oldItemTypeInfo.description, []),

    });
  }


  onSubmit() {
    this.changeItemTypeService.newItemTypeInfo.name = this.changeTypeForm.value.name;
    this.changeItemTypeService.newItemTypeInfo.description = this.changeTypeForm.value.description;
    this.changeItemTypeService.newItemTypeInfo.id= this.changeItemTypeService.oldItemTypeInfo.id;

    this.changeItemTypeService.updateItemType();
    this.showComponentService.changeSceneTo('typeChanged'); 
  }

  onKey(event) {
    this.http.get(
      this.showComponentService.serverPath + '/itemType/isExist/' + event.target.value
    ).subscribe(responseData => { 
      console.log(this.changeItemTypeService.oldItemTypeInfo.name);
      //понятия не имею, почему не передавалось присваиванием
      if(
        (responseData == true) &&
        (event.target.value != this.changeItemTypeService.oldItemTypeInfo.name)
        ) {
        this.nameExistFlag = true;
      }else {
        this.nameExistFlag = false;
      }
    });
  }
}
