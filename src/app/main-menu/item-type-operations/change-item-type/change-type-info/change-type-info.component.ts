import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeItemTypeService } from '../changeItemType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-type-info',
  templateUrl: './change-type-info.component.html',
  styleUrls: ['./change-type-info.component.css']
})
export class ChangeTypeInfoComponent implements OnInit {


  constructor(
    private changeItemTypeService: ChangeItemTypeService,
    private showComponentService: ShowComponentService,
    ) { }
  
  ngOnInit(): void {
  }

  @ViewChild('f', { static: false })
  editPlaceForm: NgForm;


  onSubmit() {
    //!!тут будет запись в базу данных
    this.changeItemTypeService.newItemTypeInfo.name = this.editPlaceForm.value.editedPlaceName;
    this.showComponentService.changeSceneTo('typeChanged');
  }
}
