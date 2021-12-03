import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSistrix, FaChevronCircleRight } from 'react-icons/fa';
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

  const searchCountry = (e) => {
    e.preventDefault();
    const id = document.getElementById('input').value;
    navigate('/details');
    dispatch(fetchCountryStats(id));
  };

  const dataArray = useSelector((state) => state.homeReducer.data);

  const countries = dataArray.map((country) => (
    <div className="country-card" key={country.id}>
      <img src={country.flag} alt="flag" />
      <div>
        <p>
          Country:
          {country.name}
        </p>
        <p>
          Population:
          {country.population}
        </p>
        <button type="button" id={country.name} onClick={pageChange}>
          <FaChevronCircleRight onClick={pageChange} />
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <form className="form">
        <input placeholder="Search By Country Name" id="input" />
        <button type="submit" onClick={searchCountry}>
          <FaSistrix />
        </button>
      </form>
      <div className="country-container">
        {countries}
      </div>
    </div>
  );
}
