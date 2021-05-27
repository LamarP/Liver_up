export const selectDrink = ({ drinks }, drinkId) => {
  return drinks[drinkId] || { checkInIds: [] };
};

export const selectCheckInsForDrink = ({ drinks, checkIns }, drink) => {
  return drink.checkInIds.map(checkInId => checkIns[checkInId]);
};

export const asArray = ({ drinks }) => (
  Object.keys(drinks).map(key => drinks[key])
);