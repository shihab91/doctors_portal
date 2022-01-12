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
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
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