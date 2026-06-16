// Website directory data
const websites = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    category: 'Development',
    description: 'The world\'s leading software development platform'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    category: 'Development',
    description: 'Q&A community for programmers'
  },
  {
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    category: 'Learning',
    description: 'Comprehensive web development documentation'
  },
  {
    name: 'CSS-Tricks',
    url: 'https://css-tricks.com',
    category: 'Development',
    description: 'Daily articles about CSS, HTML, JavaScript and web design'
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to',
    category: 'Development',
    description: 'Community of software developers sharing ideas and helping each other'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    category: 'Entertainment',
    description: 'Video sharing and streaming platform'
  },
  {
    name: 'Netflix',
    url: 'https://netflix.com',
    category: 'Entertainment',
    description: 'Streaming entertainment service'
  },
  {
    name: 'Coursera',
    url: 'https://coursera.org',
    category: 'Learning',
    description: 'Online learning and professional courses'
  },
  {
    name: 'Udemy',
    url: 'https://udemy.com',
    category: 'Learning',
    description: 'Affordable online courses and training'
  },
  {
    name: 'Codecademy',
    url: 'https://codecademy.com',
    category: 'Learning',
    description: 'Interactive coding lessons for all skill levels'
  },
  {
    name: 'FreeCodeCamp',
    url: 'https://freecodecamp.org',
    category: 'Learning',
    description: 'Free coding education and certifications'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    category: 'Social Media',
    description: 'Social networking and news platform'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    category: 'Social Media',
    description: 'Professional networking platform'
  },
  {
    name: 'Reddit',
    url: 'https://reddit.com',
    category: 'Social Media',
    description: 'Community discussion forum for diverse topics'
  },
  {
    name: 'Discord',
    url: 'https://discord.com',
    category: 'Social Media',
    description: 'Voice, video, and text communication platform'
  },
  {
    name: 'Spotify',
    url: 'https://spotify.com',
    category: 'Entertainment',
    description: 'Music streaming service'
  },
  {
    name: 'Notion',
    url: 'https://notion.so',
    category: 'Productivity',
    description: 'All-in-one workspace for notes and projects'
  },
  {
    name: 'Trello',
    url: 'https://trello.com',
    category: 'Productivity',
    description: 'Visual project and task management tool'
  },
  {
    name: 'Asana',
    url: 'https://asana.com',
    category: 'Productivity',
    description: 'Team project and task management platform'
  },
  {
    name: 'Slack',
    url: 'https://slack.com',
    category: 'Productivity',
    description: 'Team communication and collaboration platform'
  },
  {
    name: 'Figma',
    url: 'https://figma.com',
    category: 'Design',
    description: 'Collaborative design and prototyping tool'
  },
  {
    name: 'Canva',
    url: 'https://canva.com',
    category: 'Design',
    description: 'Easy-to-use graphic design platform'
  },
  {
    name: 'Adobe Creative Cloud',
    url: 'https://adobe.com/products/creative.html',
    category: 'Design',
    description: 'Professional design and creative tools'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com',
    category: 'Design',
    description: 'Community platform for designers to showcase work'
  },
  {
    name: 'Amazon',
    url: 'https://amazon.com',
    category: 'Shopping',
    description: 'Online retail and marketplace'
  },
  {
    name: 'eBay',
    url: 'https://ebay.com',
    category: 'Shopping',
    description: 'Online auction and marketplace platform'
  },
  {
    name: 'Etsy',
    url: 'https://etsy.com',
    category: 'Shopping',
    description: 'Marketplace for handmade and vintage items'
  },
  {
    name: 'Wikipedia',
    url: 'https://wikipedia.org',
    category: 'Reference',
    description: 'Free online encyclopedia'
  },
  {
    name: 'Dictionary.com',
    url: 'https://dictionary.com',
    category: 'Reference',
    description: 'Online dictionary and thesaurus'
  },
  {
    name: 'Google',
    url: 'https://google.com',
    category: 'Utilities',
    description: 'Search engine and productivity tools'
  },
  {
    name: 'Gmail',
    url: 'https://gmail.com',
    category: 'Utilities',
    description: 'Free email service'
  },
  {
    name: 'Google Drive',
    url: 'https://drive.google.com',
    category: 'Utilities',
    description: 'Cloud storage and document collaboration'
  },
  {
    name: 'Dropbox',
    url: 'https://dropbox.com',
    category: 'Utilities',
    description: 'Cloud storage and file syncing service'
  },
  {
    name: 'ChatGPT',
    url: 'https://chatgpt.com',
    category: 'Utilities',
    description: 'AI-powered conversational assistant'
  },
  {
    name: 'Medium',
    url: 'https://medium.com',
    category: 'Content',
    description: 'Platform for writers and thought leaders'
  },
  {
    name: 'Substack',
    url: 'https://substack.com',
    category: 'Content',
    description: 'Newsletter writing and publishing platform'
  },
  {
    name: 'Hashnode',
    url: 'https://hashnode.com',
    category: 'Development',
    description: 'Blogging platform for developers'
  }
];

// Extract unique categories
const categories = [...new Set(websites.map(site => site.category))].sort();

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const categoryGrid = document.getElementById('categoryGrid');
const featuredGrid = document.getElementById('featuredGrid');

// Initialize page
function init() {
  renderCategories();
  renderFeaturedSites();
}

// Render category buttons
function renderCategories() {
  categoryGrid.innerHTML = '';
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'category-button';
    button.textContent = category;
    button.addEventListener('click', () => filterByCategory(category));
    categoryGrid.appendChild(button);
  });
}

// Filter sites by category
function filterByCategory(category) {
  const filtered = websites.filter(site => site.category === category);
  displayResults(filtered, `Category: ${category}`);
}

// Render featured sites (random selection)
function renderFeaturedSites() {
  const featured = websites.sort(() => Math.random() - 0.5).slice(0, 6);
  featuredGrid.innerHTML = '';
  featured.forEach(site => {
    const card = createSiteCard(site);
    featuredGrid.appendChild(card);
  });
}

// Create site card
function createSiteCard(site) {
  const card = document.createElement('div');
  card.className = 'site-card';
  card.innerHTML = `
    <div class="site-card-header">
      <h3>${site.name}</h3>
      <span class="category-badge">${site.category}</span>
    </div>
    <p class="site-description">${site.description}</p>
    <a href="${site.url}" target="_blank" class="button button-secondary">Visit Site</a>
  `;
  return card;
}

// Search functionality
function performSearch() {
  const query = searchInput.value.toLowerCase().trim();
  
  if (!query) {
    searchResults.innerHTML = '<p class="no-results">Enter a search term to begin.</p>';
    return;
  }
  
  const results = websites.filter(site => 
    site.name.toLowerCase().includes(query) ||
    site.description.toLowerCase().includes(query) ||
    site.category.toLowerCase().includes(query)
  );
  
  if (results.length === 0) {
    searchResults.innerHTML = '<p class="no-results">No websites found matching your search.</p>';
  } else {
    displayResults(results, `Search results for "${query}"`);
  }
}

// Display search results
function displayResults(results, title) {
  searchResults.innerHTML = `<h3>${title}</h3>`;
  
  const resultsList = document.createElement('div');
  resultsList.className = 'results-list';
  
  results.forEach(site => {
    const card = createSiteCard(site);
    resultsList.appendChild(card);
  });
  
  searchResults.appendChild(resultsList);
  searchResults.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') performSearch();
});

// Initialize on page load
init();
