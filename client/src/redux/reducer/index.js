import {    GET_ALL_COUNTRIES, 
            GET_COUNTRY,
            GET_COUNTRY_ID,
            GET_ACTIVITY,
            POST_ACTIVITY,
            FILTER_BY_CONTINENT,
            SORT_BY_LETTER,
        } from "../actions/index";

const initialState = {
    activities: [],
    Allactivity:[],
    allcountries: [],
    countries: [],
    detail:[]
}


function rootReducer (state = initialState, action) {
    switch (action.type) {
    
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allcountries: action.payload,
                countries: action.payload
            };

        case GET_COUNTRY_ID:
            return{
                ...state,
                detail: action.payload[0]
            };

        case GET_COUNTRY:
            return{
                ...state,
                countries: action.payload
            };

        case GET_ACTIVITY:
            return{
                ...state,
                activities: action.payload
            }

        case POST_ACTIVITY:
            return{
                ...state,
            }

        case FILTER_BY_CONTINENT:
            const filterByContinent = state.allcountries
            const stateCountries = action.payload === 'All' ?
            filterByContinent :
            filterByContinent.filter(el => el.continent === action.payload)
            return{
                ...state,
                countries: stateCountries
            };
            
        case SORT_BY_LETTER:
            let sortLetter = action.payload === 'asc' ?
            state.countries.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (b.name > a.name) {
                    return -1
                } else {
                    return 0
                }
            }) : 
            state.countries.sort((a, b) => {
                if (a.name > b.name) {
                    return -1
                } else if (b.name > a.name) {
                    return 1
                } else {
                    return 0
                }
            })
            return {
                ...state,
                allcountries:sortLetter,
                countries: sortLetter
            };

        default:
            return {
                ...state
            }
    }
}
export default rootReducer;