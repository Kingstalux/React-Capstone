import React from 'react';
import { useSelector } from 'react-redux';

export default function Details() {
  const countryStats = useSelector((state) => state.detailsReducer.data);

  const covidStats = countryStats.map((element) => (
    <div key={element} className="country-stats">
      <div className="flag">
        <img src={element.flag} alt="flag" />
      </div>
      <h2>Stats Breakdown - 2021</h2>
      <div className="stats-card">
        <div className="stats">
          <h3>
            Country:
          </h3>
          <p>
            {element.name}
          </p>
        </div>
        <div className="stats">
          {' '}
          <h3>
            Active Cases:
          </h3>
          <p>
            {element.cases}
          </p>
        </div>
        <div className="stats">
          <h3>
            Deaths:
          </h3>
          <p>
            {element.deaths}
          </p>
        </div>
        <div className="stats">
          <h3>
            Recovered:
          </h3>
          <p>
            {element.recovered}
          </p>
        </div>
        <div className="stats">
          <h3>
            Today&apos;s Cases:
          </h3>
          <p>
            {element.todayCases}
          </p>
        </div>
        <div className="stats">
          <h3>
            Today&apos;s Deaths:
          </h3>
          <p>
            {element.todayDeaths}
          </p>
        </div>
        <div className="stats">
          <h3>
            Recovered Today:
          </h3>
          <p>
            {element.todayRecovered}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      {covidStats}
    </div>
  );
}
