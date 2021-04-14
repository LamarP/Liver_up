export const selectAllDrinks = (state) => {
  return Object.values(state.entities.drinks)
}