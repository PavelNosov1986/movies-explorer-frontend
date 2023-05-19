import React from 'react';
import './Main.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Portfolio from '../Portfolio/Portfolio';
import HeaderSelect from '../widgets/HeaderSelect/HeaderSelect';

const Main = ({ isLoggedIn }) => {
  return (
    <main className='main'>
      <div className='background'>
      {isLoggedIn ? <HeaderSelect /> : <Header />}
      <Promo />
      </div>
        <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <section className='footer__section'>
        <Footer />
      </section>
    </main>
  );
};

export default Main;