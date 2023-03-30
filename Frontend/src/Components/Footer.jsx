import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <p>
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be eligible
          to trade in for credit or for an Apple Gift Card. Trade-in value may
          be applied toward qualifying new device purchase, or added to an Apple
          Gift Card. Actual value awarded is based on receipt of a qualifying
          device matching the description provided when estimate was made. Sales
          tax may be assessed on full value of a new device purchase. In-store
          trade-in requires presentation of a valid photo ID (local law may
          require saving this information). Offer may not be available in all
          stores, and may vary between in-store and online trade-in. Some stores
          may have additional requirements. Apple or its trade-in partners
          reserve the right to refuse or limit quantity of any trade-in
          transaction for any reason. More details are available from Apple’s
          trade-in partner for trade-in and recycling of eligible devices.
          Restrictions and limitations may apply.
        </p>
        <p>
          2. Compared to AirPods Pro (1st generation). To listen to music on
          Apple Music Classical, you must have an internet connection. To access
          and use all the features of Apple Card, you must add Apple Card to
          Wallet on an iPhone or iPad with the latest version of iOS or iPadOS.
          Update to the latest version by going to Settings > General > Software
          Update. Tap Download and Install. Available for qualifying applicants
          in the United States. Apple Card is issued by Goldman Sachs Bank USA,
          Salt Lake City Branch. Learn more about how Apple Card applications
          are evaluated at support.apple.com/kb/HT209218.
        </p>
      </div>
      <div className="footerTerms">
        <div className="footerCard">
          <h1>Shop and Learn</h1>
          <p>
            <Link>Store</Link>
            <Link>Mac</Link>
            <Link>iPad</Link>
            <Link>iPhone</Link>
            <Link>Watch</Link>
            <Link>AirPods</Link>
            <Link>TV & Home</Link>
            <Link>AirTag</Link>
            <Link>Accessories</Link>
            <Link>Gift Cards</Link>
            <h3>Apple Wallet</h3>
            <Link>Wallet</Link>
            <Link>Apple Card</Link>
            <Link>Apple Pay</Link>
            <Link>Apple Cash</Link>
          </p>
        </div>
        <div className="footerCard">
          <h1>Account</h1>
          <p>
            <Link>Manage Your Apple ID</Link>
            <Link>Apple Store Account</Link>
            <Link>iCloud.com</Link>
            <h3>Entertainment</h3>
            <Link>Apple One</Link>
            <Link>Apple TV+</Link>
            <Link>Apple Music</Link>
            <Link>Apple Arcade</Link>
            <Link>Apple Fitness+</Link>
            <Link>Apple News+</Link>
            <Link>Apple Podcasts</Link>
            <Link>Apple Books</Link>
            <Link>App Store</Link>
          </p>
        </div>
        <div className="footerCard">
          <h1>Apple Store</h1>
          <p>
            <Link>Find a Store</Link>
            <Link>Genius Bar</Link>
            <Link>Today at Apple</Link>
            <Link>Apple Camp</Link>
            <Link>Apple Store App</Link>
            <Link>Certified Refurbished</Link>
            <Link>Apple Trade In</Link>
            <Link>Financing</Link>
            <Link>Carrier Deals at Apple</Link>
            <Link>Order Status</Link>
            <Link>Shopping Help</Link>
          </p>
        </div>
        <div className="footerCard">
          <h1>For Business</h1>
          <p>
            <Link>Apple and Business</Link>
            <Link>Shop for Business</Link>
            <h3>For Education</h3>
            <Link>Apple and Education</Link>
            <Link>Shop for K-12</Link>
            <Link>Shop for College</Link>
            <h3>For Healthcare</h3>
            <Link>Apple in Healthcare</Link>
            <Link>Health on Apple Watch</Link>
            <Link>Health Records on iPhone</Link>
            <h3>For Government</h3>
            <Link>Shop for Government</Link>
            <Link>Shop for Veterans and Military</Link>
          </p>
        </div>
        <div className="footerCard">
          <h1>Apple Values</h1>
          <p>
            <Link>Accessibility</Link>
            <Link>Education</Link>
            <Link>Environment</Link>
            <Link>Inclusion and Diversity</Link>
            <Link>Privacy</Link>
            <Link>Racial Equity and Justice</Link>
            <Link>Supplier Responsibility</Link>

            <h3>About Apple</h3>

            <Link>Newsroom</Link>
            <Link>Apple Leadership</Link>
            <Link>Career Opportunities</Link>
            <Link>Investors</Link>
            <Link>Ethics & Compliance</Link>
            <Link>Events</Link>
            <Link>Contact Apple</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
