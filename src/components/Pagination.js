const Pagination = function ({
  countryPerPage,
  totalCountries,
  paginate,
  darkMode,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderedPageNumbers = pageNumbers.map((number) => (
    <div onClick={paginate.bind(this, number)} key={number}>
      {number}
    </div>
  ));

  const darkClass = darkMode ? 'pagination-dark' : '';

  return <div className={`pagination ${darkClass}`}>{renderedPageNumbers}</div>;
};

export default Pagination;
