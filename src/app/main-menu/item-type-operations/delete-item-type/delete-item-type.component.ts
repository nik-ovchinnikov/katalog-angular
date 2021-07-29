import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeleteTypeService } from './deleteType.service';

@Component({
  selector: 'app-delete-item-type',
  templateUrl: './delete-item-type.component.html',
  styleUrls: ['./delete-item-type.component.css'],
  providers: [DeleteTypeService]
})
export class DeleteItemTypeComponent implements OnInit {

  constructor(
    private deleteTypeService: DeleteTypeService
  ) { }

  ngOnInit(): void {
  }
}
