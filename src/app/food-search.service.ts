import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodSearchResult } from './food-search-result';
import { NutritionData } from './nutrition-data';

// Should fetch app key & id from environment or make this call server-side to hide
const httpOptions = {
  headers: new HttpHeaders({
      'x-app-id': '517c96a2',
      'x-app-key': '9b6421c6caad1655c0ba12dfbae8a2fa',
      'x-remote-user-id': '0'
  })
};

const instantBaseUrl = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
const commonBaseUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
const brandedBaseUrl = 'https://trackapi.nutritionix.com/v2/search/item?nix_item_id=';

@Injectable({
  providedIn: 'root'
})

export class FoodSearchService {

  constructor(private httpClient: HttpClient) { }

  //Returns FoodSearchResult object for autocompletion for search bar
  search(query: string) {
    return this.httpClient.get<FoodSearchResult>(instantBaseUrl + query, httpOptions);
  }

  //Returns nutrition for food result given
  getNutrition(name: string, nix_id: string) {
    //Food from common array chosen
    if (nix_id === '') {
      return this.httpClient.post<NutritionData>(
        commonBaseUrl, { query: name } ,httpOptions);
    }
    //Branded food item
    else {
      return this.httpClient.get<NutritionData>(brandedBaseUrl + nix_id, httpOptions);
    }

  }
}
