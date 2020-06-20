import {apiAction} from "./api";
import {FIND_WORDS, SET_WORDS} from "../types/words";

export const findWords = (hand) => apiAction({
    url: `http://localhost:8080/find?hand=${hand}`,
    onSuccess: (words) => setHand(words),
    onFailure: () => setHand([]),
    label: FIND_WORDS
});

const setHand = (words) => ({
  type: SET_WORDS,
  payload: words
})