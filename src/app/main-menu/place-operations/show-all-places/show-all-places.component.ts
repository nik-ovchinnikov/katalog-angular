import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Storage } from '../../../shared/storage.model'
@Component({
  selector: 'app-show-all-places',
  templateUrl: './show-all-places.component.html',
  styleUrls: ['./show-all-places.component.css']
})
export class ShowAllPlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
//!! Тут запрос в базу
  places: Storage[] = [
    new Storage('Ризница'),
    new Storage('Клирос Знаменского Храма'),
    new Storage('Алтарь Спасского собора'),
  ];
}
