const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>JUST DO IT !!</h1>
        <p>
        Beating the competition is relatively easy. Beating yourself is a never-ending commitment.
               ― Phil Knight, Shoe Dog: A Memoir by the Creator of Nike
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src='../src/assets/brand_img.png' alt='png' />

          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src='../src/assets/shoe_image.png' alt='png' />
      </div>
    </main>
  );
};

export default HeroSection;