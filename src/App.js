import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import AboutUs from './about/AboutUs';
import FloorPage from './floor-planning/FloorPage';
import ThreeDPage from './three-d-elevation/ThreeDPage';
import PrivacyPage from './privacy-policy/PrivacyPage';
import Error from './Error';
import Contact from './contact/Contact';
import ScrollToTop from './ScrollToTop';
import Services from './services/Services';
import TermsPage from './terms-conditions/TermsPage';
import Categories from './categories/Categories';
import Plans from './plans/Plans';
import HundredSq from './hundred-sqfeet/HundredSq';
import VillageSq from './village-sqfeet/VillageSq';
import Under1000SqaureFeetPlan from './plans/Under1000SqaureFeetPlan';
import Under1200SqaureFeetPlan from './plans/1200SqaureFeetPlan';
import Under1500SqaureFeetPlan from './plans/1500SquareFeetPlan';
import Under2000SqaureFeetPlan from './plans/2000SquareFeetPlan';
import Under3000SqaureFeetPlan from './plans/3000SquareFeetPlan';
import Above3000SqaureFeetPlan from './plans/Above3000SqaureFeetPlan';
import PlansSingle from './plans-single/PlansSingle';
import Interiors from './interiors/Interiors';
import Elevation from './elevation/Elevation';
import InteriorDesignCategory from './interior-design-category/InteriorDesignCategory';
import Simplex from './elevation/Simplex';
import Duplex from './elevation/Duplex';
import Triplex from './elevation/Triplex';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/demosite' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/plans' element={<Plans />}></Route>
        <Route path='/floor-planning' element={<FloorPage />}></Route>
        <Route path='/three-d-elevation' element={<ThreeDPage />}></Route>
        <Route path='/privacy-policy' element={<PrivacyPage />}></Route>
        <Route path='/terms-conditions' element={<TermsPage />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/Elevation' element={<Elevation />}></Route>
        <Route path='/HundredSq' element={<HundredSq />}></Route>
        <Route path='/Categories' element={<Categories />}></Route>
        <Route path='/VillageSq' element={<VillageSq />}></Route>
        <Route path='/category/interior-design/:slug/' element={<InteriorDesignCategory />}></Route>
        <Route path='/services/under-1000-sqaure-feet-plan' element={<Under1000SqaureFeetPlan />}></Route>
        <Route path='/services/1000-1200-sqaure-feet-plan' element={<Under1200SqaureFeetPlan />}></Route>
        <Route path='/services/1200-1500-square-feet-plan' element={<Under1500SqaureFeetPlan />}></Route>
        <Route path='/services/1500-2000-square-feet-plan' element={<Under2000SqaureFeetPlan />}></Route>
        <Route path='/services/2000-3000-square-feet-plan' element={<Under3000SqaureFeetPlan />}></Route>
        <Route path='/services/above-3000-sqaure-feet-plan' element={<Above3000SqaureFeetPlan />}></Route>
        <Route path='/plans/:slug' element={<PlansSingle />}></Route>
        <Route path='/interiors' element={<Interiors />}></Route>
        <Route path='/elevation' element={<Elevation />}></Route>
        <Route path='/elevation/simplex' element={<Simplex />}></Route>
        <Route path='/elevation/duplex' element={<Duplex />}></Route>
        <Route path='/elevation/triplex' element={<Triplex />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
