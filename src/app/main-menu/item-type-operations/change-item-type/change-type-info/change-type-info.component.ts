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
    private changeItemTypeService: ChangeItemTypeService,
    private showComponentService: ShowComponentService,
    private http: HttpClient,
    ) { }
  
  ngOnInit(): void {
    this.changeTypeForm= new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, []),

    });
  }


  onSubmit() {
    this.changeItemTypeService.newItemTypeInfo.name = this.changeTypeForm.value.name;
    this.changeItemTypeService.newItemTypeInfo.description = this.changeTypeForm.value.description;
    this.changeItemTypeService.updateItemType();
    this.showComponentService.changeSceneTo('typeChanged'); 
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
