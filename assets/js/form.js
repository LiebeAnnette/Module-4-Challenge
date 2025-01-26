// TODO: Create a variable that selects the form element

const selectFormElement = document.querySelector('form');
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const errorElement = document.querySelector('#error');
const handleSubmitButton = document.querySelector('#submit');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

handleSubmitButton.addEventListener('click', function (event) {
  event.preventDefault();

  
  if (!username.value.trim() || !title.value.trim() || !content.value.trim()) {
    errorElement.textContent = 'Please complete all fields before submitting.';
    return;
  }
  
  errorElement.textContent = '';
  
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push({
    username: username.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
  });
  
  // TODO: Set new submission to local storage
  
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

 
  // TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
  redirectPage('blog.html');
});
