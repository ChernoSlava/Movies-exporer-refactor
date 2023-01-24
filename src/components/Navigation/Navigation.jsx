import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

import account  from '../../images/Account.svg';
import { routerPath, navigation }from '../../constants';

export function Navigation({ loggedIn }) {
    
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleToggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <nav className="navigation">
      <ul className='navigation__none'>
        {loggedIn && (
          <>
            <Link
              to={routerPath.movies}
              className="navigation__link navigation__link_first"
            >
              Фильмы
            </Link>
            <Link
              to={routerPath.savedMovies}
              className="navigation__link"
            >
              Сохранённые фильмы
            </Link>
          </>
        )}
      </ul>
      <ul className='navigation__list'>
        {!loggedIn && (
          <>
            <li>
              <Link
                to={routerPath.register}
                className="navigation__link navigation__link_mini"
              >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                to={routerPath.login}
                className="navigation__link navigation__link_mini navigation__btn"
              >
                Войти
              </Link>
            </li>
          </>
        )}
        {loggedIn && (
          <li className='navigation__none'>
            <Link
              to={routerPath.profile}
              className="navigation__link navigation__link_profile"
            >
              Аккаунт
              <img src={account} alt={navigation.icoAccountAlt} className='navigation__link-ico'/>
            </Link>
          </li>
        )}
      </ul>
      {loggedIn && (
        <button
          className= "navigation__burger-btn"
          type={navigation.burgerBtnType}
          aria-label={navigation.ariaLabelBtnBurger}
          onClick={handleToggleMenu}
        />
      )}
      {loggedIn && (
        <div className={`navigation__sidebar ${menuIsOpen ? "navigation__sidebar_opened" : ''}`} >
          <div className='navigation__sidebar-container'>
            <button className="navigation__close-btn" onClick={handleToggleMenu}></button>
            <ul className='navigation__sidebar-menu'>
              <li className='navigation__sidebar-list-element'>
                <Link
                  to={routerPath.main}
                  className="navigation__sidebar-link"
                >
                  Главгая
                </Link>
              </li>
              <li className='navigation__sidebar-list-element'>
                <Link
                  to={routerPath.movies}
                  className="navigation__sidebar-link navigation__sidebar-link_active"
                >
                  Фильмы
                </Link>
              </li>
              <li className='navigation__sidebar-list-element'>
                <Link
                  to={routerPath.savedMovies}
                  className="navigation__sidebar-link"
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <div className='navigation__sidebar-profile'>
              <Link
                to={routerPath.profile}
                className="navigation__sidebar-link navigation__sidebar-link-profile"
              >
                Аккаунт
                <img src={account} alt={navigation.icoAccountAlt} className='navigation__link-ico'/>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
