import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowAllTypeItemsService } from '../showAllTypeItems.service';
import { ItemType } from 'src/app/shared/itemType.model';
import { NgForm } from '@angular/forms';
import { ShowComponentService } from 'src/app/showComponent.service';

@Component({
  selector: 'app-choose-types',
  templateUrl: './choose-types.component.html',
  styleUrls: ['./choose-types.component.css']
})
export class ChooseTypesComponent implements OnInit {

  constructor(
    private showComponentService: ShowComponentService,
    private showAllTypeItemsService: ShowAllTypeItemsService    
  ) { }

  ngOnInit(): void {
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
  chooseTypesForm: NgForm;


  onSubmit() {
    this.showAllTypeItemsService.chosenType.name = this.chooseTypesForm.value.typeToChange;
    
    //Далее запрос на сервер в службе
    this.showComponentService.changeSceneTo('typeItemsShown');

  }
}
