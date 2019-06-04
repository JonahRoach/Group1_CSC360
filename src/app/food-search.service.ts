import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Should fetch app key & id from environment or make this call server-side to hide
const httpOptions = {
  headers: new HttpHeaders({
      'x-app-id': '',
      'x-app-key': '',
      'x-remote-user-id': '0'
  })
};

const baseUrl = 'https://trackapi.nutritionix.com/v2/search/instant?query=';

@Injectable({
  providedIn: 'root'
})

export class FoodSearchService {

  constructor(private httpClient: HttpClient) { }

  search(query: string) {
    this.httpClient.get(baseUrl + 'query', httpOptions).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
