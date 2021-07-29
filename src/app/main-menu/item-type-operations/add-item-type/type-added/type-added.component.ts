import { Component, OnInit } from '@angular/core';
import { AddTypeService } from '../addType.service';

@Component({
  selector: 'app-type-added',
  templateUrl: './type-added.component.html',
  styleUrls: ['./type-added.component.css']
})
export class TypeAddedComponent implements OnInit {

  constructor(
    private addTypeService: AddTypeService
  ) { }

  ngOnInit(): void {
  }

}
