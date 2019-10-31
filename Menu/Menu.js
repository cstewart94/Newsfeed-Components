/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.
  const hamburgerMenu = document.querySelector('.header');

function createMenu (array) {
const menuDiv = document.createElement('div');
const eachItem = document.createElement('ul');

menuDiv.appendChild(eachItem);

menuDiv.classList.add('menu')

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
array.forEach(item => {
  const menuItems = document.createElement('li');
  menuItems.textContent = item;
  eachItem.appendChild(menuItems);
});

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
const menuB = document.querySelector('.menu-button');

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuB.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
    console.log('clicked');
  });

  // Step 5: return the menu component.
return menuDiv;
}
  // Step 6: add the menu component to the DOM.
  hamburgerMenu.appendChild(createMenu(menuItems));