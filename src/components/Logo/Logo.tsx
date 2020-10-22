import React from 'react';

import logoFinder from '../../assets/logo.svg';
import { Icon } from '../styles';

const Logo: React.FC = () => {
  return (
    <Icon>
      <a href="/">
        <img src={logoFinder} alt="GitHub Finder" />
        <p>
          GitHub <strong>Finder</strong>
        </p>
      </a>
    </Icon>
  );
};

export default Logo;
