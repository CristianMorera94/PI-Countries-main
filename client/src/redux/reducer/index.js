import {    GET_ALL_COUNTRIES, 
            GET_COUNTRY,
            GET_COUNTRY_ID,
            GET_ACTIVITY,
            POST_ACTIVITY,
            FILTER_BY_CONTINENT,
            FILTER_BY_ACTIVITY,
            SORT_BY_NAME,
            SORT_BY_POPULATION,
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
            const filterByContinent = state.allcountries;
            const stateCountries = action.payload === 'All' ?
            filterByContinent :
            filterByContinent.filter(el => el.continent === action.payload)
            return{
                ...state,
                countries: stateCountries
            };
            
            case FILTER_BY_ACTIVITY:            
            const activities = state.allCountries;
            const countryactivity = action.payload ==="All"? 
            activities.filter(c => c.Activities.length > 0):
            activities.filter(c => c.Activities.find(a => a.name === action.payload));
                return{
                    ...state,
                    countries: countryactivity
                };

        case SORT_BY_NAME:
            let sortedByName = action.payload === 'asc' ?
                state.countries.sort(function(a, b) {
                if(a.name > b.name) {
                    return 1
                } else if (b.name > a.name) {
                    return -1
                } else {
                    return 0
                }}) : 
                state.countries.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1
                } else if (b.name > a.name) {
                    return 1
                } else {
                    return 0
                }}) 
            return {
                ...state,
                countries: sortedByName
            }
            
        case SORT_BY_POPULATION:
            let sortedByPopulation = action.payload === "asc" ? 
                state.countries.sort((a, b) => {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                        return 0;
                    })
                : state.countries.sort((a, b) => {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
                        return 1;
                    }
                        return 0;
                });
                return {
                    ...state,
                    allCountries: sortedByPopulation,
                    countries: sortedByPopulation,
                };

        default:
            return {
                ...state
            }
    }
}
export default rootReducer;