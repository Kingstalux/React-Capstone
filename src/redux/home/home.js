const FETCH_DATA_BEGIN = 'react-capstone/home/FETCH_DATA_BEGIN';
const FETCH_DATA_SUCCESS = 'react-capstone/home/FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'react-capstone/home/FETCH_DATA_FAILURE';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
});

const url = 'https://disease.sh/v3/covid-19/countries';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchData() {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    return fetch(url)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        const data = [];
        json.forEach((element) => {
          const country = {
            id: element.country,
            name: element.country,
            population: element.population,
            flag: element.countryInfo.flag,
          };
          data.push(country);
        });
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_DATA_FAILURE:
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

export default homeReducer;
