// Define article data
const articlesData = {
    "cheese-heist": {
        title: "The Great Cheese Heist",
        content: "In this thrilling adventure, Geronimo Stilton uncovers the mystery behind a massive cheese robbery at the Mouseford Academy. Follow along as he investigates the clues, encounters suspects, and cracks the case!"
    },
    "mouse-city": {
        title: "Exploring New Mouse City",
        content: "Take a tour through the bustling streets of New Mouse City, the heart of the rodent world. Discover iconic landmarks, hidden treasures, and mouse-friendly spots in this comprehensive guide to the city's best attractions."
    },
    "cheese-making": {
        title: "The Science of Cheese-Making",
        content: "Ever wonder how cheese is made? This article dives into the science behind the cheese-making process, exploring fermentation techniques, ingredients, and steps that go into creating the perfect wheel of cheese."
    }
};

// Function to handle Read More click
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const articleKey = this.getAttribute('data-article');
        const articleData = articlesData[articleKey];

        // Show the article content
        document.getElementById('articles-page').style.display = 'none';
        document.getElementById('article-content').style.display = 'block';

        // Insert article data
        document.getElementById('article-title').textContent = articleData.title;
        document.getElementById('article-body').textContent = articleData.content;
    });
});

// Function to go back to the articles list
document.getElementById('back-to-articles').addEventListener('click', function(event) {
    event.preventDefault();

    // Show the articles page and hide the article content
    document.getElementById('articles-page').style.display = 'block';
    document.getElementById('article-content').style.display = 'none';
});
