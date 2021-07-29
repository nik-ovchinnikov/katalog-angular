import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeItemTypeService } from '../changeItemType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { Storage } from 'src/app/shared/storage.model';
import { NgForm } from '@angular/forms';
import { ItemType } from 'src/app/shared/itemType.model';

@Component({
  selector: 'app-show-type-list',
  templateUrl: './show-type-list.component.html',
  styleUrls: ['./show-type-list.component.css']
})
export class ShowTypeListComponent implements OnInit {


  constructor(
    private changeItemTypeService: ChangeItemTypeService,
    private showComponentService: ShowComponentService
  ) { }
  

  ngOnInit(){
  }


  //!! Это запрос к серверу
  types: ItemType[] = [
    new ItemType("Крест напрестольный"),
    new ItemType("Евангелие напрестольное"),
    new ItemType("Евангелие требное"),
    new ItemType("Крест требный"),
    new ItemType("Дарохранительница"),
  ]
  
  @ViewChild('f', { static: false })
  choosePlaceForm: NgForm;


  onSubmit() {
    this.changeItemTypeService.oldItemTypeInfo.name = this.choosePlaceForm.value.placeToChange;
    this.showComponentService.changeSceneTo('changeTypeInfo');

  }
}
