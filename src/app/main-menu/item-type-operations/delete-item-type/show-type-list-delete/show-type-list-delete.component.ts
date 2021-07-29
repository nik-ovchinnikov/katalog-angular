import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteTypeService } from '../deleteType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { Storage } from 'src/app/shared/storage.model';
import { NgForm } from '@angular/forms';
import { ItemType } from 'src/app/shared/itemType.model';

@Component({
  selector: 'app-show-type-list-delete',
  templateUrl: './show-type-list-delete.component.html',
  styleUrls: ['./show-type-list-delete.component.css']
})
export class ShowTypeListDeleteComponent implements OnInit {

  constructor(
    private showComponentSercvice: ShowComponentService,
    private deleteTypeService: DeleteTypeService
  ) { }

  ngOnInit(): void {
  }

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
    this.deleteTypeService.deletedType.name = this.choosePlaceForm.value.placeToChange;
    //!! Тут обращение к серверу, удаление места из таблицы
    this.showComponentSercvice.changeSceneTo('typeDeleted');
  }
}
