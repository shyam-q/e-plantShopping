import { Link } from 'react-router-dom';
export default function AboutUs() {
  return <main className="content-page about-us-container">
    <p className="eyebrow">OUR STORY</p><h1>A greener home starts here.</h1>
    <p>Paradise Nursery believes a little greenery can make everyday life calmer, brighter, and more connected to nature.</p>
    <p>We curate welcoming houseplants for new plant parents and experienced growers alike. From resilient starter plants to leafy statement pieces, we help you find the right plant for your space and lifestyle.</p>
    <Link className="button get-started-button" to="/plants">Explore our plants</Link>
  </main>;
}