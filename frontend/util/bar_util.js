export const fetchAllBars = () => (
  $.ajax({
    url: '/api/bars'
  })
)

export const fetchBar = (barId) => (
  $.ajax({
    url: `/api/bars/${barId}`
  })
)