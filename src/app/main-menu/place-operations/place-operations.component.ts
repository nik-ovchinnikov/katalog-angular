import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GetStorageByIdService } from './getStorageById.service';

@Component({
  selector: 'app-place-operations',
  templateUrl: './place-operations.component.html',
  styleUrls: ['./place-operations.component.css'],
  providers: [GetStorageByIdService]
})
export class PlaceOperationsComponent implements OnInit {


  ngOnInit(): void {
  }

}
