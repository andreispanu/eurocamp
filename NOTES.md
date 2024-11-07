write any notes here

--Test section 1: Review the `eurocamp_api` database and make notes on the current structure and state of the database. How would you improve it using relational database best practices? We're mainly interested in how you would improve the database theoretically

The Eurocamp database has three tables: users, parcs and bookings. 
We can perform GET/POST/DELETE operations on these tables via Rest API endpoints.

The data structure is presented as an array of objects with this shape and types: 

type user = {
    id: string;
    name: string;
    email: string;
}

type parcs = {
    id: string;
    name: string;
    description: string;
}

type bookings = {
    id: string;
    user: string;
    parc: string;
    bookingdate: string;
    comments: string;
}

Improvement sugestions:
In the bookings name fields we can improve the consistency and update the name to booking_date instead of bookingdate to improve readability.
We need to make sure that fields like description and comments have a maximum allowed length so excesive lengths of strings will not be allowed.


--Test section 2: Brief explanation of the latest practices in your respective field of expertise.
In the attached test I have been trying to demonstrate my aquired skills and best practice knowledge when building a react frontend application.
The principles and technologies that i have used are part of the modern ecosystem and they include:
>The latest version of React Js that was delivered via a create-react-app that respects the component based architecture, where we split the components into smaller and reusable elements that can be reused and reinserted in the application. This would improve consistency as well as facilitate the overall build and testing. 
>Our React app includes Typescript that provides an additional layer of avoiding common js data errors by type safety so we are certain that the shape of the data is controlled.
>Using Material UI has dramatically improved the speed with which I was able to construct the UI elements as we are relying on a platform that is well maintained, secure, well documented and has features like accessibility in mind already included. The design is also responsive, Mobile first so the application can be accessed on different devices. Other systems that can be used are building up components and customizing them by using Tailwind Css and also creating a Component Library which would be the basis for a reusable and easily maintainable and consistent apps cluster. The components can also be uploaded into Storybook so different stakeholders can have access to it.  
>Using libraries like React Query / Axios has certainly sped up the comunication with the API while providing a layer of security and quick, easy handling of the common issues/features. By using React Query the catching is already built into the mechanism, also the error handling is very easy to implement. Will no longer need to use the useeffect hook to fetch the data and then build different scenarios for on caching for example. 
>I have not used it here but Next js is a very good option as a React framework that is using SSR (for dynamic pages) and SSG (for static pages ) also is recommended for cases where SEO optimization is required. 
>Testing libraries like Cypress will improve the stability of the app and ensure future updates are prevented from introducing any bugs or breaking the application. 


--Test section 3:

The Frontend parts are located in the "frontend" folder. There is a create react app with typescript that handles the Frontend. Material UI is also used for displaying the UI elements. 

So before the project is initiated, we have to run "yarn install" into the frontend folder. After the depencendies have been installed, then we should run "yarn start" for the app to start. 

When the project is ran, the first page loaded will be the dashboard section that contains 3 cards (Users, Parcs and Bookings).
By clicking on each one, router will redirect to the appropriate page. The page will be populated with data from the API.

The "Users" section is the one that I have managed to finish in the given time, meaning we can add and delete users. 
The same process should be applied for the Parcs and Bookings pages.

A Snackbar will be displayed when the operation has been successful and also when the API encounters an error either fetching the list of users, creating a new user or deleting one. 
By default creating an user will send the same data (hardcoded) to the backend for now (user name: Andrei Spanu). Normally a form that contains the required data as inputs will be presented. In our case those would be user name and email. 
After the form validation passes the user name / email will be picked up and sent over to the database. 

I have reused as many components as possible: tables, buttons, cards, page description (called header) section, etc. so this helped in creating the app sections very quickly.
CRUD operations are being performed with React Query hence catching is handled by it automatically. When a Create/Delete operation has been performed, the query is invalidated hence React Query will pull the new data and the table will be updated.

Added a few tests for the following components: reusableButton, reusableTable and the Dashboard page. These tests can be run by opening a new terminal tab and then running the "yarn cypress open" command in the frontend folder.

I hope this test will run smoothly on your machine, if there are any issues please let me know.
Thank you, Andrei