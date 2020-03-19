import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  "shark",
  "nado",
  "boom!"
]

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <div>
          <img src="../IPad.png" alt="logo" />
          <label id="ac-ln-curtain" for="ac-ln-menustate"></label>
          <div>
            <div class="hero-intro-copyblock large-9 medium-12">
              <h2 class="hero-subheadline typography-overview-intro-headline">Like a computer. Unlike any computer.</h2>
              <p class="typography-overview-intro-copy large-12 large-centered medium-11 small-12">The new iPad combines the power and capability of a computer with the ease of use and versatility you’d never expect from one. And now it’s even more versatile, with a larger 10.2&#x2011;inch Retina display, support for the full-size Smart Keyboard, and the amazing new capabilities of iPadOS. It’s unbelievably fun. And unmistakably iPad.</p>
              <p class="hero-dynamic-price typography-overview-intro-copy" data-pricing-template="Starting at {price}">&nbsp;</p>
            </div>
            <div class="hero-cta-links column large-12 large-centered typography-overview-intro-copy">
              <a href="/apple-events/september-2019/" data-analytics-title="watch the keynote" data-analytics-region="learn more" aria-label="Watch the keynote" class="icon-wrapper"><span class="icon-copy">Watch the keynote</span><span class="icon icon-after icon-playcircle"></span></a>
            </div>
            <div class="work-headline-container column large-6 medium-12">
						  <h2 class="section-headline image-overview-work-headline" data-anim-lazy-image><span class="visuallyhidden">Kick some serious tasks.</span></h2>
            </div>
            <div class="work-paragraph-container column large-6 medium-12">
              <div class="typography-overview-body column medium-10 medium-push-1 small-12 small-push-0">
                <p class="section-paragraph">With iPad, getting work done is all hustle and no hassle. You can easily edit a document while researching something on the web and making a FaceTime call to a colleague at the same time. Manage all your files in one convenient spot with the Files app. And when you want to write a term paper or create a presentation, you can simply use the onscreen keyboard or attach the full&#x2011;size Smart Keyboard.<sup><a href="#footnote-2" class="footnote">1</a></sup></p>
              </div>
					  </div>
            <div class="notes-paragraph-container column large-12">
              <div class="typography-overview-body column large-6 large-push-5 medium-10 medium-push-1 small-12 small-push-0">
                <p class="section-paragraph">From taking notes in class to writing out a quick to-do list, using Apple Pencil with iPad is the best way to get what’s in your brain down on the page.<sup><a href="#footnote-2" class="footnote">1</a></sup> Do things like sign paperwork, mark up a document, or sketch out an idea. It feels as natural to use as a pencil, but with so much more capability.</p>
              </div>
					  </div>
            <div class="learn-paragraph-container column large-12">
              <div class="typography-overview-body paragraph-copy column large-6 large-push-1 medium-8 medium-push-1 small-12 small-push-0">
                <p class="section-paragraph">Let your curiosity run wild with iPad. The App Store is the best place to discover apps that let you get a leg up in geometry, learn a new language, and practice composing your own music. You can even use augmented reality to learn something exciting, like watching the history of spaceflight unfold in your living room or making characters from your favorite book literally leap off the page.</p>
              </div>
					  </div>
            <div class="gaming-paragraph-container column large-12">
              <div class="typography-overview-body column large-5 medium-6 small-12">
                <p class="section-paragraph">It’s go time for gaming. The A10 Fusion chip delivers amazing performance, so games are immersive, fluid, and incredibly detailed. And you can pair an Xbox Wireless Controller with Bluetooth, PlayStation DualShock 4 controller, or MFi game controller with your iPad to create the ultimate portable game console.<sup><a href="#footnote-3" class="footnote">2</a></sup> You can also try out Apple Arcade, a game subscription service unlike any other, with over 100 incredibly fun new games to play.<sup><a href="#footnote-4" class="footnote">3</a></sup></p>
                <a href="/apple-arcade/" data-analytics-title="learn more about apple arcade" data-analytics-region="learn more" aria-label="Learn more about apple arcade" class="icon-wrapper section-paragraph-cta" data-rid-store='{"288":"arc-0-ip7_ovp-lrn-apl-avl-190919"}'><span class="icon-copy">Learn more about Apple Arcade</span><span class="icon icon-after more"></span></a></div>
					  </div>
            <div class="draw-paragraph-container column large-12">
              <div class="typography-overview-body column large-7 large-push-2 medium-10 medium-push-1 small-12 small-push-0">
                <p class="section-paragraph">iPad lets you express your creative ideas in so many ways. Whether you’re painting a watercolor, designing a logo, or just sketching up a storm, Apple Pencil is the perfect tool to bring your vision to life. It’s designed to feel intuitive and let you draw with pixel&#x2011;perfect precision.</p>
              </div>
					  </div>
            <div class="photos-paragraph-container column large-12">
              <div class="typography-overview-body column large-7 large-push-1 medium-8 small-12 small-push-0">
                <p class="section-paragraph">No matter how you capture your photos and videos — with the 8MP back camera or the FaceTime HD camera on iPad, with an iPhone, or with a digital camera — you’ll love editing them on the large, immersive screen of your iPad. Add fun effects, apply filters, crop, or rotate. Once you’ve got your perfect shot, share it to your social feeds or send it to friends with a tap.<sup><a href="#footnote-5" class="footnote">4</a></sup></p>
              </div>
					  </div>
            <div class="large-12 section-paragraph-caption">
								<a href="https://tv.apple.com/us/show/see/umc.cmc.3s4mgg2y7h95fks9gnc4pw13m" class="icon-wrapper typography-caption" rel="nofollow" data-analytics-exit-link><span class="icon-copy">Watch <cite>See</cite> on the Apple TV app</span><span class="icon icon-after icon-external"></span></a> </div>
							<div class="typography-overview-body column large-7 large-push-1 medium-8 small-12 small-push-0">
								<p class="section-paragraph">Everything you watch on iPad looks and sounds awesome, thanks to the 10.2&#x2011;inch Retina display and stereo system. With the Apple&nbsp;TV app, you’ll have access to popular streaming services, must&#x2011;watch shows, and blockbuster movies. And when you buy a new iPad, it includes a year of Apple&nbsp;TV+, a new streaming service featuring original shows and movies from the world’s best storytellers.<sup><a href="#footnote-6" class="footnote">5</a></sup> Now all you have to do is remember the&nbsp;popcorn.</p>
								<a href="/apple-tv-plus/" data-analytics-title="learn more about apple tv plus" data-analytics-region="learn more" aria-label="Learn more about Apple TV Plus" class="icon-wrapper section-paragraph-cta" data-rid-store='{"289":"atv-0-ipd_102-tle_lrn-apl-avl-191111"}'><span class="icon-copy">Learn more about Apple TV+</span><span class="icon icon-after more"></span></a></div>
                <div class="portable-paragraph-container column large-5 medium-12">
						<div class="typography-overview-body column large-12 medium-10 medium-push-1 small-12 small-push-0">
							<p class="section-paragraph">With a thin and light design and fast Wi&#x2011;Fi and Gigabit&#x2011;class LTE, iPad is designed to go where your life goes.<sup><a href="#footnote-7" class="footnote">6</a></sup> So you can browse the web, download books, and more, wherever you are. And with up to 10 hours of battery life, you can do it all on a single charge.<sup><a href="#footnote-8" class="footnote">7</a></sup> It does pretty much everything but carry itself.</p>
							<a href="/ipad/cellular/" data-analytics-title="learn more about cellular coverage" data-analytics-region="learn more" aria-label="Learn more about cellular coverage" class="icon-wrapper section-paragraph-cta"><span class="icon-copy">Learn more about cellular coverage</span><span class="icon icon-after more"></span></a></div>
					  </div>
            <div class="row row-logical row-flex">
              <div class="appstore-headline-container column large-6 medium-12">
                <h2 class="section-headline image-overview-appstore-headline" data-anim-lazy-image><span class="visuallyhidden">Apps for everything.</span></h2>
              </div>
              <div class="appstore-image-container column large-12">
                <figure class="appstore-hero image-overview-appstore-hero " role="presentation" data-anim-lazy-image>
                  <figure class="snipe snipe-1  image-overview-appstore-snipe-appstore" role="img" aria-label="Over 1 million apps designed for iPad" data-anim-lazy-image>
                  </figure>
                  <figure class="snipe snipe-2 shared-anim-specs-global image-overview-appstore-snipe-ar" role="img" aria-label="The best place to discover AR apps" data-component-list="SnipeAnimation" global data-anim-lazy-image>
                    <figure class="snipe-anim-sprite snipe-2-sprite" data-anim-lazy-image></figure>
                  </figure>
                  <figcaption class="caption typography-caption caption-1">Microsoft PowerPoint</figcaption>
                  <figcaption class="caption typography-caption caption-2">Kitchen Stories</figcaption>
                  <figcaption class="caption typography-caption caption-3">Adobe Fresco</figcaption>
                  <figcaption class="caption typography-caption caption-4">JFK Moonshot</figcaption>
                  <figcaption class="caption typography-caption caption-5">Flow by Moleskine</figcaption>
                  <figcaption class="caption typography-caption caption-6">The Gardens Between</figcaption>
                </figure>
              </div>
              <div class="appstore-paragraph-container column large-6 medium-12">
                <div class="typography-overview-body column large-12 medium-10 medium-push-1 small-11 small-push-0">
                  <p class="section-paragraph">There are over a million apps on the App Store specifically designed for the large display and power of iPad. Make a beat, get a workout in, read the news, or join a battle royale with friends. Whatever you’re interested in, you’ll find an app for it.</p>
                  <a href="https://apps.apple.com/us/story/id1276352397" data-analytics-title="discover apps for ipad on the app store" data-analytics-region="learn more" aria-label="Discover apps for iPad on the App Store" class="icon-wrapper section-paragraph-cta"><span class="icon-copy">Discover apps for iPad on the App Store</span><span class="icon icon-after more"></span></a></div>
              </div>
            </div>
            <div class="privacy-paragraph-container column large-5 large-push-7 medium-12 medium-push-0">
              <div class="typography-overview-body paragraph-copy column large-12 medium-10 medium-push-1 small-12 small-push-0">
                <p class="section-paragraph">Like every Apple product, iPad was designed with your privacy and security in mind. Sign in with Apple lets you sign in securely to apps and websites with the Apple ID you already have. And Touch ID makes unlocking your iPad and making purchases with Apple Pay simple and secure.</p>
                <a href="/privacy/approach-to-privacy/" data-analytics-title="learn more about our approach to privacy" data-analytics-region="learn more" aria-label="Learn more about our approach to privacy" class="icon-wrapper section-paragraph-cta"><span class="icon-copy">Learn more about our approach to privacy</span><span class="icon icon-after more"></span></a></div>
					  </div>
          </div>
          <div class="row row-logical row-flex">
            <div class="accessibility-headline-container column large-8 medium-12">
              <h2 class="section-headline image-overview-accessibility-headline" data-anim-lazy-image><span class="visuallyhidden">Designed for everyone.</span></h2>
            </div>
            <div class="accessibility-image-container column large-4 large-push-1 medium-12 medium-push-0">
              <figure class="accessibility-hero image-overview-accessibility-hero " data-anim-lazy-image>
                <figure class="snipe snipe-1  image-overview-accessibility-snipe-voice" role="img" aria-label="Control your iPad with just your voice" data-anim-lazy-image>
                  <figure class="snipe-anim-sprite snipe-1-sprite" data-anim-lazy-image></figure>
                </figure>
              </figure>
            </div>
            <div class="accessibility-paragraph-container column large-5 medium-12">
              <div class="typography-overview-body column large-12 medium-10 medium-push-1 small-12 small-push-0">
                <p class="section-paragraph">Technology is most powerful when everyone can use it. That’s why iPad comes with accessibility features that support vision, hearing, mobility, and learning needs. Use Voice Control to control your iPad with just your voice and Magnifier to make small type easier to read.</p>
                <a href="/accessibility/ipad/" data-analytics-title="explore all accessibility features on ipad" data-analytics-region="learn more" aria-label="Explore all accessibility features on iPad" class="icon-wrapper section-paragraph-cta"><span class="icon-copy">Explore all accessibility features on iPad</span><span class="icon icon-after more"></span></a></div>
            </div>
            <div class="section-content">
              <h2 class="recap-headline large-8 medium-10 small-12 typography-shared-footer-headline-elevated">Did you catch all that? Let’s recap.</h2>
              <figure class="recap-hero image-overview-recap-hero " data-anim-lazy-image>
              </figure>
              <div class="recap-features">
                <div class="row row-logical">
                  <div class="recap-feature column large-6 small-12 feature-retina-display">
                    <figure class="recap-feature-icon image-overview-recap-retina-display" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">10.2-inch Retina display</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">With incredible detail and vivid colors, the new, larger Retina display is perfect for watching a movie, working on a project, and drawing your next masterpiece.</p>
                  </div>
                  <div class="recap-feature column large-6 small-12 feature-ipados">
                    <figure class="recap-feature-icon image-overview-recap-ipados" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">iPadOS</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">With features specifically designed for iPad, iPadOS includes intuitive multitasking, a new Home screen, and desktop-class browsing to make using iPad more powerful, fun, and productive.</p>
                  </div>
                </div>
                <div class="row row-logical">
                  <div class="recap-feature column large-6 small-12 feature-smart-keyboard">
                    <figure class="recap-feature-icon image-overview-recap-smart-keyboard" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">Smart Keyboard</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">Just attach the full-size Smart Keyboard to your iPad and start typing — no charging or pairing required.<sup><a href="#footnote-2" class="footnote">1</a></sup> And when you’re finished, it folds up to become a slim, lightweight cover.</p>
                  </div>
                  <div class="recap-feature column large-6 small-12 feature-apple-pencil">
                    <figure class="recap-feature-icon image-overview-recap-apple-pencil" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">Apple Pencil</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">Apple Pencil features the precision, responsiveness, and natural fluidity of a traditional writing instrument and the versatility to become so much more.<sup><a href="#footnote-2" class="footnote">1</a></sup> With it, you can turn iPad into your notepad, canvas, or just about anything else you can imagine.</p>
                  </div>
                </div>
                <div class="row row-logical">
                  <div class="recap-feature column large-6 small-12 feature-augmented-reality">
                    <figure class="recap-feature-icon image-overview-recap-augmented-reality" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">Augmented reality</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">The large Retina display combined with advanced sensors and cameras makes iPad perfect for immersive AR experiences that enhance the way you play, shop, and learn.</p>
                  </div>
                  <div class="recap-feature column large-6 small-12 feature-fusion-chip">
                    <figure class="recap-feature-icon image-overview-recap-fusion-chip" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">A10 Fusion chip</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">With the A10 Fusion chip, you can edit a 4K video, play graphics-intensive games, and experience AR apps.</p>
                  </div>
                </div>
                <div class="row row-logical">
                  <div class="recap-feature column large-6 small-12 feature-battery-life">
                    <figure class="recap-feature-icon image-overview-recap-battery-life" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">10-hour battery life</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">Thanks to the efficiency of the A10 Fusion chip, you can expect up to 10 hours of battery life to keep you going through the day.<sup><a href="#footnote-8" class="footnote">7</a></sup></p>
                  </div>
                  <div class="recap-feature column large-6 small-12 feature-million-apps">
                    <figure class="recap-feature-icon image-overview-recap-million-apps" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">Over 1 million apps</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">There are more than a million iPad apps designed for anything you want to do, like learning, gaming, working, creating, and watching.</p>
                  </div>
                </div>
                <div class="row row-logical">
                  <div class="recap-feature column large-6 small-12 feature-cameras">
                    <figure class="recap-feature-icon image-overview-recap-cameras" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">Front and back cameras</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">The built-in FaceTime HD camera and 8MP back camera allow you to snap amazing photos, shoot epic videos, scan documents, make FaceTime calls, and experience AR.</p>
                  </div>
                  <div class="recap-feature column large-6 small-12 feature-one-pound">
                    <figure class="recap-feature-icon image-overview-recap-one-pound" data-anim-lazy-image></figure>
                    <h3 class="recap-feature-headline typography-overview-recap-subheadline">Thin, light, and durable design</h3>
                    <p class="recap-feature-copy large-10 small-12 typography-overview-recap-body">iPad is built to be durable so you have peace of mind knowing you can take it anywhere you go. And now the enclosure is made from 100 percent recycled aluminum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-content">
            <div class="row">
              <figure class="image-shared-smartkeyboard-applepencil" data-anim-lazy-image></figure>
              <div class="smartkeyboard-wrapper column large-5 medium-12">
                <h2 class="typography-shared-footer-headline-elevated">Smart Keyboard</h2>
                <div class="copy-wrapper large-12 medium-8 medium-centered small-12">
                  <p>Type on a full-size keyboard when you need one and fold it up into a slim, lightweight cover when you’re done. No charging or pairing required.</p>
                  <p><a href="/us/shop/goto/product/MPTL2" data-analytics-title="buy - smart keyboard" data-analytics-region="buy" aria-label="Buy Smart Keyboard" class="icon-wrapper"><span class="icon-copy">Buy</span><span class="icon icon-after more"></span></a></p>
                </div>
                <figure class="image-shared-smartkeyboard" data-anim-lazy-image></figure>
              </div>
              <div class="applepencil-wrapper column large-5 large-offset-2 medium-12 medium-offset-0">
                <h2 class="typography-shared-footer-headline-elevated">Apple Pencil</h2>
                <div class="copy-wrapper large-12 medium-8 medium-centered small-12">
                  <p>Jot down notes, mark up documents and photos, and draw and create whenever inspiration strikes.</p>
                  <p><a href="/us/shop/goto/product/MK0C2" data-analytics-title="buy - apple pencil" data-analytics-region="buy" aria-label="Buy Apple Pencil" class="icon-wrapper"><span class="icon-copy">Buy</span><span class="icon icon-after more"></span></a></p>
                </div>
                <figure class="image-shared-applepencil" data-anim-lazy-image></figure>
              </div>
            </div>
          </div>
          <div class="section-content">
            <div class="row row-flex">
              <div class="copyblock-wrapper">
                <h2 class="typography-shared-footer-headline-elevated column large-12 large-centered">Accessories</h2>
                <div class="copy-wrapper column large-12 large-centered medium-8 small-11">
                  <p>Explore cases, headphones, speakers, and more.</p>
                  <p><a href="/us/shop/goto/ipad/accessories" data-analytics-title="shop ipad accessories" data-analytics-region="learn more" class="icon-wrapper"><span class="icon-copy">Shop iPad Accessories</span><span class="icon icon-after more"></span></a></p>
                </div>
              </div>
              <div class="image-wrapper">
                <figure class="image-shared-ipad-accessories" data-anim-lazy-image></figure>
              </div>
            </div>
          </div>
          <div class="section-content">
            <div class="row">
              <h2 class="typography-shared-footer-headline-elevated column large-9 large-centered medium-12 small-12">Get up to<br class="small" /><span class="nowrap">$240</span><br class="large" /><br class="medium" /> toward<br class="small" /> a new iPad.</h2>
              <div class="copy-wrapper column large-7 large-centered medium-9 small-11">
                <p>With Apple Trade In, just give<br class="small" /> us your eligible iPad and get<br /> credit for a new one. It’s good<br class="small" /> for you and the planet.<a href="#footnote-1" class="footnote">*</a></p>
                <p><a href="/us/shop/goto/trade_in#tradeup-app" data-analytics-title="find your trade-in value" data-analytics-region="learn more" class="icon-wrapper"><span class="icon-copy">Find your trade&#x2011;in value</span><span class="icon icon-after more"></span></a></p>
              </div>
            </div>
          </div>
          <div class="section-content">
            <h2 class="typography-compare-headline-elevated large-centered medium-11 large-10 small-10">Compare iPad models</h2>
            <p class="cta-container">
              <a href="/ipad/compare/" data-analytics-title="find the right ipad for you" data-analytics-region="learn more" class="icon-wrapper"><span class="icon-copy">Find the right iPad for you</span><span class="icon icon-after more"></span></a> </p>
            <div class="compare-container">
              <div class="ipad-pro product-column">
                <div class="cell-top">
                  <figure class="image" data-anim-lazy-image></figure>
                  <h3 class="typography-label" id="ipad-pro-heading">iPad Pro</h3>
                  <p class="typography-body-reduced">Starting at $799</p>
                  <ul class="list list-nobullet" role="list" aria-labelledby="ipad-pro-heading">
                    <li role="listitem" class="typography-body-reduced"><span>12.9” and 11”<br />Liquid Retina display<br />with ProMotion</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>A12Z Bionic chip</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Pro cameras and LiDAR Scanner</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Face ID</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Up to 1TB storage</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Support for Apple Pencil<br />(2nd generation)</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Support for Magic Keyboard and Smart Keyboard Folio</span></li>
                  </ul>
                </div>
                <div class="cell-bottom">
                  <a href="/us/shop/goto/ipad_pro/select" data-analytics-region="buy" data-analytics-title="buy - ipad pro" aria-label="Order iPad Pro" class="button button-reduced">Order</a>
                  <a href="/ipad-pro/" data-analytics-title="learn more about ipad pro" data-analytics-region="learn more" aria-label="Learn more about iPad Pro" class="icon-wrapper typography-body-reduced"><span class="icon-copy">Learn more</span><span class="icon icon-after more"></span></a> </div>
              </div>
              <div class="ipad-air product-column">
                <div class="cell-top">
                  <figure class="image" data-anim-lazy-image></figure>
                  <h3 class="typography-label" id="ipad-air-heading">iPad Air</h3>
                  <p class="typography-body-reduced">Starting at $499</p>
                  <ul class="list list-nobullet" role="list" aria-labelledby="ipad-air-heading">
                    <li role="listitem" class="typography-body-reduced"><span>10.5” Retina display</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>A12 Bionic chip</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Advanced cameras</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Touch ID</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Up to 256GB storage</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Support for Apple Pencil<br />(1st generation)</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Support for Smart Keyboard</span></li>
                  </ul>
                </div>
                <div class="cell-bottom">
                  <a href="/us/shop/goto/buy_ipad/ipad_air" data-analytics-region="buy" data-analytics-title="buy - ipad air" aria-label="Buy iPad Air" class="button button-reduced">Buy</a>
                  <a href="/ipad-air/" data-analytics-title="learn more about ipad air" data-analytics-region="learn more" aria-label="Learn more about iPad Air" class="icon-wrapper typography-body-reduced"><span class="icon-copy">Learn more</span><span class="icon icon-after more"></span></a> </div>
              </div>
              <div class="ipad product-column">
                <div class="cell-top">
                  <figure class="image" data-anim-lazy-image></figure>
                  <h3 class="typography-label" id="ipad-heading">iPad</h3>
                  <p class="typography-body-reduced">Starting at $329</p>
                  <ul class="list list-nobullet" role="list" aria-labelledby="ipad-heading">
                    <li role="listitem" class="typography-body-reduced"><span>10.2” Retina display</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>A10 Fusion chip</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Advanced cameras</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Touch ID</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Up to 128GB storage</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Support for Apple Pencil<br />(1st generation)</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Support for Smart Keyboard</span></li>
                  </ul>
                </div>
                <div class="cell-bottom">
                  <a href="/us/shop/goto/buy_ipad/ipad_10_2" data-analytics-region="buy" data-analytics-title="buy - ipad" aria-label="Buy iPad" class="button button-reduced">Buy</a>
                  <a href="/ipad-10.2/" data-analytics-title="learn more about ipad" data-analytics-region="learn more" aria-label="Learn more about iPad" class="icon-wrapper typography-body-reduced"><span class="icon-copy">Learn more</span><span class="icon icon-after more"></span></a> </div>
              </div>
              <div class="ipad-mini product-column">
                <div class="cell-top">
                  <figure class="image" data-anim-lazy-image></figure>
                  <h3 class="typography-label" id="ipad-mini-heading">iPad mini</h3>
                  <p class="typography-body-reduced">Starting at $399</p>
                  <ul class="list list-nobullet" role="list" aria-labelledby="ipad-mini-heading">
                    <li role="listitem" class="typography-body-reduced"><span>7.9” Retina display</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>A12 Bionic chip</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Advanced cameras</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Touch ID</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Up to 256GB storage</span></li>
                    <li role="listitem" class="typography-body-reduced"><span>Support for Apple Pencil<br />(1st generation)</span></li>
                  </ul>
                </div>
                <div class="cell-bottom">
                  <a href="/us/shop/goto/buy_ipad/ipad_mini" data-analytics-region="buy" data-analytics-title="buy - ipad mini" aria-label="Buy iPad Mini" class="button button-reduced">Buy</a>
                  <a href="/ipad-mini/" data-analytics-title="learn more about ipad mini" data-analytics-region="learn more" aria-label="Learn more about iPad Mini" class="icon-wrapper typography-body-reduced"><span class="icon-copy">Learn more</span><span class="icon icon-after more"></span></a> </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
    );
}

export default App;