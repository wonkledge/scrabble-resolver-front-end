import {ACCESS_DENIED, API, API_END, API_ERROR, API_START} from "../types/api";

export const apiAction = (
    {
        url = "",
        method = "GET",
        data = null,
        onSuccess = () => ({}),
        onFailure = () => ({}),
        label = ""
    }) => (
    {
        type: API,
        payload: {
            url,
            method ,
            data,
            onSuccess,
            onFailure,
            label
        }
});

export const apiEnd = label => ({
    type: API_END,
    payload: label
});

export const apiStart = label => ({
    type: API_START,
    payload: label
});

export const apiError = label => ({
    type: API_ERROR,
    payload: label
});

export const accessDenied = label => ({
    type: ACCESS_DENIED,
    payload: label
});
