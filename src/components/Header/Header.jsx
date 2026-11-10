import "./Header.css";

import { getGlobalIcon } from "../../assets/icons";
import { useTask } from "../../features/todo/context/TaskContext";
import { useEffect, useState } from "react";

export function Header() {
  const {setSearchValue} = useTask("");
  const [search, setSearch] = useState("");


  const handleSearch = (e) => {
    const search = e.target.value;
    
    setSearch(search);
  };

  useEffect(() => {
    setSearchValue(search);
    
  }, [search, setSearchValue])

  return (
    <header>
      <div className="header__logo-container">
        {getGlobalIcon("logo")}MiniTodo
      </div>
      {/* <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button className="nav__btn">Today</button>
        </li>
      </ul>
      </nav> */}
      <div className="header__search">
        <label className="header__search-label" htmlFor="search">
          <input
            className="header__search-input"
            id="search"
            type="text"
            placeholder="Search task"
            onChange={(e) => (handleSearch(e))}
          />
          <button className="header__search-btn">
            {getGlobalIcon("search")}
          </button>
        </label>
      </div>
    </header>
  );
}
