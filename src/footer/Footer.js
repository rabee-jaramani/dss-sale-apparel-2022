import React from 'react';
import ag_logo from '../body/logos/logo-blue-stacked.png';
export default function Footer() {
  return (
    <div className="footer">
      {/* <div class="contact">
        <a
          href="https://clubapparel.com/about.html"
          target="_blank"
          class="text-black"
          rel="noreferrer"
        >
          ABOUT
        </a>{' '}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://clubapparel.com/terms&amp;conditions.html"
          target="_blank"
          class="text-black"
          rel="noreferrer"
        >
          T&amp;C
        </a>{' '}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://clubapparel.com/contact.html"
          target="_blank"
          class="text-black"
          rel="noreferrer"
        >
          CONTACT
        </a>
      </div> */}
      <div className="social-list">
        <a
          href="https://www.facebook.com/ApparelGroupSocial"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        {/* <a
          href="https://twitter.com/clubapparel"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a> */}

        <a
          href="https://www.instagram.com/apparelgroupofficial/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://www.youtube.com/channel/UCk_Gjj6JkPU7OiBHYl0LA9Q"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>

        {/* <a
          href="https://www.snapchat.com/download"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-snapchat"></i>
        </a> */}
      </div>
      <div className="ag_footer">
        <img src={ag_logo} alt="ag-logo" />
      </div>
      <div>© Copyright 2022</div>
    </div>
  );
}
