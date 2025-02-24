import Header from "../components/Header"
import Analytics from '../assets/LandingPage_Analytics1.png'
import Revenue from '../assets/revenue.png'
import './landingPage.css'
import Testimonials from "../components/Testimonials"
import FeatureGrid from "../components/FeatureGrid"
import ButtonSections from "../components/ButtonsSections"
import Footer from "../components/Footer"
import pics_collections from '../assets/pics_collections.png'


const LandingPage = () => {
  return (
    <div className="container">
      <Header />

      <div className="secondary-container">


        <div className="first-section">


          <div className="first-section-left">
            <h3>
              The easiest place to update and share your Connection
            </h3>
            <p>
              Help your followers discover everything you’re sharing all over the internet, in one simple place. They’ll thank you for it!
            </p>
            <div>
              Get your free Spark
            </div>

          </div>

          <img className="Analytics_img" src={Analytics} alt="analytics" />

        </div>

        <div className="second-section">

          <div className="second-section-left">

            <img className="Revenue_img" src={Revenue} alt="Revenue Data" />

            <p>
              Sell products and collect payments. It’s monetization made simple.
            </p>
          </div>

          <div className="second-section-right">
            {/* <div>

          </div> */}
            <h3>Analyze your audience and keep your followers engaged</h3>

            <p>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
          </div>


        </div>

        {/* Third Section */}

        <div className="third-section">

          <div className="third-section-left">
            <h3>Share limitless content in limitless ways</h3>

            <p>Connect your content in all its forms and help followers find more of what they’re looking for. Your TikToks, Tweets, YouTube videos, music, articles, recipes, podcasts and more… It all comes together in one powerful place</p>

          </div>

          <div className="third-section-right">
            <img className="Revenue_img" src={pics_collections} alt="Revenue Data" />

            <p>Share your content in limitless ways on your Spark</p>

          </div>


        </div>

        {/* The End of Third Section */}

        < Testimonials />

        <FeatureGrid />

        {/* <ButtonSections /> */}

        <Footer />

      </div>

    </div>
  )
}

export default LandingPage