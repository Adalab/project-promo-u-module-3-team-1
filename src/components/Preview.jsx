import '../styles/index.scss';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

function Preview({name, slogan, repo, demo, desc, technologies, autor, job}) {
  return (
    <>
      <img className="image preview__cover" src={cover} alt="" />

      <article className="preview__autor">
        <section className="preview__autor--project">
          <p className="line-word">Personal Project Card</p>
          <hr className="line" />
          <h2 className="title">{(name) || "Elegant Workspace"}</h2>
          <p className="slogan">{(slogan) || "Diseños Exclusivos"}</p>
          <p className="desc">
            {(desc)||
              `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Libero, delectus Voluptates at hic aliquam porro ad suscipit
      harum laboriosam saepe earum `}
          </p>

          <p className="technologies">
            {(technologies) || "React JS, MongoDB"}
            <a href={demo} target="_blank" rel="noreferrer">
              <i className="globe fa-solid fa-globe"></i>
            </a>
            <a href={repo} target="_blank" rel="noreferrer">
              <i className="github fa-brands fa-github"></i>
            </a>
          </p>
        </section>

        <figure className="preview__autor--figure">
          <img className="image" src={user} alt="" />
          <figcaption>
            <h3 className="job">{(job) || "Full Stack Developer"}</h3>
            <h2 className="name">{(autor)|| "Emmelie Björklund"}</h2>
          </figcaption>
        </figure>
      </article>
    </>
  )
}

export default Preview;
