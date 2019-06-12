export interface FoodSearchResult {
    'branded': [
        {
            'food_name': string,
            'photo': {
                'thumb': string
            }
            'nix_item_id': string
        }
    ],
    'common': [
        {
            'food_name': string,
            'photo': {
                'thumb': string;
            }
        }
    ]
}