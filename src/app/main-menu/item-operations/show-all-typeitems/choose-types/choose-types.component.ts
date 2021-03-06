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

  @ViewChild('f', { static: false })
  chooseTypesForm: NgForm;
  types: ItemType[] = [];
  constructor(
    private showComponentService: ShowComponentService,
    private showAllTypeItemsService: ShowAllTypeItemsService    
  ) { }

  ngOnInit(): void { 
    this.types = this.showAllTypeItemsService.getTypeList();
  }


  onSubmit() {
    this.showAllTypeItemsService.chosenType.name = this.chooseTypesForm.value.typeToChange;
    this.showAllTypeItemsService.getTypeItems();
    //Далее запрос на сервер в службе
    this.showComponentService.changeSceneTo('typeItemsShown');

  }
}
