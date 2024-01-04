import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
apiurl="http://localhost:3000/users";

  constructor(private http:HttpClient) { }




// get all data observe
  getAllUser():Observable<any>{
    return this.http.get(`${this.apiurl}`);
  }




// create data

createData(data:any):Observable<any>{
  console.log(data,"Data Created")
 return this.http.post(`${this.apiurl}`,data);
}


// delete data

deleteData(Id:any):Observable<any>{
  let ids=Id;
  return this.http.delete(`${this.apiurl}/${ids}`);
}


}
