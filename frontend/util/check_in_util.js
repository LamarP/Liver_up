

export const fetchCheckIns = () => (
  $.ajax({
    method: 'GET',
    url: '/api/check_ins'
  })
);

export const fetchCheckIn = (checkinId) => (
  $.ajax({
    method: 'GET',
    url: `/api/check_ins/${checkinId}`
  })
);

export const createCheckIn = (checkin) => (
  $.ajax({
    method: 'POST',
    url: `/api/check_ins`,
    data: checkin,
    contentType: false,
    processData: false
  })
);

export const deleteCheckIn = (checkinId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/check_ins/${checkinId}`
  })
);