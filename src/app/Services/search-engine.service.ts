import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {

  public  apiURL = '';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file:any):Observable<any> {
      const formData = new FormData(); 
      formData.append("referenceImage", file, file.name); // Store form name as "file" with file data
      return this.http.post(this.apiURL, formData)
  }
}
