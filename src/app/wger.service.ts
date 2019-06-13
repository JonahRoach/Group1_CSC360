import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
	  headers: new HttpHeaders({
		'Authorization': 'Token 52c207ccf837c8366cb4d29569ba3b3cc7a53fb1'
	  })
};

@Injectable({
  providedIn: 'root'
})
export class WgerService {
  URL = 'https://wger.de/api/v2/';
  EURL = 'https://wger.de/api/v2/exerciseinfo/?page='
  
  constructor(private http: HttpClient) { }
  
  get(target: String) {
    return this.http.get(this.URL + target + '/', httpOptions);
  }
  
  getExercise(pNum: Number){
	return this.http.get(this.EURL + pNum.toString());  
  }
  
  getNext(uString: string){
	return this.http.get(uString);  
  }
}
