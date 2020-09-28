import * as c from './../actions/ActionTypes';

export default function reducer(state, action) {
  switch(action.type){
    case c.ADD_DRINK:
      const newDrink = [...state.drinks, action.drink];
      return { drinks: newDrink };
    case c.RESET_STATE:
      return { drinks: [] };
    default:
      throw new Error('The reducer returned an error');
  }
}