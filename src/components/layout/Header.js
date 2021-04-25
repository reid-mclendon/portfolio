import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="z-10 sticky top-0 bg-white">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center">
        <div className="flex justify-center w-12 md:justify-start">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          resume
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          work
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
