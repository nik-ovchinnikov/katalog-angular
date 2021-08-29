import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShowComponentService } from '../showComponent.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private showComponentService: ShowComponentService) { }

  ngOnInit(): void {
    document.addEventListener("keydown", this.blockEnter);
  }

  //Исправляет ошибку. ПРи нажатии на Enter в input нажималась соседняя кнопка
  blockEnter(event){
    
    if(event.key == "Enter") {
      console.log("enter");
      event.preventDefault();
    }
  }

}
