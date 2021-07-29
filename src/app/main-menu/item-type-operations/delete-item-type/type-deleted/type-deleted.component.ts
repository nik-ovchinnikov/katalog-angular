import { Component, OnInit } from '@angular/core';
import { DeleteTypeService } from '../deleteType.service';

@Component({
  selector: 'app-type-deleted',
  templateUrl: './type-deleted.component.html',
  styleUrls: ['./type-deleted.component.css']
})
export class TypeDeletedComponent implements OnInit {

  constructor(
    private deleteTypeService: DeleteTypeService
  ) { }

  ngOnInit(): void {
  }

}
