import React from 'react';
import { withRouter } from 'react-router-dom';


const address = "120 Bellevue St. Boston, MA 02132"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.address;
  }

  componentDidMount() {
    console.log(address), "mounted!";
    this.props.getAddress(address);
  }
  render() {
    return (
      <div>
      <div className="page-content">
<div className="wrapper">
      <div className="hero" id="hero-about"></div>

<div id="inner-body">

    <div id="inner-body-subnav" className="clearfix">

<button className="navbar-toggle" type="button">
<span className="icon-bar"></span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</button>

<div className="accordion" id="left-nav">
<div className="accordion-heading" id="about-group"><a className="accordion-toggle" data-parent="#left-nav" data-toggle="collapse" href="#about-pages">About</a></div>
<div className="accordion-body collapse" id="about-pages">
<div className="accordion-inner">
  <ul>
    <li><a href="/about/about-us/">About Us</a></li>
    <li><a href="/about/team/">Team</a></li>
    <li><a href="/about/jobs/">Jobs</a></li>
    <li><a href="/about/press/">Press</a></li>
    <li><a href="http://blog.couchsurfing.com/" target="_blank">Blog</a></li>
  </ul>
</div>
</div>
<div className="accordion-heading" id="getting-started-group"><a className="accordion-toggle collapsed" data-parent="#left-nav" data-toggle="collapse" href="#getting-started-pages">Getting Started</a></div>
<div className="accordion-body collapse" id="getting-started-pages">
<div className="accordion-inner">
  <ul>
    <li><a href="/about/how-it-works/">How It Works</a></li>
    <li><a href="/about/resource-center/">Resource Center</a></li>
    <li><a href="/about/mobile/">Mobile</a></li>
  </ul>
</div>
</div>
<div className="accordion-heading" id="safety-group"><a className="accordion-toggle collapsed" data-parent="#left-nav" data-toggle="collapse" href="#safety-pages">Safety</a></div>
<div className="accordion-body collapse" id="safety-pages">
<div className="accordion-inner">
  <ul>
    <li><a href="/about/safety/">Basics</a></li>
    <li><a href="/about/tips/">Tips</a></li>
    <li><a href="/about/faq/">FAQ</a></li>
  </ul>
</div>
</div>
<div className="accordion-heading" id="community-group"><a className="accordion-toggle collapsed" data-parent="#left-nav" data-toggle="collapse" href="#community-pages">Community</a></div>
<div className="accordion-body collapse" id="community-pages">
<div className="accordion-inner">
  <ul>
    <li><a href="/about/values/">Our Values</a></li>
    <li><a href="/about/ambassadors/">Ambassador Program</a></li>
    <li><a href="http://couchsurfing.tumblr.com/" target="_blank">Stories</a></li>
    <li><a href="/about/thanks/">Special Thanks</a></li>
  </ul>
</div>
</div>
<div className="accordion-heading" id="support-group"><a className="accordion-toggle collapsed" data-parent="#left-nav" data-toggle="collapse" href="#support-pages">Support</a></div>
<div className="accordion-body collapse" id="support-pages">
<div className="accordion-inner">
  <ul>
    <li><a href="/about/policies/">Policies</a></li>
    <li><a href="/about/terms-of-use/">Terms of Use</a></li>
    <li><a href="/about/privacy-policy/">Privacy Policy</a></li>
    <li><a href="/about/guidelines/">Guidelines</a></li>
    <li><a href="https://support.couchsurfing.com/hc/en-us" target="_blank">Help</a></li>
  </ul>
</div>
</div>
</div>
</div>


    <div id="inner-body-content">

        <section id="content-intro" className="has-margins">

            <p>We envision a world made better by travel and travel made richer by connection. Couchsurfers share their lives with the people they encounter, fostering cultural exchange and mutual respect.</p>
            <div className="airplane_no_bg"></div>
            <ul id="couchsurfing-does">

                <li>
                    <div className='couchsurfing-does-container' id='couchsurfing-does-img-container-left'></div>
                    <h4>Travel the world</h4>
                    <p>With Couchsurfing, you can <span className='bold'>stay with locals in every country on earth.</span> Travel like a local, stay in someone's home and experience the world in a way money can't buy.</p>
                </li>

                <li>
                    <div className='couchsurfing-does-container' id='couchsurfing-does-img-container-mid'></div>
                    <h4>Rediscover your city</h4>
                    <p><span className='bold'>There's a community of Couchsurfers near you.</span> Many cities have weekly language exchanges, dance classNamees, hikes and dinners. Make new friends.</p>
                </li>

                <li>
                    <div className='couchsurfing-does-container' id='couchsurfing-does-img-container-right'></div>
                    <h4>Become a host</h4>
                    <p><span className='bold'>Give back and open your home to travelers.</span> Learn about a new culture first-hand or practice a language. Make the world a little smaller; a little friendlier.</p>
                </li>

            </ul>

        </section>

        <section id="content-our-values">

            <img className="hide-device image-responsive" src="/about/images/ourvalues_illustrations.png" />
            <a id="values-button" href="/about/values" title="Read About Our Values">Read About Our Values</a>
            <hr className="values_hr" />
        </section>

        <section id="content-numbers">

            <p className="has-margins">Couchsurfing is a global community of <span className='bold'>14 million people</span> in more than <span className='bold'>200,000 cities</span> who share their life, their world, their journey. Couchsurfing connects travelers with a global network of people willing to share in profound and meaningful ways, making travel a truly social experience.</p>

            <img className="hide-device image-responsive" src="/about/images/three-figures.2.png" />

        </section>

        <section id="content-story" className="has-margins">

            <h1>Our Story</h1>
            <p>Couchsurfing began in 2004 as a small passion project by founders Casey Fenton, Daniel Hoffer, Sebastian Le Tuan and Leonardo Bassani da Silveira. An email to a group of students in Iceland gave birth to the idea that people anywhere would want to share their homes with strangers (or, as we like to call them, <em>friends you haven't met yet</em>).</p>
            <div className="airplane"></div>
        </section>

    </div>

</div>

</div>
</div>
      </div>
    );
  };
}

export default withRouter(Dashboard);
