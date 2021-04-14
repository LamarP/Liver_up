import * as DrinkAPIUtil from '../util/drink_util';

export const RECEIVE_ALL_DRINKS = 'RECEIVE_ALL_DRINKS';
export const RECEIVE_DRINK = 'RECEIVE_DRINK';


export const receiveAllDrinks = drinks => ({
  type: RECEIVE_ALL_DRINKS,
  drinks
})

export const receiveDrink = drink => ({
  type: RECEIVE_DRINK,
  drink
})


export const fetchAllDrinks = () => dispatch =>(
    DrinkAPIUtil.fetchAllDrinks()
    .then(drinks => dispatch(receiveAllDrinks(drinks)))
)

export const fetchDrink = drink_id => dispatch =>(
    DrinkAPIUtil.fetchDrink(drink_id)
    .then(drink => dispatch(receiveDrink(drink)))
)



