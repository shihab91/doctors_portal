import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exceptional/Exceptional';
import Services from '../Services/Services';
import SomeInfo from '../SomeInfo/SomeInfo';
import Testimonial from '../Testimonial/Testimonial';
import bg from "../../../images/bg.png";
import "./Home.css";
const Home = () => {
  const bannerBg = {
    background: `  linear-gradient(90deg,transparent 75%,rgb(58,65,85)25%),url(${bg})`,
  };
  return (
    <div>
      <div style={bannerBg}>
        <Navigation></Navigation>
        <Banner></Banner>
      </div>
      <SomeInfo></SomeInfo>
      <Services></Services>
      <Exceptional></Exceptional>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <Doctors></Doctors>
      <Blogs></Blogs>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;