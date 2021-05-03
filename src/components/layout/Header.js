import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="z-10  top-0 bg-white">
    <div className="border-b-2 border-black container flex flex-col justify-between items-center mx-auto pt-5 pb-5 sm:flex-row sm:px-8 sm:pt-8 sm:pb-8">
      <div className="flex items-center">
        <div className="flex justify-center w-12 md:justify-start">
          <LogoIcon />
        </div>
      </div>
      <div className="flex space-x-8 mt-4 sm:mt-0">
        <AnchorLink href="#work">
          work
        </AnchorLink>
        <AnchorLink href="#contact">
          contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
