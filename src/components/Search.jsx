const Search = ({ searchText, setSearchText }) => {
  return (
    <div className="search">
      <div>
        <img src="Search-vector.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Search;
