import {SET_WORDS} from "../types/words";

const initialState = []

 export default function words(state = initialState, action) {
    switch (action.type) {
        case SET_WORDS:
            return action.payload.words.sort( (a,b) => b.points - a.points);
        default:
            return state;
    }
}