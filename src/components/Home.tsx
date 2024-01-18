const Home: React.FC = () => {
  return (
    <section>
      <div className="mobile-header"></div>
      <article className="contents-wrapper">
        <div className="profile-wrapper">
          <div className="text-wrapper">
            <span>Hello</span>
            <h1>I'm Glen Pearse</h1>
            <h2>Junior Software Developer</h2>
            <p>Software development allows me to channel my creativity and express my imagination in a precise way. There is something immensely satisfying about seeing an application take shape before your eyes, and knowing that you built it from the ground up.</p>
            <p>Above all, what I love about development is that each day is an opportunity to learn something new in a complex, fast-paced, and relentlessly innovative field.</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img
            className="profile-img"
            src="src/assets/github.jpg"
            alt="A GitHub icon carved out of wood" />
        </div>
      </article>
      <div className="btn-wrapper">
        <button data-front="View my projects" data-back="Go">View my projects</button>
      </div>
    </section>
  )
}

export default Home
