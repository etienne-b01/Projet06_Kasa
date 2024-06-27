import React from 'react';
import { NavLink } from 'react-router-dom';
import ErrorLogo from '../assets/404_error_logo.svg';

const Error = () => {
  return (
    <div>
      <img src={ErrorLogo} />
      <h1>Oups ! La page demandée n'existe pas.</h1>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default Error;
