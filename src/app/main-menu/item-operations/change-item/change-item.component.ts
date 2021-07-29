import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ChangeItemInfoService } from './changeItemInfo.service';

@Component({
  selector: 'app-change-item',
  templateUrl: './change-item.component.html',
  styleUrls: ['./change-item.component.css'],
  providers: [ChangeItemInfoService]
})
export class ChangeItemComponent implements OnInit {

  constructor(private changeItemInfoService: ChangeItemInfoService) { }

  ngOnInit(): void {
  }


}
