import { Project } from "../models";

export const projects: Project[] = [
  {
    projectId: 9,
    title: "Construction Management Tool - Pair Project (WIP)",
    tagline: "Full-stack web application in the early stages of development",
    type: "frontend",
    isHosted: false,
    imgLink: "construction.png",
    siteLink: undefined,
    repository: "https://github.com/gcpearse/Construction-FE",
    techStack: [
      "TypeScript",
      "React",
      "Redux",
      "Redux Toolkit",
      "RTK Query",
      "Vite"
    ],
    description: "I have teamed up with a colleague - Chris - to build this full-stack web application for the construction industry. As Chris develops the back end in C#, this is an opportunity for me to work with previously unfamiliar tools on the front, such as RTK Query."
  },
  {
    projectId: 8,
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
    description: "Northcoders News mimics a real-world forum on which users are able to browse articles, while optionally applying a range of search filters. Logged in users may also post or delete comments and vote on other users' content. When users interact with the site, requests are made to my Northcoders News API. The application is built with React in vanilla JavaScript and uses Axios for HTTP requests."
  },
  {
    projectId: 7,
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
    description: "The Northcoders News API is a fully functional REST API using Node.js to interact with a PostgreSQL database. It mimics a real-world forum or news website on which users are able to interact with articles, leave comments, vote, and explore a range of topics."
  },
  {
    projectId: 6,
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
    projectId: 5,
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
    description: "CarboMonitor makes requests to the National Grid's Official Carbon Intensity API to present up-to-date information about the country's carbon intensity and fuel sources. This was my first opportunity to take advantage of Axios to interact with a third-party API, then clearly display relevant data to users on the front end."
  },
  {
    projectId: 4,
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
    description: "I developed Taskyard by following Piyush Agarwal's tutorial for freeCodeCamp. While the majority of the functionality in Taskyard is shared with Piyush's original Taskify app, I have implemented some additional features. This short project helped me to familiarise myself with the use of TypeScript for React apps."
  },
  {
    projectId: 3,
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
    projectId: 2,
    title: "eTask",
    tagline: "A basic to-do list app built with React and vanilla JavaScript",
    type: "frontend",
    isHosted: true,
    imgLink: "eTask.png",
    siteLink: "https://e-task.netlify.app/",
    repository: "https://github.com/gcpearse/to-do-list",
    techStack: [
      "JavaScript",
      "React",
      "Vite"
    ],
    description: "This was my second React mini app, allowing me to explore more complex functionality and think creatively about building a positive user experience. With eTask, users are able to add tasks to a list, mark tasks as complete, delete individual tasks, or clear the entire list."
  },
  {
    projectId: 1,
    title: "GoMapp",
    tagline: "A travel mini app allowing users to tick off countries they have visited or add them to a wishlist",
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
    description: "GoMapp was the first app I built in React, helping me to understand state, hooks, and how to pass props down from one component to another. As I now build more complex applications, GoMapp serves as a reference point for tracking my progress as a developer."
  }
]
