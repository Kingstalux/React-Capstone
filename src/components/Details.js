import React from 'react';
import { useSelector } from 'react-redux';

export default function Details() {
  const countryStats = useSelector((state) => state.detailsReducer.data);

  const covidStats = countryStats.map((element) => (
    <div key={element}>
      <img src={element.flag} alt="flag" />
      <p>
        Country:
        {element.name}
      </p>
      <p>
        Active Cases:
        {element.cases}
      </p>
      <p>
        Deaths:
        {element.deaths}
      </p>
      <p>
        Recovered:
        {element.recovered}
      </p>
      <p>
        Today&apos;s Cases:
        {element.todayCases}
      </p>
      <p>
        Today&apos;s Deaths:
        {element.todayDeaths}
      </p>
      <p>
        Recovered Today:
        {element.todayRecovered}
      </p>
    </div>
  ));

  return (
    <div>
      <h2>Details</h2>
      {covidStats}
    </div>
  );
}
