export const fetchAllDrinks = () => (
  $.ajax({
    url: `/api/drinks`
  })
);

export const fetchDrink = drink_id => (
  $.ajax({
    url: `/api/drinks/${drink_id}`,
    method: 'GET'
  })
);