import { HttpClient } from '@angular/common/http';
import { Storage } from 'src/app/shared/storage.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class GetStorageByIdService {
    constructor (private http: HttpClient,
        private showComponentService: ShowComponentService
        ) {}
    
    public storage: Storage = new Storage();

    public getStorage(id: number) {
        this.http.get(
            this.showComponentService.serverPath + '/storage/getById/' + id.toString(),
        ).subscribe(responseData => {
           this.storage.name= responseData["name"]; 
           this.storage.description= responseData["description"]; 
           console.log(this.storage);
        });
    }
    
}