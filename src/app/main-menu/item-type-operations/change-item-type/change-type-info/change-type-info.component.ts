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

  @ViewChild('f', { static: false })
  editItemTypeForm: NgForm;

  constructor(
    private changeItemTypeService: ChangeItemTypeService,
    private showComponentService: ShowComponentService,
    ) { }
  
  ngOnInit(): void {
  }


  onSubmit() {
    this.changeItemTypeService.getNewItemType(this.editItemTypeForm.value);
    this.changeItemTypeService.updateItemType();
    this.showComponentService.changeSceneTo('typeChanged'); 
  }
}
