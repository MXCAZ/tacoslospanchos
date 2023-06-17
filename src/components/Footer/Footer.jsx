import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer-content">
        <h3>Tacos Los Panchos</h3>
        <p>"Best Tacos Ever"</p>
        <ul className="socials">
          <li>
            <a
              href="https://www.facebook.com/Authentictacosandceviche/"
              target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.yelp.com/biz/tacos-los-panchos-fillmore-2"
              target="_blank">
              <i className="fa-brands fa-yelp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/search?q=tacos+los+panchos&hl=en&sxsrf=APwXEdeYI58uz0IVJxK1J6420RF9Q-ndWQ%3A1686712315133&source=hp&ei=-y-JZNvdBZil0PEPt9uWuA0&iflsig=AOEireoAAAAAZIk-C1E2EACy4NMkwvKJGVlaMEkhJZsu&gs_ssp=eJzj4tVP1zc0zDC2yLYsKjI0YLRSNaiwMDdJMk0xTTY3N7cwNE5KszKoMEpNNEqxMLIwNjJPMrIwT_USLElMzi9WyAHigsS85Iz8YgDcoxVH&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADINCC4QxwEQrwEQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCC4Q6gIQJzIHCCMQ6gIQJzIHCC4Q6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWABg9AloAXAAeACAAQCIAQCSAQCYAQCwAQo&sclient=gws-wiz#ip=1"
              target="_blank">
              <i className="fa-brands fa-google"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright 2023. Website design by{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/francisco-sanchez-a3717b214/"
              target="_blank">
              {" "}
              Francisco Sanchez
            </a>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
