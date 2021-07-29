import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { Storage } from '../../../../shared/storage.model'
import { NgForm } from '@angular/forms';
import { ShowComponentService } from 'src/app/showComponent.service';
import { DeletePlaceService } from '../deletePlace.service';
@Component({
  selector: 'app-show-place-list-to-delete',
  templateUrl: './show-place-list-to-delete.component.html',
  styleUrls: ['./show-place-list-to-delete.component.css']
})
export class ShowPlaceListToDeleteComponent implements OnInit {

  constructor(private showComponentSercvice: ShowComponentService,
              private deletePlaceService: DeletePlaceService) { }

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
    this.deletePlaceService.deletedStorage.name = this.choosePlaceForm.value.placeToChange;
    //!! Тут обращение к серверу, удаление места из таблицы
    this.showComponentSercvice.changeSceneTo('placeDeleted');
  }
}
