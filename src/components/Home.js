import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/home/home';

export default function Home() {
  const dispatch = useDispatch();

  // const url = 'https://covid-api.mmediagroup.fr/v1/cases?continent=africa';
  // const url = 'https://countriesnow.space/api/v0.1/countries/flag/images';
  // const url = 'https://disease.sh/v3/covid-19/countries';

  // const getData = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       json.forEach((e) => {
  //         console.log(e.country);
  //         console.log(e.population);
  //         console.log(e.countryInfo.id);
  //       });
  //     });
  // };

  useEffect(() => {
    dispatch(fetchData());
    // getData();
  }, []);

  const dataArray = useSelector((state) => state.homeReducer.data);
  console.log(dataArray);

  const countries = dataArray.map((country) => (
    <div key={country.id}>
      <img src={country.flag} alt="flag" />
      <p>
        Name:
        {country.name}
      </p>
      <p>
        Population:
        {country.population}
      </p>
    </div>
  ));

  return (
    <div>
      <h2>COVID-19 World Wide Stats</h2>
      {countries}
    </div>
  );
}
