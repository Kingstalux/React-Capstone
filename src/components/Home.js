import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaSistrix, FaChevronCircleRight } from 'react-icons/fa';
import { fetchData } from '../redux/home/home';
import { fetchCountryStats } from '../redux/details/details';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const pageChange = (e) => {
    dispatch(fetchCountryStats(e.target.parentElement.id));
  };

  const searchCountry = (e) => {
    if (document.getElementById('input').value === '') {
      e.preventDefault();
      document.getElementById('input').placeholder = 'Enter a country';
    } else {
      e.preventDefault();
      const id = document.getElementById('input').value;
      navigate('/details');
      dispatch(fetchCountryStats(id));
    }
  };

  const dataArray = useSelector((state) => state.homeReducer.data);

  const [pageNumber, setPageNumber] = useState(0);
  const countriesPerPage = 6;
  const pagesVisited = pageNumber * countriesPerPage;

  const countries = dataArray.slice(pagesVisited, pagesVisited + countriesPerPage)
    .map((country) => (
      <div className="country-card" key={country.id}>
        <img src={country.flag} alt="flag" />
        <div>
          <div className="pop">
            {' '}
            <p>
              Country:
            </p>
            <p>
              {country.name}
            </p>
          </div>
          <div className="pop">
            <p>
              Population:
            </p>
            <p>
              {country.population}
            </p>
          </div>
          <br />
          <div id={country.name}>
            <NavLink to="/details" onClick={pageChange} id={country.name}><FaChevronCircleRight id={country.name} /></NavLink>
          </div>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(dataArray.length / countriesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginatedBtns"
        previousLinkClassName="prevBtn"
        nextLinkClassName="nextBtn"
        disabledLinkClassName="disableBtn"
        activeClassName="activeBtn"
      />
    </div>
  );
}
