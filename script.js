//your code here
// Array of band names
let bandNames = ['The Rolling Stones', 'Nirvana', 'The Beatles', 'Red Hot Chili Peppers', 'Metallica', 'Pink Floyd'];

// Function to remove articles from a band name
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '');
}

// Sorting band names without articles
let sortedBandNames = bandNames.sort((a, b) => {
  const nameA = removeArticles(a).toLowerCase();
  const nameB = removeArticles(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Getting the <ul> element by its id
const bandList = document.getElementById('band');

// Clearing any existing content inside the <ul> element
bandList.innerHTML = '';

// Adding sorted band names as <li> elements inside the <ul> element
sortedBandNames.forEach((band) => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});

