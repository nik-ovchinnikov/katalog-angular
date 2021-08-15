import { Injectable } from '@angular/core';
import { ShowComponentService } from './showComponent.service';

@Injectable()
export class Button {

   

    constructor(private showComponentService: ShowComponentService) {}
    onClickNvigationEL(){
        document.querySelectorAll('.btn-scope').forEach((btn) => {
            btn.addEventListener('click', () => {
                this.showComponentService.changeSceneTo(btn.id);
            });
        });
    }

    //на группу кнопок для перехода на конкретную страницу
    onClickNvigation(selector: string, nextComponent: string){
        document.querySelectorAll(selector).forEach((btn) => {
            btn.addEventListener('click', () => {
                this.showComponentService.changeSceneTo(nextComponent);
            });
        });
    }
}