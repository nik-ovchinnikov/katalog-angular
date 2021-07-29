import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowAllPlaceItemsService } from '../showAllPlaceItems.service';
import { NgForm } from '@angular/forms';
import { Storage } from 'src/app/shared/storage.model';
import { ShowComponentService } from 'src/app/showComponent.service';

@Component({
  selector: 'app-chose-place',
  templateUrl: './chose-place.component.html',
  styleUrls: ['./chose-place.component.css']
})
export class ChosePlaceComponent implements OnInit {


  constructor(private showComponentSercvice: ShowComponentService,
              public showAllPlaceItemsService: ShowAllPlaceItemsService
  ) { }

  ngOnInit(): void {
  }
 //!! ЭТо запрос в БД 
  places: Storage[] = [
    new Storage('Ризница'),
    new Storage('Клирос Знаменского Храма'),
    new Storage('Алтарь Спасского собора'),
  ];

  @ViewChild('f', { static: false })
  choosePlaceForm: NgForm;


  onSubmit() {
    this.showAllPlaceItemsService.chosenStorage.name = this.choosePlaceForm.value.placeToChange;
    //!! Тут обращение к серверу, выборка предметов данной категории
    this.showComponentSercvice.changeSceneTo('placeItemsShown');
  }
}
