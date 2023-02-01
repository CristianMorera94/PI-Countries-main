import axios from 'axios';

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";

export const GET_ACTIVITY = "GET_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";

export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const FILTER_BY_ACTIVITY="FILTER_BY_ACTIVITY";
export const SORT_BY_POPULATION="SORT_BY_POPULATION";

export function getAllCountries(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/country');
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: json.data
        })
    }
}

export function getCountry(name) {
    return async function (dispatch) {
        try{
            var json = await axios.get(`http://localhost:3001/country?name=${name}`);
            return dispatch({
                type: GET_COUNTRY,
                payload: json.data
            })
        }
        catch (error){
            alert("country not found")
        }
    }
    
}

export function getCountryId(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/country/${id}`);
            return dispatch({
                type:GET_COUNTRY_ID,
                payload: json.data
            })
        } catch (error){
            console.log(error);
        }
    }
}

export function getAction() {
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/activity/`);
        return dispatch({
            type: GET_ACTIVITY,
            payload: json.data
        })
    }
}

export function postAction(payload) {
    return async function (dispatch){
        var json = await axios.post(`http://localhost:3001/activity/`, payload);
        return json;

    }
}

export function filterByContinent(payload){
    return{
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterByActivity(payload){
    return {
        type: "FILTER_BY_ACTIVITY",
        payload: payload,
    }
};

export function sortByName (payload){
    return{
        type: SORT_BY_NAME,
        payload
    }
}

export function sortByPopulation (payload){
    return{
        type: "SORT_BY_POPULATION",
        payload
    }
}