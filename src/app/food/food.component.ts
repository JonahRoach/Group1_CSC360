import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from '../food-search.service';
import { FoodSearchResult } from '../food-search-result';
import { NutritionData } from '../nutrition-data';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  keyword = 'food_name';
  data: Array<any> = [];
  result: FoodSearchResult;
  fullList: Array<any> = [];
  nutritionData: NutritionData;
  

  constructor(
    private foodSearchService: FoodSearchService) { }

  ngOnInit() {
  }

  // Populate data (Our autocomplete list) with result of http request
  giveSuggestions() {
    this.fullList = [];

    this.result.branded.forEach(element => {
      this.fullList.push(element);
    });
    this.result.common.forEach(element => {
      this.fullList.push(element);
    });

    // this.data = this.fullList.filter((item, pos, ar) => {
    //     if (ar.indexOf(item.tag_name) === pos)
    //       return item;
    // });
    
    this.data = this.fullList;
  }

  selectEvent(item) {
    console.log(item);

    if (item.nix_item_id === undefined) {
      item.nix_item_id = '';
    }

      this.foodSearchService.getNutrition(item.food_name, item.nix_item_id)
        .subscribe(response => {
          this.nutritionData = response;
          console.log(this.nutritionData);
        });
  }

  onChangeSearch(val: string) {
    if (val.length > 2) {
      this.foodSearchService.search(val)
        .subscribe(
          response => {
            this.result = response;
            this.giveSuggestions();
          }
        );
    }
    else {
      this.data = [];
    }
  }

  onFocused(e) {
    // do something when input is focused
  }

}

