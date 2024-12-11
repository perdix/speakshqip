<script>
  // Removed onMount and transitions
</script>

<style>
  :root {
    --primary-red: #E63946;
    --dark-red: #9A1E1E;
    --light-red: #FF6B6B;
    --text-color: #2C3E50;
    --background-color: #F8F9FA;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .hero {
    background-image: linear-gradient(rgba(209, 84, 94, 0.205), rgba(246, 116, 127, 0.162)), url('/graphics/student2.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 4rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 800;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-button {
    background-color: white;
    color: var(--primary-red);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.2);
    background-color: var(--light-red);
    color: white;
  }

  .stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 1.75rem;
    font-weight: 700;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }

  .row:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }

  .row.reverse {
    flex-direction: row-reverse;
  }

  .text {
    flex: 1;
  }

  .svg-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .svg-container img {
    max-width: 400px;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  .svg-container img:hover {
    transform: scale(1.05);
  }

  h3 {
    color: var(--primary-red);
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  p {
    color: var(--text-color);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .row, .row.reverse {
      flex-direction: column;
      text-align: center;
    }

    .hero h1 {
      font-size: 2rem;
    }

    .stats {
      flex-direction: column;
      gap: 1rem;
    }

    .svg-container img {
      max-width: 300px;
    }
  }
</style>

<div class="hero">
  <div class="hero-content">
    <h1>
      Discover the Rich History of the Albanian Language
    </h1>
    
    <p>
      SpeakShqip brings you fascinating insights and valuable resources to explore the origins, evolution, and significance of the Albanian language and culture.
    </p>
    
    <button class="cta-button">
      Explore Our Articles
    </button>
    
    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">3,000+</div>
        <div>Years of Albanian History</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">7</div>
        <div>Albanian Dialects</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">2 Million+</div>
        <div>Native Albanian Speakers Worldwide</div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <!-- First row: Text on the left, SVG on the right -->
  <div class="row">
    <div class="text">
      <h3>Fun Fact #1: Albanian belongs to its own language family</h3>
      <p>Albanian is a unique Indo-European language, forming its own language family with no direct relatives. This makes it one of the most fascinating and isolated languages in Europe.</p>
    </div>
    <div class="svg-container">
      <img src="/graphics/svg1.svg" alt="Albanian Language Family" />
    </div>
  </div>

  <!-- Second row: Text on the right, SVG on the left -->
  <div class="row reverse">
    <div class="svg-container">
      <img src="/graphics/svg2.svg" alt="Albanian Dialects" />
    </div>
    <div class="text">
      <h3>Fun Fact #2: Albanian has many dialects</h3>
      <p>There are two main dialects of Albanian: Gheg and Tosk, which differ significantly in pronunciation and grammar. Tosk is the dialect used for standard Albanian, but Gheg is still spoken in many northern regions of Albania.</p>
    </div>
  </div>

  <!-- Third row: Text on the left, SVG on the right -->
  <div class="row">
    <div class="text">
      <h3>Fun Fact #3: Albanian was the last European language to adopt the Latin alphabet</h3>
      <p>Throughout its history, Albanian used various writing systems, including Greek and Arabic alphabets. It was only in 1908 that the Latin alphabet was officially adopted for Albanian.</p>
    </div>
    <div class="svg-container">
      <img src="/graphics/svg3.svg" alt="Albanian Alphabet" />
    </div>
  </div>
</div>