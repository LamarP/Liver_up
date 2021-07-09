import * as CheckInAPIUtil from '../util/check_in_util'
//action constants
export const RECEIVE_CHECKINS = 'RECEIVE_CHECKINS';
// export const RECEIVE_ALL = 'RECEIVE_ALL';
export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const REMOVE_CHECKIN = 'REMOVE_CHECKIN';
export const RECEIVE_CHECKIN_ERRORS = "RECEIVE_CHECKIN_ERRORS";

// const receiveAll = (all)=>({
//     type: RECEIVE_ALL,
//     all
// })
const receiveCheckIns = (checkIns)=>({
    type: RECEIVE_CHECKINS,
    checkIns
})
const receiveCheckIn = checkIn => ({
  type: RECEIVE_CHECKIN,
  checkIn
})
const removeCheckIn = checkIn => ({
  type: REMOVE_CHECKIN,
  checkIn
})

export const fetchCheckIns = () => dispatch =>(
    CheckInAPIUtil.fetchCheckIns()
    .then(checkIns => dispatch(receiveCheckIns(checkIns)))
)

export const fetchCheckIn = checkInId => dispatch(
  CheckInAPIUtil.fetchCheckIn(checkInId)
  .then(checkIn => dispatch(receiveCheckIn(checkIn)))
)


export const createCheckIn = checkIn => dispatch =>(
    CheckInAPIUtil.createCheckIn(checkIn)
    .then(checkIn => dispatch(receiveCheckIn(checkIn)))
)

export const deleteCheckIn = checkInId => dispatch =>(
    CheckInAPIUtil.deleteCheckIn(checkInId)
    .then(() => dispatch(removeCheckIn(checkInId)))
)