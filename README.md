
### Widgets Unlimited: A Mock E-Commerce Site Built with React
#### Note: App was created in 2021, recently updated to incorporate redux toolkit for state management and Material UI for some of the components.
#### Note: App was created in 2021 and has some outdated packages (which will soon be updated), so this is only recommended for demo purposes and/or code evaluation.
#### Running start script from the root level will serve a pre-compiled (server-side rendered) version of the app using a simple express server, on port 3001. Running from the client directory will launch a development server that updates dynamically (using nodemon -- not pre-compiled) on port 3000. Server is not production-ready, but ideas can be borrowed and built upon.
#### This is the Express Server Root Directory. React Project is in the /client directory.
<br />

![Image of Metrics](https://cifmk-3001.csb.app/img/scores.png)

<br />

#### Features:
- Pages: Home, Shop, Contact
- E-commerce (mock)enabled
- Payment processing using Stripe
- User Authentication using Firebase (enabled)
- Redux State Management (Redux Toolkit)
- Accessibility
- Server-side Rendered
- Single Page App with Persistence (via redux persist).
- High Performance Metrics.
- Does not use Typescript (check out some of my other projects for examples using Typescript)

#### Folder Structure:  
- **server.js:** Where the server-side code resides.
- **SSR.js** (server-side rendering): This script is called on post-build, and pre-renders the html.
- **/client:** Where the React Application resides. Created using create-react-app (project follows that basic structure).
