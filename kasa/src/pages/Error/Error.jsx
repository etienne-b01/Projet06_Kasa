import React from 'react';
import { NavLink } from 'react-router-dom';
import ErrorLogo from '../../assets/404_error_logo.svg';
import './style.scss';

const Error = () => {
  return (
    <div className="error-page-style">
      <img src={ErrorLogo} />
      <h1>Oups ! La page que vous demandez n'existe pas.</h1>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default Error;
