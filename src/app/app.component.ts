import { Component } from '@angular/core';
import { ShowComponentService } from './showComponent.service';
import { Button } from './button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.buttonService.onClickNvigationEL();
  }

  constructor(public showComponentService: ShowComponentService,
              public buttonService: Button){}
  
}
