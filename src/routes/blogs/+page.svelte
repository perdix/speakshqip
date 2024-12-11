<script>
    // No need for a `let images` array, just include the images directly in the HTML
    </script>
    
    <style>
      .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 4rem 1.5rem;
        background-color: #fff;
      }
    
      .headline {
        font-size: 2.5rem;
        font-weight: 700;
        color: #333;
        margin-bottom: 1rem;
      }
    
      .subheadline {
        font-size: 1.25rem;
        color: #555;
        margin-bottom: 2rem;
      }
    
      .cta-buttons {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
      }
    
      .cta-buttons button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
      }
    
      .join-class {
        background-color: #6c5ce7;
        color: white;
      }
    
      .learn-more {
        background-color: #dfe6e9;
        color: #333;
      }
    
      .stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
      }
    
      .stat {
        text-align: center;
      }
    
      .stat-number {
        font-size: 1.5rem;
        font-weight: 700;
        color: #333;
      }
    
      .stat-label {
        color: #555;
      }
    
      .images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 2rem;
      }
    
      .image-wrapper {
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
      }
    
      .image-wrapper img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    
      .icon {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background-color: white;
        border-radius: 50%;
        padding: 0.5rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
    </style>
    
    <!-- Main Content -->
    <div class="hero">
      <h1 class="headline">Discover the Rich History of the Albanian Language</h1>
      <p class="subheadline">
        SpeakShqip brings you fascinating insights and valuable resources to explore the origins, evolution, and significance of the Albanian language and culture.
      </p>
    
      <div class="cta-buttons">
        <button class="join-class">Explore Our Articles</button>
      </div>
    
      <!-- Images Display -->
      <div class="images">
        <!-- Image 1 with an icon -->
        <div class="image-wrapper">
          <img src="static/graphics/student1.jpg" alt="Student 1" />
          <div class="icon">★</div>
        </div>
    
        <!-- Image 2 without an icon -->
        <div class="image-wrapper">
          <img src="graphics/student2.jpg" alt="Student 2" />
        </div>
    
        <!-- Image 3 without an icon -->
        <div class="image-wrapper">
          <img src="graphics/student3.jpg" alt="Student 3" />
        </div>
    
        <!-- Image 4 with an icon -->
        <div class="image-wrapper">
          <img src="graphics/student4.jpg" alt="Student 4" />
          <div class="icon">★</div>
        </div>
      </div>
    
      <!-- Stats Section -->
      <div class="stats">
        <div class="stat">
          <div class="stat-number">3,000+</div>
          <div class="stat-label">Years of Albanian History</div>
        </div>
        <div class="stat">
          <div class="stat-number">7</div>
          <div class="stat-label">Albanian Dialects</div>
        </div>
        <div class="stat">
          <div class="stat-number">2 Million+</div>
          <div class="stat-label">Native Albanian Speakers Worldwide</div>
        </div>
      </div>
    </div>
    