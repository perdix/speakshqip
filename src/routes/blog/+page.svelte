<script>
    let errors = [
      { title: "Incorrect Verb Conjugation", description: "A common mistake is incorrect verb conjugation." },
      { title: "Incorrect Use of Articles", description: "In Albanian, there are no indefinite articles." },
      { title: "Incorrect Prepositions", description: "Prepositions in Albanian do not always align with those in English." },
      { title: "Formal vs. Informal Address", description: "Using 'ti' instead of 'ju' in formal conversations." }
    ];
  
    // Dynamically insert error cards into the DOM
    window.onload = () => {
      const container = document.querySelector(".cards-container");
      errors.forEach(({ title, description }) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="card-title">${title}</div>
          <div class="card-description">${description}</div>
        `;
        container.appendChild(card);
      });
    };
    
  </script>
  
  
  
  <!-- Füge die Schriftart in den head-Bereich ein -->
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap">
    <style>
      body {
        font-family: 'Open Sans', sans-serif;
      }
    </style>
  </head>
  
  <div class="hero" style="background-image: url('/graphics/student2.jpg'); background-size: cover; background-position: center; color: white; text-align: center; padding: 4rem 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <div class="hero-content" style="max-width: 800px;">
      <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: 800; line-height: 1.2;">Discover the Rich History of the Albanian Language</h1>
      <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">SpeakShqip brings you fascinating insights and valuable resources to explore the origins, evolution, and significance of the Albanian language and culture.</p>
      <button class="cta-button" style="background-color: white; color: black; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        Explore Our Articles
      </button>
      <div class="stats" style="display: flex; justify-content: center; gap: 2rem; margin-top: 2rem;">
        <div class="stat-item" style="text-align: center;">
          <div class="stat-number" style="font-size: 1.75rem; font-weight: 700;">3,000+</div>
          <div>Years of Albanian History</div>
        </div>
        <div class="stat-item" style="text-align: center;">
          <div class="stat-number" style="font-size: 1.75rem; font-weight: 700;">7</div>
          <div>Albanian Dialects</div>
        </div>
        <div class="stat-item" style="text-align: center;">
          <div class="stat-number" style="font-size: 1.75rem; font-weight: 700;">2 Million+</div>
          <div>Native Albanian Speakers Worldwide</div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
    <!-- First row: Text on the left, SVG on the right -->
    <div class="row" style="display: flex; align-items: center; gap: 2rem; margin-bottom: 3rem; background-color: white; border-radius: 12px; padding: 2rem;">
      <div class="text" style="flex: 1;">
        <h3 style="color: #E63946; font-size: 1.5rem; margin-bottom: 0.75rem; font-weight: 700;">Fun Fact #1: Albanian belongs to its own language family</h3>
        <p style="color: #2C3E50; line-height: 1.6;">Albanian is a unique Indo-European language, forming its own language family with no direct relatives. This makes it one of the most fascinating and isolated languages in Europe.</p>
      </div>
      <div class="svg-container" style="flex: 1; display: flex; justify-content: center; align-items: center;">
        <img src="/graphics/svg1.svg" alt="Albanian Language Family" style="max-width: 300px; width: 100%; height: auto;" />
      </div>
    </div>
  
    <!-- Second row: SVG on the left, Text on the right -->
    <div class="row" style="display: flex; align-items: center; gap: 2rem; margin-bottom: 3rem; background-color: white; border-radius: 12px; padding: 2rem;">
      <div class="svg-container" style="flex: 1; display: flex; justify-content: center; align-items: center;">
        <img src="/graphics/svg2.svg" alt="Albanian Dialects" style="max-width: 300px; width: 100%; height: auto;" />
      </div>
      <div class="text" style="flex: 1;">
        <h3 style="color: #E63946; font-size: 1.5rem; margin-bottom: 0.75rem; font-weight: 700;">Fun Fact #2: Albanian has many dialects</h3>
        <p style="color: #2C3E50; line-height: 1.6;">There are two main dialects of Albanian: Gheg and Tosk, which differ significantly in pronunciation and grammar. Tosk is the dialect used for standard Albanian, but Gheg is still spoken in many northern regions of Albania.</p>
      </div>
    </div>
  
    <!-- Third row: Text on the left, SVG on the right -->
    <div class="row" style="display: flex; align-items: center; gap: 2rem; margin-bottom: 3rem; background-color: white; border-radius: 12px; padding: 2rem;">
      <div class="text" style="flex: 1;">
        <h3 style="color: #E63946; font-size: 1.5rem; margin-bottom: 0.75rem; font-weight: 700;">Fun Fact #3: Albanian was the last European language to adopt the Latin alphabet</h3>
        <p style="color: #2C3E50; line-height: 1.6;">Throughout its history, Albanian used various writing systems, including Greek and Arabic alphabets. It was only in 1908 that the Latin alphabet was officially adopted for Albanian.</p>
      </div>
      <div class="svg-container" style="flex: 1; display: flex; justify-content: center; align-items: center;">
        <img src="/graphics/svg3.svg" alt="Albanian Alphabet" style="max-width: 300px; width: 100%; height: auto;" />
      </div>
    </div>
  </div>



  <style>
    .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
      padding: 2rem;
    }
  
    .card {
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 1rem 1.5rem;
      max-width: 300px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;
      background-color: white;
    }
  
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
  
    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #000000;
    }
  
    .card-description {
      font-size: 1rem;
      color: #2C3E50;
      line-height: 1.4;
    }
  </style>
  



  <div class="mistakes-section" style="background-color: #f8f9fa; padding: 4rem 0;">
    <div class="container" style="max-width: 1200px; margin: 0 auto; text-align: center;">
      <img src="/graphics/mistakes-banner.jpg" alt="Common Mistakes in Albanian" style="width: 100%; max-width: 800px; height: auto; margin-bottom: 3rem;" />
      <h2 style="font-size: 2.5rem; font-weight: 700; color: #E63946; margin-bottom: 2rem;">Common Mistakes in Albanian</h2>
      <p style="font-size: 1.25rem; color: #2C3E50; margin-bottom: 3rem;">Learn about the most common grammatical errors to avoid when speaking Albanian.</p>
  
      <div class="cards-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
       
      </div>
    </div>
  </div>