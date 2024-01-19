import { Project } from "../models";

export const projects: Project[] = [
  {
    projectId: 1,
    title: "Northcoders News API Interface",
    tagline: "Interactive web forum built with React and vanilla JavaScript",
    type: "frontend",
    isHosted: true,
    imgLink: "nc-news-fe.png",
    siteLink: "https://northcoders-news-api-interface.netlify.app/",
    repository: "https://github.com/gcpearse/northcoders-news-api-interface",
    techStack: [
      "JavaScript",
      "React",
      "Vite",
      "Axios"
    ],
    description: "Northcoders News mimics a real-world forum on which users are able to browse articles, post or delete comments, and vote on other users' content. When users interact with the site, requests are made to my Northcoders News API. The application is built with React in vanilla JavaScript, using Axios for HTTP requests."
  },
  {
    projectId: 2,
    title: "Northcoders News API",
    tagline: "Fully functional and rigorously tested REST API",
    type: "backend",
    isHosted: true,
    imgLink: "nc-news-be.png",
    siteLink: "https://northcoders-news-api-twr1.onrender.com/api",
    repository: "https://github.com/gcpearse/northcoders-news-api",
    techStack: [
      "JavaScript",
      "Node.js",
      "Express",
      "Jest",
      "Supertest",
      "PostgreSQL"
    ],
    description: "The Northcoders News API is a fully functional API using Node.js to interact with a PostgreSQL database. It mimics a real-world forum or news website on which users are able to interact with articles, leave comments, vote, and explore a range of topics."
  },
  {
    projectId: 3,
    title: "Umami - Team Project",
    tagline: "Collaborative web application providing version control for chefs and home cooks",
    type: "frontend",
    isHosted: true,
    imgLink: "umami.png",
    siteLink: "http://ec2-18-130-212-68.eu-west-2.compute.amazonaws.com:3000/",
    repository: "https://github.com/gcpearse/RecipeHub-FE",
    techStack: [
      "TypeScript",
      "React",
      "Redux",
      "Redux Toolkit",
      "Vite",
      "Axios",
      "AWS"
    ],
    description: "Umami is a collaborative recipe site on which users can not only view and post recipes, but also 'fork' (copy) existing recipes, make edits, and then submit their amended version of a recipe to the site. The application offers version control for the cooking community: in essence, it is the culinary world's answer to GitHub."
  },
  {
    projectId: 4,
    title: "CarboMonitor",
    tagline: "API interface for the National Grid's Official Carbon Intensity API",
    type: "frontend",
    isHosted: true,
    imgLink: "carbomonitor.png",
    siteLink: "https://carbomonitor.netlify.app/",
    repository: "https://github.com/gcpearse/carbon-intensity-api-interface",
    techStack: [
      "JavaScript",
      "React",
      "Vite",
      "Axios"
    ],
    description: "CarboMonitor makes requests to the National Grid's Official Carbon Intensity API. This mini project helped me get to grips with using Axios in React to interact with an API and clearly display relevant data on the front end."
  },
  {
    projectId: 5,
    title: "Taskyard",
    tagline: "Simple to-do list app built with React and TypeScript",
    type: "frontend",
    isHosted: true,
    imgLink: "taskyard.png",
    siteLink: "https://taskyard.netlify.app/",
    repository: "https://github.com/gcpearse/to-do-list-typescript",
    techStack: [
      "TypeScript",
      "React",
      "Vite"
    ],
    description: "Taskyard was built by following a tutorial by Piyush Agarwal. The majority of the functionality in Taskyard is shared with Piyush's Taskify app, but there are some additional features. The app allows users to add, edit, delete, or mark tasks as complete, as well as clearing the entire list. I followed this tutorial to cover the basics of building React apps in TypeScript." 
  },
  {
    projectId: 6,
    title: "Name Roulette",
    tagline: "A random name selector built with React and TypeScript",
    type: "frontend",
    isHosted: true,
    imgLink: "name-roulette.png",
    siteLink: "https://name-roulette.netlify.app/",
    repository: "https://github.com/gcpearse/random-name-selector",
    techStack: [
      "TypeScript",
      "React",
      "Vite"
    ],
    description: "Name Roulette is a mini app that allows users to add names to a list, then select one of those names at random. I built this app to practise using TypeScript for React applications, focussing on functionality over aesthetic appeal." 
  },
  {
    projectId: 7,
    title: "GoMapp",
    tagline: "A travel mini app allowing users to mark the countries they have visited or would like to explore",
    type: "frontend",
    isHosted: true,
    imgLink: "gomapp.png",
    siteLink: "https://gomapp.netlify.app/",
    repository: "https://github.com/gcpearse/travel-tracker",
    techStack: [
      "JavaScript",
      "React",
      "Vite"
    ],
    description: "GoMapp was the first app I built in React, helping me to understand state, hooks, and how to pass props down from one component to another. As I develop much more complex applications now, GoMapp serves as a reference point to track my progress over the last few months." 
  }
]
