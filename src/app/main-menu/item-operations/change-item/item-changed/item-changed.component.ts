import { Component, OnInit } from '@angular/core';
import { ChangeItemInfoService } from '../changeItemInfo.service';

@Component({
  selector: 'app-item-changed',
  templateUrl: './item-changed.component.html',
  styleUrls: ['./item-changed.component.css']
})
export class ItemChangedComponent implements OnInit {

  constructor(
    public changeItemInfoService: ChangeItemInfoService
  ){}

  ngOnInit(): void {
  }

}
