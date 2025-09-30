import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="coral-icon">🪸</span>
            <span className="logo-text">Coral Resorts</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#resorts">Resorts</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Title */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">
            <span className="title-line-1">Where Paradise</span>
            <span className="title-line-2">Meets the Ocean</span>
          </h1>
          <p className="hero-subtitle">
            Discover luxury resorts nestled in pristine coral paradises, 
            where every moment is a celebration of natural beauty and refined elegance.
          </p>
          <button className="cta-button">Explore Our Resorts</button>
        </div>
      </section>

      {/* Resort Cards Section */}
      <section className="resorts-section">
        <div className="container">
          <h2 className="section-title">Our Exclusive Resorts</h2>
          <div className="resort-cards">
            
            {/* Resort Card 1 */}
            <div className="resort-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coral Paradise Resort" />
                <div className="card-overlay">
                  <span className="resort-badge">Premium</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="resort-name">Coral Paradise Resort</h3>
                <p className="resort-location">📍 Maldives</p>
                <p className="resort-description">
                  Experience ultimate luxury in overwater bungalows with direct access to pristine coral reefs.
                </p>
                <div className="resort-features">
                  <span className="feature">🏊 Private Beach</span>
                  <span className="feature">🪸 Coral Diving</span>
                  <span className="feature">🍽️ Fine Dining</span>
                </div>
                <div className="card-footer">
                  <span className="price">From $899/night</span>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            </div>

            {/* Resort Card 2 */}
            <div className="resort-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Azure Waters Resort" />
                <div className="card-overlay">
                  <span className="resort-badge">Luxury</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="resort-name">Azure Waters Resort</h3>
                <p className="resort-location">📍 Bora Bora</p>
                <p className="resort-description">
                  Immerse yourself in crystal-clear waters and world-class spa treatments in this tropical haven.
                </p>
                <div className="resort-features">
                  <span className="feature">🏖️ White Sand Beach</span>
                  <span className="feature">🧘 Spa Retreat</span>
                  <span className="feature">🚁 Helicopter Tours</span>
                </div>
                <div className="card-footer">
                  <span className="price">From $1,299/night</span>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            </div>

            {/* Resort Card 3 */}
            <div className="resort-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Emerald Cove Resort" />
                <div className="card-overlay">
                  <span className="resort-badge">Exclusive</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="resort-name">Emerald Cove Resort</h3>
                <p className="resort-location">📍 Seychelles</p>
                <p className="resort-description">
                  A secluded paradise offering private villas with panoramic ocean views and exclusive beach access.
                </p>
                <div className="resort-features">
                  <span className="feature">🏝️ Private Island</span>
                  <span className="feature">🎣 Deep Sea Fishing</span>
                  <span className="feature">🍾 Champagne Service</span>
                </div>
                <div className="card-footer">
                  <span className="price">From $1,599/night</span>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            </div>

            {/* Resort Card 4 */}
            <div className="resort-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sunset Bay Resort" />
                <div className="card-overlay">
                  <span className="resort-badge">Romantic</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="resort-name">Sunset Bay Resort</h3>
                <p className="resort-location">📍 Santorini</p>
                <p className="resort-description">
                  Perfect for romantic getaways with stunning sunset views and intimate dining experiences.
                </p>
                <div className="resort-features">
                  <span className="feature">🌅 Sunset Views</span>
                  <span className="feature">💕 Couples Spa</span>
                  <span className="feature">🍷 Wine Tasting</span>
                </div>
                <div className="card-footer">
                  <span className="price">From $699/night</span>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Salesforce Embedded Messaging Target */}
      <div id="salesforce-messaging-target"></div>
    </div>
  );
}

export default App;
