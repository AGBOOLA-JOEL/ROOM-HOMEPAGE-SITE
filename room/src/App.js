import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
 

function App() {
  const slides = [
    {
      url: "http://localhost:3000/desktop-image-hero-1.jpg",
      header: " Discover innovative ways to decorate",
      desc: "We provide unmatched quality,comfort and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style in our collection and make your property a reflection of you and what you love.",
    },
    {
      url: "http://localhost:3000/desktop-image-hero-2.jpg",
      header: "We are available all across the globe",
      desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      url: "http://localhost:3000/desktop-image-hero-3.jpg",
      header: "Manufactured with the best materials",
      desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];
  return (
    <div>
      <Navbar/>
      <Home slides={slides} />
    </div>
  );
}

export default App;
