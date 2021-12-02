import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../redux/home/home';
import { fetchCountryStats } from '../redux/details/details';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const url = 'https://disease.sh/v3/covid-19/countries/Cameroon';

  // const getData = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // };

  useEffect(() => {
    dispatch(fetchData());
    // getData();
  }, []);

  const pageChange = (e) => {
    navigate('/details');
    dispatch(fetchCountryStats(e.target.id));
  };

  // const submitSearch = () => {
  //   window.location.href = '/details';
  // };

  const dataArray = useSelector((state) => state.homeReducer.data);

  const countries = dataArray.map((country) => (
    <div className="country-card" key={country.id}>
      <img src={country.flag} alt="flag" />
      <p>
        Name:
        {country.name}
      </p>
      <p>
        Population:
        {country.population}
      </p>
      <button type="button" id={country.name} onClick={pageChange}>Details</button>
    </div>
  ));

  return (
    <div>
      <h2>COVID-19 World Wide Stats</h2>
      <form>
        <input placeholder="country name" />
        <button type="button" onClick={pageChange}>Search</button>
      </form>
      {countries}
    </div>
  );
}
