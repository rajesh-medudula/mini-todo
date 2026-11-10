import './Header.css'

import { getGlobalIcon } from "../../assets/icons"

export function Header() {
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
        <label className='header__search-label' htmlFor="search">
          <input className='header__search-input' id="search" type="text" placeholder="Search task"/>
          <button className='header__search-btn'>
            {getGlobalIcon("search")}
          </button>
        </label>
      </div>
    </header>
  )
}