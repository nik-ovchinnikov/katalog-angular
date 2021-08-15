import { HttpClient } from '@angular/common/http';
import { Storage } from 'src/app/shared/storage.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GetStorageByIdService {
    constructor (private http: HttpClient) {}
    
    public storage: Storage = new Storage();

    public getStorage(id: number) {
        this.http.get(
            'http://localhost:8080/storage/getById/' + id.toString(),
        ).subscribe(responseData => {
           this.storage.name= responseData["name"]; 
           this.storage.description= responseData["description"]; 
           console.log(this.storage);
        });
    }
    
}