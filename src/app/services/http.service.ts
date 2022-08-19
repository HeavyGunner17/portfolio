import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(url)
  
  }
  editData(url: string, object:any){
    return this.http.post<any>(url, object).subscribe(data =>{
      console.log(data, 'http service data')
    })
  }

  deleteData(url:string){
    return this.http.delete<any>(url).subscribe(data => {
      console.log(data)
    })
  }
}