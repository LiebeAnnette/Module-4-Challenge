// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main')
const backButton = document.querySelector('#back')
// TODO: Create a function that builds an element and appends it to the DOM
const username = document.querySelector('#username')
const title = document.querySelector('#title')
const content = document.querySelector('#content')

const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []


function buildElements() {
        // Render a new li for each todo
    for (let i = 0; i < blogPosts.length; i++) {
      const blogPost = blogPosts[i];
  
      const article = document.createElement('article');
      article.textContent = blogPost.username;

      const h2 = document.createElement('h2');
            h2.textContent = blogPost.title;
      
            const p = document.createElement('p');
      
      p.textContent = blogPost.content;
      
      
      mainElement.appendChild(article);
      article.appendChild(h2);
      article.appendChild(p);
    }
  }
  buildElements()
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  const noPostsMessage = document.createElement('p');
  noPostsMessage.textContent = 'No blog posts yet...';
  noPostsMessage.id = 'no-posts-message'; // Add an id for styling or identification
  mainElement.appendChild(noPostsMessage);
}
// function noPosts (){
//     alert('No Blog posts yet...')
// }

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList (){
    const localStorageBlog = readLocalStorage()
    if (blogPosts.length === 0 ) {
        noPosts()
    }
    // else (create elements and append on page)
}
// TODO: Call the `renderBlogList` function
renderBlogList()
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function () {
    redirectPage('index.html')
  })