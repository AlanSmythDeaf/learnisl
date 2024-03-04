# Testing

Return back to the [README.md](README.md) file.

In this section, is the testing page, I believe I did my best that I have tested each pages.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FAlanSmythDeaf.github.io%2Flearnisl%2Findex.html) | ![screenshot](documentation/validation/html-validator-index.png) | Document checking completed. No errors or warnings to show. |
| Game | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Falansmythdeaf.github.io%2Flearnisl%2Fgame.html) | ![screenshot](documentation/validation/html-validator-game.png) | Document checking completed. No errors or warnings to show. |
| howtoplay | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Falansmythdeaf.github.io%2Flearnisl%2Fhowtoplay.html) | ![screenshot](documentation/validation/html-validator-howtoplay.png) | Document checking completed. No errors or warnings to show. |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2FAlanSmythDeaf.github.io%2Flearnisl) | ![screenshot](documentation/validation/css-validator.png) | No Errors |


### JavaScript
I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/validation/js-validator.png) | One warning 145 A leading decimal point can be confused with a dot: '.5'. - One undefined variable 185 swal & 191 swal. |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home/index | Game | How to play | Notes |
| --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browser/chrome-index.png) | ![screenshot](documentation/browser/chrome-game.png) | ![screenshot](documentation/browser/chrome-howtoplay.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser/firefox-index.png) | ![screenshot](documentation/browser/firefox-game.png) | ![screenshot](documentation/browser/firefox-howtoplay.png) | Works as expected |
| Edge | ![screenshot](documentation/browser/edge-index.png) | ![screenshot](documentation/browser/firefox-game.png) | ![screenshot](documentation/browser/firefox-howtoplay.png) |  Works as expected |

## Responsiveness
I've tested my deployed project on multiple devices to check for responsiveness issues.

- Mobile Phone

| Index/Home | Game  | How to play |
| --- | --- | --- |
| ![screenshot](documentation/Responsive/mobile-index-responsive.jpg) | ![screenshot](documentation/Responsive/mobile-game-responsive.jpg) | ![screenshot](documentation/Responsive/mobile-howtoplay-responsive.jpg) | 

- Tablet (Ipad Mini)

| Index/Home | Game  | How to play |
| --- | --- | --- |
| ![screenshot](documentation/Responsive/tablet-index-responsive.png) | ![screenshot](documentation/Responsive/tablet-game-responsive.png) | ![screenshot](documentation/Responsive/tablet-howtoplay-responsive.png) | 

- Laptop / Desktop

| Index/Home | Game  | How to play |
| --- | --- | --- |
| ![screenshot](documentation/Responsive/desktop-index-responsive.jpg) | ![screenshot](documentation/Responsive/desktop-game-responsive.jpg) | ![screenshot](documentation/Responsive/desktop-howtoplay-responsive.jpg) | 

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

- Desktop

| Page | Screenshot | Notes |
| --- | --- | --- |
| Home / Index | ![screenshot](documentation/lighthouse/index-lighthouse.png) | Serve images in nextgen formats - Serve static assets with an efficient cache policy - Links do not have descriptive text |
| Game| ![screenshot](documentation/lighthouse/game-lighthouse.png) | Serve images in nextgen formats - Serve static assets with an efficient cache policy - Image elements do not have explicit width and height|
| How to play | ![screenshot](documentation/lighthouse/howtoplay-lightouse.png) | Serve images in nextgen formats - Serve static assets with an efficient cache policy |

- Mobile

| Page | Screenshot | Notes |
| --- | --- | --- |
| Home / Index | ![screenshot](documentation/lighthouse/mobile-index-lighthouse.png) | Serve images in nextgen formats - Serve static assets with an efficient cache policy |
| Game | ![screenshot](documentation/lighthouse/mobile-game-lighthouse.png) | Serve images in nextgen formats - Avoid large layout shifts - Largest Contentful Paint element - Image elements do not have explicit width and height - Serve static assets with an efficient cache policy |
| /how to playGallery | ![screenshot](documentation/lighthouse/mobile-howtoplay-lighthouse.png) | Serve images in nextgen formats - Serve static assets with an efficient cache policy |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to understand where to go, so that I can either play the quiz or learn how to play the game. | ![screenshot](documentation/browser/chrome-index.png) |
| As a new site user, I would like to be able to play the quiz easily. | ![screenshot](documentation/browser/chrome-game.png) |
| - As a returning site user, I would like to do the quiz easily over and over again and hopefully get 10 out of 10.. | ![screenshot](documentation/user-story-score.png) |

## Bugs

| Home / Index | Game | How to play |
| --- | --- | --- |
| ![screenshot](documentation/bug/bug-index.png) | ![screenshot](documentation/bug/bug-game.png) | ![screenshot](documentation/bug/bug-howtoplay.png) |

There were bugs throughout the project but unfortunely I didn't manager to screenshot any of the issue, As I can recall I had issue 

- With the images not changing through out the quiz, the issue was that in JS the questions part, the images area i.e. 'image: "assets/images/isla.png",' i forgot to put a comma in the rest of it.

- 'CurrentQuestion' was used before it was declared which is illegal for 'let' variables so I move the it above the 'questionImg.src'

## Unfixed Bugs

There are no remaining bugs that I am aware of.
