import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AddTypeService } from './addType.service';

@Component({
  selector: 'app-add-item-type',
  templateUrl: './add-item-type.component.html',
  styleUrls: ['./add-item-type.component.css'],
  providers: [AddTypeService]
})
export class AddItemTypeComponent implements OnInit {

  constructor(
    private AddTypeService: AddTypeService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
    this.mainMenuBtn = document.querySelector('.to-main-menu');
    this.mainMenuBtn.addEventListener('click', () => {
      this.mainMenuEmitter.emit('mainMenu');
    });
  }

  mainMenuBtn;
  @Output()
  mainMenuEmitter = new EventEmitter<string>();

}
