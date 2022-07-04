import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
  return (
    
<div>


  {/* Preloader */}
  {/* <div className="preloader" /> */}
  {/* Main Header*/}
  <header className="main-header header-style-one">
    {/* Header top */}
    <div className="header-top">
      <div className="auto-container">
        <div className="inner-container">
          <div className="top-left">
            <ul className="social-icon-one">
              <li><Link to="#"><span className="fab fa-dribbble" /></Link></li>
              <li><Link to="#"><span className="fab fa-facebook-f" /></Link></li>
              <li><Link to="#"><span className="fab fa-twitter" /></Link></li>
              <li><Link to="#"><span className="fab fa-pinterest-p" /></Link></li>
            </ul>
          </div>
          <div className="top-right">
            <ul className="contact-list-one">
              <li><i className="nav-toggler flaticon-location" /> 203 Madison Ave, NY, USA <strong>Address</strong></li>
              <li><i className="nav-toggler flaticon-alarm-clock-1" />Monday - Friday 9am - 6pm <strong>Timeing</strong></li>
              <li><i className="nav-toggler flaticon-menu-2" /> <Link to="/dashboard">Event Dashboard <strong>Dashboard</strong></Link> </li>
            </ul>
            {/* <button className="nav-toggler"><i className="flaticon flaticon-menu-2" /></button> */}

          </div>
        </div>
      </div>
    </div>
    {/* End Header Top */}
    {/* Header Lower */}
    <div className="header-lower">
      <div className="auto-container">    
        {/* Main box */}
        <div className="main-box">
          <div className="logo-box">
            <div className="logo"><Link to="/"><img src={process.env.PUBLIC_URL + "assets/images/logo.png"}  /></Link></div>
          </div>
          <div className="nav-outer">
            {/* Main Menu */}

           
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className="current "><Link to="/">Home</Link>
                   
                  </li>
                  <li><Link to="/about-us">About</Link>
                  
                  </li>
                      <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/buy-ticket">Buy Ticket</Link></li>
                      <li><Link to="/faq">Faq</Link></li>
              
                  <li><Link to="/contact-us">Contact us</Link></li>
                </ul>
              </div>
            </nav>
          
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Search Btn */}
              <div className="search-box-btn search-btn search-box-outer"><span className="icon fa fa-search" /></div>
              {/* Quote Btn */}
              <div className="btn-box">
                <Link to="schedule.html" className="theme-btn btn-style-one"><span className="btn-title"><i className="flaticon-chair" /> Book Ticket</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
   {/* Sticky Header  */}
<div className="sticky-header">
  <div className="auto-container">            
    <div className="main-box">
      <div className="logo-box">
        <div className="logo"><a href="/"><img src={process.env.PUBLIC_URL + "assets/images/logo.png" }/></a></div>
        <div className="upper-right">
          <div className="search-box">
            <button className="search-btn mobile-search-btn"><i className="flaticon-search-2" /></button>
          </div>
          <a href="#nav-mobile" className="mobile-nav-toggler navbar-trigger"><i className="flaticon-menu" /></a>
        </div>
      </div>
      <nav className="main-menu navbar-expand-md">
              <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className="current "><Link to="/">Home</Link>
                   
                  </li>
                  <li><Link to="/about-us">About</Link>
                  
                  </li>
                      <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/buy-ticket">Buy Ticket</Link></li>
                      <li><Link to="/faq">Faq</Link></li>
              
                  <li><Link to="/contact-us">Contact us</Link></li>
                </ul>
              </div>
            </nav>
    </div>
  </div>
</div>{/* End Sticky Menu */}

    {/* Mobile Header */}
    <div className="mobile-header">
      <div className="logo"><Link to="index.html"><img src={process.env.PUBLIC_URL + "assets/images/logo.png"} /> </Link></div>
      {/*Nav Box*/}
      <div className="nav-outer clearfix">
        <div className="outer-box">
          {/* Search Btn */}
          <div className="search-box">
            <button className="search-btn mobile-search-btn"><i className="flaticon-search-2" /></button>
          </div>
          <Link to="#nav-mobile" className="mobile-nav-toggler navbar-trigger"><i className="flaticon-menu" /></Link>
        </div>
      </div>
    </div>
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
      <nav className="menu-box">
        <div className="upper-box">
          <div className="nav-logo"><Link to="/"><img src={process.env.PUBLIC_URL + "assets/images/logo.png"}/></Link></div>
          <div className="close-btn"><i className="icon flaticon-close" /></div>
        </div>
        <ul className="navigation clearfix">{/*Keep This Empty / Menu will come through Javascript*/}</ul>
        <ul className="contact-list-one">
          <li><i className="flaticon-location" /> 203 Madison Ave, NY, USA <strong>Address</strong></li>
          <li><i className="flaticon-alarm-clock-1" />Monday - Friday 9am - 6pm <strong>Timeing</strong></li>
          <li><i className="flaticon-email-1" /> <Link to="/dashboard">Dashboard</Link> <strong>Dashboard</strong></li>
        </ul>
        <ul className="social-links">
          <li><Link to="#"><span className="fab fa-facebook-f" /></Link></li>
          <li><Link to="#"><span className="fab fa-pinterest" /></Link></li>
          <li><Link to="#"><span className="fab fa-twitter" /></Link></li>
          <li><Link to="#"><span className="fab fa-dribbble" /></Link></li>
        </ul>
      </nav>
    </div>{/* End Mobile Menu */}
    {/* Header Search */}
    <div className="search-popup">
      <button className="close-search"><i className="flaticon-close" /></button>
      <form method="post" action="#">
        <div className="form-group">
          <input type="search" name="search-field" defaultValue placeholder="Search" required />
          <button type="submit"><i className="fa fa-search" /></button>
        </div>
      </form>
    </div>
    {/* End Header Search */}
  </header>
  {/*End Main Header */}


{/* Hidden bar back drop */}
<div className="form-back-drop" />


{/* Hidden Bar */}
<section className="hidden-bar">
  <div className="inner-box">
    <div className="title-box">
      <h2>Contact Us</h2>
      <div className="cross-icon"><span className="fa fa-times" /></div>
    </div>
    {/*Appointment Form*/}
    <div className="form-style-one">
      <form action="#" method="post">
        <div className="form-group">
          <input type="text" name="username" className="username" placeholder="Your Name *" />
        </div>
        <div className="form-group">
          <input type="email" name="email" className="email" placeholder="Your Email *" />
        </div>
        <div className="form-group">
          <input type="text" name="phone" className="phone" defaultValue placeholder="Your Phone*" required />
        </div>
        <div className="form-group">
          <textarea name="contact_message" className="message" placeholder="Text Message" defaultValue={""} />
        </div>
        <div className="form-group">
          <button className="theme-btn btn-style-one" type="button" id="submit" name="submit-form"><span className="btn-title">Submit Now</span> </button>
        </div>
      </form>
    </div>
    <ul className="contact-list-one">
      <li><i className="flaticon-location" /> 203 Madison Ave, NY, USA <strong>Address</strong></li>
      <li><i className="flaticon-alarm-clock-1" />Monday - Friday 9am - 6pm <strong>Timeing</strong></li>
      <li><i className="flaticon-email-1" /> <Link to="/dashboard">Dashboard</Link> <strong>Mail to us</strong></li>
    </ul>
  </div>
</section>
{/*End Hidden Bar */}



</div>

    
  )
}

export default Header