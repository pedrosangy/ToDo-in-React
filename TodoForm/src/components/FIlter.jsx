const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filter:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All"> All</option>
            <option value="completed">Completed</option>
            <option value="Incompleted">Incomplete</option>
          </select>
        </div>
        <div>
          <p>Alphabetical order</p>
          <button onClick={() => setSort("Asc")}>Ascending</button>
          <button onClick={() => setSort("Desc")}>Descending</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;