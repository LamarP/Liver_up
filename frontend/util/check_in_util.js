export const fetchAllCheckins = () => {
  return $.ajax({
      method: "GET",
      url: "/api/check_ins"
  });
};

export const fetchCheckin = checkinId => {
  return $.ajax({
      method: "GET",
      url: `/api/check_ins/${checkinId}`
  });
};

export const createCheckin = checkin => {
  return $.ajax({
      method: "POST",
      url: "/api/check_ins",
      data: {checkin},
  });
};

export const updateCheckin = checkin => {
  return $.ajax({
      method: "PATCH",
      url: `/api/check_ins/${checkin.id}`,
      data: { checkin }
  });
};

export const deleteCheckin = checkinId => {
  return $.ajax({
      method: "DELETE",
      url: `/api/check_ins/${checkinId}`
  });
};