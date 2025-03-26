import { useState } from "react";
const SearchBar = () => {
  const list = ["apple", "banana", "pinapple", "mango", "orange"];
  const [serach, setSearch] = useState(list);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setSearch(list);
      return;
    }
    const filtervalues = list.filter((item) => {
      const value =
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
      console.log(value);
      return value;
    });
    setSearch(filtervalues);
  };
  return (
    <div>
      <div>
        Search :<input type="search" onChange={handleSearch} />
      </div>
      {serach &&
        serach.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
    </div>
  );
};
export default SearchBar;
