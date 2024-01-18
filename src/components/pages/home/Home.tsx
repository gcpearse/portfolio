import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <section>
      <article className="contents-wrapper">
        <div className="profile-wrapper">
          <div className="text-wrapper">
            <span>Hello</span>
            <h1>I'm Glen Pearse</h1>
            <h2>Junior Software Developer</h2>
            <p>Software development allows me to channel my creativity and express my imagination in a precise way. There is something immensely satisfying about seeing an application take shape before your eyes, and knowing that you built it from the ground up.</p>
            <p>Above all, what I love about development is that each day is an opportunity to learn something new in a complex, fast-paced, and relentlessly innovative field.</p>
            <p>For each project on this site, my goal has been to create elegant, user-friendly designs supported by clean, readable code.</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img
            className="profile-img"
            src="/github.jpg"
            alt="A GitHub icon carved out of wood" />
        </div>
      </article>
      <div className="btn-wrapper">
        <Link to="/projects">
          <button>View my projects</button>
        </Link>
      </div>
    </section>
  )
}

export default Home
