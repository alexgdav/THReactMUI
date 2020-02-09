
### Process
-   render `ListCard` component without individual sections
-   add `<header>` and `<ul>` sections
-   test `themeObj` capability and set up basic `ListCard.scss`
-   format `<li>` items
-   reformat `Button` to not interfere with `ListCard` (add margin, display: block)
-   implement and check the beginnings of basic themes (dark, light, default)
-   complete `ListCard` stories
-   add `._variables.scss` file to standardize colors, and import into other .scss files
-   fully implement Dark Theme to spec image (see next section)

#### Dark Theme:
In order to fully match the Dark Theme to what is pictured in the spec, the background attribute of the App component and/or the background attribute of the `component-list <div>` needs to be changed to black.<br/>
That can't be done just by setting the `theme` prop to dark or light in the `ListCard` component (as written in the spec). Setting only that prop will only change the card itself, because props cannot be passed from child to parent components. <br/>
In order to match the image, I added `this.whichtheme` to the `App` constructor (currently manually set to light), and passed that to the `List Card` instead. To add light and dark classes to the `App` and `component-list` so their backgrounds can be changed, I set `const divClass = App component-list ${this.whichtheme}`.




### Instructions:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

##### `npm start`

Runs the app in development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br/>
You will also see any lint errors in the console.

##### `npm run storybook`

Runs the Storybook style guide
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

#### Setup

-   Clone this repository
-   Npm install
-   Npm run start
-   Npm run storybook
