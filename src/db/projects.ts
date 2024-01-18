import { Project } from "../models";

export const projects: Project[] = [
  {
    projectId: 1,
    title: "Northcoders News API",
    tagline: "Fully functional API built in Node.js",
    type: "back-end",
    isHosted: true,
    imgLink: "nc-news-be.png",
    siteLink: "https://northcoders-news-api-twr1.onrender.com/api",
    repository: "https://github.com/gcpearse/northcoders-news-api",
    techStack: [
      "JavaScript",
      "Express",
      "Jest",
      "Supertest"
    ],
    description: "The Northcoders News API is a fully functional API using Node.js to interact with a PostgreSQL database. It mimics a real-world forum or news website on which users are able to interact with articles, leave comments, vote, and explore a range of topics."
  },
  {
    projectId: 2,
    title: "Northcoders News API Interface",
    tagline: "Real-world forum built in React",
    type: "front-end",
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
    description: "Northcoders News mimics a real-world forum on which users are able to browse articles, post or delete comments, and vote on other users' content. When users interact with the site, requests are made to my Northcoders News API."
  },
  {
    projectId: 3,
    title: "Umami",
    tagline: "The front-end repository for team HypeScript's group project",
    type: "front-end",
    isHosted: true,
    imgLink: "umami.png",
    siteLink: "http://ec2-18-130-212-68.eu-west-2.compute.amazonaws.com:3000/",
    repository: "https://github.com/gcpearse/RecipeHub-FE",
    techStack: [
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Vite",
      "Axios",
      "AWS"
    ],
    description: "Umami is a collaborative recipe site on which users can not only view and post recipes, but also 'fork' (copy) existing recipes, make edits, and then submit their amended version of a recipe to the site. The application offers version control for the cooking community: in essence, it is the culinary world's answer to GitHub."
  }
]
