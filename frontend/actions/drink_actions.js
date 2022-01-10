import * as DrinkAPIUtil from '../util/drink_util';

export const RECEIVE_ALL_DRINKS = 'RECEIVE_ALL_DRINKS';
export const RECEIVE_DRINK = 'RECEIVE_DRINK';
export const START_LOADING_ALL_DRINKS = 'START_LOADING_ALL_DRINKS';
export const START_LOADING_DRINK = 'START_LOADING_DRINK';

export const receiveAllDrinks = drinks => ({
  type: RECEIVE_ALL_DRINKS,
  drinks
})

export const receiveDrink = payload => ({
  type: RECEIVE_DRINK,
  payload
})

export const startLoadingAllDrinks = () => ({
  type: START_LOADING_ALL_DRINKS
});

export const startLoadingDrink = () => ({
  type: START_LOADING_DRINK
});

export const fetchAllDrinks = () => dispatch => {
  dispatch(startLoadingAllDrinks());
  return DrinkAPIUtil.fetchAllDrinks()
    .then(drinks => dispatch(receiveAllDrinks(drinks)))
}

export const fetchDrink = drink_id => dispatch => {
  dispatch(startLoadingDrink(drink_id));
  return DrinkAPIUtil.fetchDrink(drink_id)
  .then(payload => dispatch(receiveDrink(payload)))
}



