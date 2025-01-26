// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const lightDark = document.querySelector('#toggle')
const body = document.querySelector('.light')
// const circle = document.querySelector('.circle')
let mode = 'light';

lightDark.addEventListener('click', function () {
  if (mode ==='light') {
    mode = 'dark';
    body.setAttribute('class', 'dark')
    document.documentElement.style.setProperty('--circle-color', 'var(--dark-accent)');
  }
  else {
    mode = 'light';
    body.setAttribute('class', '.light')
    document.documentElement.style.setProperty('--circle-color', 'var(--light-accent)');
  }
  localStorage.setItem('mode', mode)
})


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage (){
  const localStorageInfo = localStorage.getItem('blogs')
  if (localStorageInfo === null) {
    return []
  }
  
  return localStorageInfo

}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (objectName) {
  const variableOne = storeLocalStorage()
  variableOne.push(objectName)
  localStorage.setItem('blogs', variableOne)

}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

