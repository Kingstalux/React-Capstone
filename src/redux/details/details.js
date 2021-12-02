const FETCH_COUNTRY_STATS_BEGIN = 'react-capstone/home/FETCH_COUNTRY_STATS_BEGIN';
const FETCH_COUNTRY_STATS_SUCCESS = 'react-capstone/home/FETCH_COUNTRY_STATS_SUCCESS';
const FETCH_COUNTRY_STATS_FAILURE = 'react-capstone/home/FETCH_COUNTRY_STATS_FAILURE';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchCountryStatsBegin = () => ({
  type: FETCH_COUNTRY_STATS_BEGIN,
});

const fetchCountryStatsSuccess = (payload) => ({
  type: FETCH_COUNTRY_STATS_SUCCESS,
  payload,
});

const fetchCountryStatsFailure = (error) => ({
  type: FETCH_COUNTRY_STATS_FAILURE,
  payload: { error },
});

const url = 'https://disease.sh/v3/covid-19/countries/';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchCountryStats(payload) {
  return (dispatch) => {
    dispatch(fetchCountryStatsBegin());
    return fetch(url + payload)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        const data = [];
        const countryStats = {
          name: json.country,
          cases: json.active,
          deaths: json.deaths,
          flag: json.countryInfo.flag,
          recovered: json.recovered,
          todayCases: json.todayCases,
          todayDeaths: json.todayDeaths,
          todayRecovered: json.todayRecovered,
        };
        data.push(countryStats);
        dispatch(fetchCountryStatsSuccess(data));
      })
      .catch((error) => dispatch(fetchCountryStatsFailure(error)));
  };
}

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_STATS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COUNTRY_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_COUNTRY_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };

    default:
      return state;
  }
};

export default detailsReducer;
