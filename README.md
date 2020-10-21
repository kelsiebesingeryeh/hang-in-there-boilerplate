<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

![Main Page](https://i.imgur.com/o9Uvrbg.png)

We were tasked with creating a random poster generator that would generate a random poster using pre-assigned data as well as generating a unique poster filled with user inputs. When a user clicked on the “show another random poster” button, the poster generated a random image, title and quote. 


### Built With
* HTML
* CSS
* JavaScript


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```


### Installation

1. Clone the repo
```sh
git clone https://github.com/kelsiebesingeryeh/hang-in-there-boilerplate.git
```
2. Install NPM packages
```sh
npm install
```
3. Move into the hang-in-there-boilerplate repo

4. Open web page
```sh
open index.html
```


<!-- USAGE EXAMPLES -->
## Usage

![Main Page](https://i.imgur.com/o9Uvrbg.png)

### Show a random poster generated with stored values
  * Accesses images, titles, and quotes arrays using a randomly generated integer within the array range.
  * Returns these array indices into a class constructor
  * Assigns this instance to variable currentPoster
  * Reloads currentPoster

```javaScript
function reloadPoster() {
  titlesIndex = getRandomIndex(titles);
  quotesIndex = getRandomIndex(quotes);
  imagesIndex = getRandomIndex(images);
  currentPoster = new Poster(images[imagesIndex], titles[titlesIndex], quotes[quotesIndex]);
  showMyPoster();
}
```



![Poster Form](https://i.imgur.com/ggYq2ZK.png)

### Generate a new poster using input values
  * Takes values from the user input fields and creates an instance of the Poster class using these inputs.
  * Assigns variable currentPoster to this new instance
  * Stores input values in the respective arrays for future random poster creation
  * Hides poster form element and shows main poster element
  
```javsScript
function createMyPoster() {
  event.preventDefault();
  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value);

  images.push(imageInput.value);
  titles.push(titleInput.value);
  quotes.push(quoteInput.value);

  showMyPoster();
  backToHome();
}
```



### Save a poster to the mySavedPosters array
  * Takes currentPoster object and pushes it to the mySavedPosters array if it is not already in the array.



![Saved Posters](https://i.imgur.com/g2LBKMs.png)

### View a grid of saved posters
  * When the Show Saved Posters button, iterate over the mySavedPosters array and add sections to the grid element present in the html
reloads the savedPostersGrid after adding the elements.
```javaScript
function openSavedPosters() {
  savedPostersGrid.innerHTML = '';

  for (var i = 0; i < mySavedPosters.length; i++) {
    savedPostersGrid.innerHTML += `
        <section id=${mySavedPosters[i].id} class="mini-poster">
            <img class="poster-img" src=${mySavedPosters[i].imageURL}>
            <h2 class="poster-title">${mySavedPosters[i].title}</h2>
            <h4 class="poster-quote">${mySavedPosters[i].quote}</h4>
        </section>`;
  }

  mainPoster.classList.add('hidden');
  savedPosters.classList.remove('hidden');
}
```



### Delete a poster from the grid on a double click
  * On a double click event, the closest section in the savedPostersGrid is identified using the id assigned from the Poster class constructor. 
  * Iterate over the savedPostersArray and splice out the object whose id matches the sections.
```javaScript
function deletePoster(event) {
  for (var i = 0; i < mySavedPosters.length; i++) {
    var idCheck = mySavedPosters[i].id.toString();

    if (event.target.closest('section').id === idCheck) {
      mySavedPosters.splice(i, 1);
    }
  }
  openSavedPosters();
}
```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kelsiebesingeryeh/hang-in-there-boilerplate/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Names - [Matthew Dean](deanma95@gmail.com), [Kelsie Besinger Yeh](kelsiebesinger@gmail.com)

Project Link: [https://github.com/kelsiebesingeryeh/hang-in-there-boilerplate](https://github.com/kelsiebesingeryeh/hang-in-there-boilerplate)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

  * Scott Ertmer - Project manager - Pretty cool!
  * Hilary Lewis - Formal code review
  * Adam Vinueza - Mentor
  * Taylor Johnson - Troubleshooting


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Saved Posters](https://ibb.co/gtPXsZG)
[Main Page](https://ibb.co/Sr7mTwc)
[Poster Form](https://ibb.co/L8YKJ1m)

