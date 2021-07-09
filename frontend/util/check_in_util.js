export const fetchCheckIns = () => {
  return $.ajax({
      method: "GET",
      url: "/api/check_ins"
  });
};

export const fetchCheckIn = checkinId => {
  return $.ajax({
      method: "GET",
      url: `/api/check_ins/${checkinId}`
  });
};

export const createCheckIn = checkin => {
  console.log(checkin);
  return $.ajax({
      method: "POST",
      url: "/api/check_ins",
    data: {checkin},

  });
};


// export const updateCheckIn = checkin => {
//   return $.ajax({
//       method: "PATCH",
//       url: `/api/check_ins/${checkin.id}`,
//       data: { checkin }
//   });
// };

// export const deleteCheckIn = checkinId => {
//   return $.ajax({
//       method: "DELETE",
//       url: `/api/check_ins/${checkinId}`
//   });
// };