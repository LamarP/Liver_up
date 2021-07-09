import * as BarAPIUtil from '../util/bar_util';


export const RECEIVE_ALL_BARS = 'RECEIVE_ALL_BARS';
export const RECEIVE_BAR = 'RECEIVE_BAR';


const receiveAllBars = (bars)=>({
    type: RECEIVE_ALL_BARS,
    bars
})

const receiveBar = (bar)=>({
    type: RECEIVE_BAR,
    bar
})

export const fetchAllBars = () => dispatch =>(
    BarAPIUtil.fetchAllBars ()
    .then(bars => dispatch(receiveAllBars(bars)))
)

export const fetchBar = barId => dispatch =>(
    BarAPIUtil.fetchBar(barId)
    .then(bar => dispatch(receiveBar(bar)))
)