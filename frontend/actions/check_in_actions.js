import * as CheckInAPIUtil from '../util/check_in_util'

export const RECEIVE_CHECK_INS = 'RECEIVE_CHECK_INS'
export const RECEIVE_ALL = 'RECEIVE_ALL'

const receiveAll = (all)=>({
    type: RECEIVE_ALL,
    all
})
const receiveCheckIns = (checkIns)=>({
    type: RECEIVE_CHECK_INS,
    checkIns
})

export const fetchAllCheckIns = userIds => dispatch =>(
    CheckInAPIUtil.fetchAllCheckIns(userIds)
    .then(checkIns => dispatch(receiveCheckIns(checkIns)))
)

export const createCheckIn = checkIn => dispatch =>(
    CheckInAPIUtil.createCheckIn(checkIn)
    .then(all => dispatch(receiveAll(all)))
)

export const deleteCheckIn = checkInId => dispatch =>(
    CheckInAPIUtil.deleteCheckIn(checkInId)
    .then(all => dispatch(receiveAll(all)))
)