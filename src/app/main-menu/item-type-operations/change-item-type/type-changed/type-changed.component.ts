import { Component, OnInit } from '@angular/core';
import { ChangeItemTypeService } from '../changeItemType.service';

@Component({
  selector: 'app-type-changed',
  templateUrl: './type-changed.component.html',
  styleUrls: ['./type-changed.component.css']
})
export class TypeChangedComponent implements OnInit {

  constructor(
    private changeItemTypeService: ChangeItemTypeService
  ) { }
  
  ngOnInit(): void {
  }

}
