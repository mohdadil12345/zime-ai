import React from "react";

import email from "../assets/email.png"
import call from "../assets/call.png"
import linkedin from "../assets/linkedin.png"
import location from "../assets/location.png"
import fb from "../assets/faceboook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import pinters from "../assets/pinteres.png"


function Footer() {
  return (
    <div className="footer">
      <div id="footerSec">
        <span>
          {" "}
          <b>QUICK LINKS</b>
        </span>
        <a href="">- Faq's</a>
        <a href="">- Privacy Policy</a>
        <a href="">- Terms & Conditions</a>
        <a href="">- Sitemap</a>
        <a href="">- Cookies Policy</a>
        <a href="">- Cancellation & Refund Policy</a>
      </div>

      <div id="footerMidSec">

<span> <b>FOLLOW US ON</b></span>
<div>
    <img src={instagram} alt="" />
    <p>Instagram</p>
</div>

<div>
<img src={fb} alt="" />

    <p>Facebook</p>
</div>

<div>
<img src={twitter} alt="" />

    <p>Twitter</p>
</div>

<div>
<img src={pinters} alt="" />

    <p>Pinterest</p>
</div>

</div>

      <div id="footerRight">
        <span>
          <b>GET IN TOUCH</b>
        </span>
        <div>
          <img src={email} alt="" />
          <p>md3530546@gmail.com</p>
        </div>
        <div>
          <img src={call} alt="" />
          <p>+91 7017511862</p>
        </div>
        <div>
          <img src={location} alt="" />
          <p>Bangalore, Kr Puram</p>
        </div>
        <div>
        <img src={linkedin} alt="" />
          <a id="linkedin" href="https://www.linkedin.com/in/mohd-adil-634b0b241/">linkedin</a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
