import * as c from './ActionTypes';

export const addDrink = (drink) => ({
  type: c.ADD_DRINK,
  drink
});

export const resetState = () => ({
  type: c.RESET_STATE
});