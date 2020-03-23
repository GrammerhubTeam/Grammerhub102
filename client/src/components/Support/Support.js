import React from 'react';
import logo from '../../static/logo.svg';
import '../../Containers/App.css';

const list = [
  "shark",
  "nado",
  "boom!"
]

const App = () => {
  return (
    <React.Fragment>
      <div className="support-container">
        <div className="support-search">
            <p>SUPPORT ROUTE</p>
            <img src={logo} alt="logo" />
            <p>I USED TO BE ABLE TO EAT PIZAA ALOT :(</p>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
        </div>

        <div className="support-products">
          Support products
        </div>
        <hr/>
        <div className="support-safety">
          Safety features
        </div>
        <hr/>
        <div className="support-tradein">
          Trade in
        </div>
        <hr/>
        <div className="support-questions">
          Questions
        </div>
        <hr/>
        <div className="support-get-support">
          Get Support
        </div>
        <hr/>
        <div className="support-coverage">
          coverage
        </div>
        <hr/>
        <div className="support-fix">
          Safety features
        </div>
        <hr/>
        <div className="support-counterfits">
          <h3>Beware of counterfeit parts</h3>
          <p>
            Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Store or Apple Authorized Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.

            Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.
          </p>
        </div>
        <hr/>
        <div className="support-scams">
          Safety features
        </div>
        <hr/>
        <div className="support-programs">
          <h3>Exchange and Repair Extension Programs</h3>
          <ul style={{listStyleType: "none"}}>
            <li><a href="/">iPad Air (3rd generation) Service Program for Blank Screen Issue</a></li>
            <li><a href="/">Smart Battery Case Replacement Program for iPhone XS, iPhone XS Max, and iPhone XR</a></li>
            <li><a href="/">iPhone 6s and iPhone 6s Plus Service Program for No Power Issues</a></li>
            <li><a href="/">Screen Replacement Program for Aluminum Models of Apple Watch Series 2 and Series 3</a></li>
            <li><a href="/">15-inch MacBook Pro Battery Recall Program</a></li>
            <li><a href="/">Keyboard Service Program for MacBook, MacBook Air, and MacBook Pro</a></li>
            <li><a href="/">13-inch MacBook Pro Display Backlight Service Program</a></li>
            <li><a href="/">Apple Three-Prong AC Wall Plug Adapter Recall Program</a></li>
            <li><a href="/">13-inch MacBook Pro (non Touch Bar) Solid-State Drive Service Program</a></li>
            <li><a href="/">iPhone X Display Module Replacement Program for Touch Issues</a></li>
            <li><a href="/">iPhone 8 Logic Board Replacement Program</a></li>
            <li><a href="/">13-inch MacBook Pro (non Touch Bar) Battery Replacement Program</a></li>
            <li><a href="/">iPhone 7 Repair Program for "No Service" Issues</a></li>
            <li><a href="/">iPhone 6s Program for Unexpected Shutdown Issues</a></li>
            <li><a href="/">Multi-Touch Repair Program for iPhone 6 Plus</a></li>
            <li> <a href="/">Apple AC Wall Plug Adapter Recall Program</a></li>
            <li><a href="/">Beats Pill XL Speaker Recall Program</a></li>
            <li><a href="/">All Programs</a></li>
          </ul>
        </div>
        <hr/>
      </div>
    </React.Fragment>
  );
}

export default App;