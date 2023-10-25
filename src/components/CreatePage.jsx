import '../styles/index.scss';
import Preview from './Preview';
import cover2 from '../images/cover2.jpg';
import GetAvatar from './GetAvatar';

const CreatePage = ({
    data,
    error,
    cardUrl,
    errorUrl,
    showUrl,
    handleCreateBtn,
    handleChangeInput,
    avatar,
    updateAvatar,
    project,
    updateProject,
}) => {
    const handleInput = (ev) => {
        const inputId = ev.target.id;
        const value = ev.target.value;
        handleChangeInput(inputId, value);
    };

    const handleForm = (ev) => {
        ev.preventDefault();
    };

    const handleAvatar = (ev) => {
        updateAvatar(ev.target.value);
    };

    const handleProject = (ev) => {
        updateProject(ev.target.value);
    };


    return (
        <section className="preview">
            <div>
                <img className="image preview__cover" src={cover2} alt="" />
                <Preview
                    name={data.name}
                    slogan={data.slogan}
                    demo={data.demo}
                    repo={data.repo}
                    technologies={data.technologies}
                    desc={data.desc}
                    autor={data.autor}
                    job={data.job}
                    image={data.image}
                    photo={data.photo}
                />
            </div>

            <form className="form" onSubmit={handleForm}>
                <h2 className="form__title">Información</h2>

                <fieldset className="fieldset">
                    <legend className="fieldset__legend">
                        <p className="fieldset__legend--subtitle">
                            Cuéntanos sobre el proyecto
                        </p>
                        <hr className="fieldset__legend--line" />
                    </legend>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nombre del proyecto"
                        name="name"
                        id="name"
                        onChange={handleInput}
                        value={data.name}
                        required
                    />
                    <input
                        className="input"
                        type="text"
                        name="slogan"
                        id="slogan"
                        placeholder="Slogan"
                        onChange={handleInput}
                        value={data.slogan}
                        required
                    />
                    <input
                        className="input"
                        type="text" //url
                        name="repo"
                        id="repo"
                        placeholder="Repositorio"
                        onChange={handleInput}
                        value={data.repo}
                        required
                    />

                    <input
                        className="input"
                        type="text"
                        placeholder="Demo"
                        name="demo"
                        id="demo"
                        onChange={handleInput}
                        value={data.demo}
                        required
                    />
                    <p className="error">{errorUrl}</p>
                    <input
                        className="input"
                        type="text"
                        placeholder="Tecnologías"
                        name="technologies"
                        id="technologies"
                        onChange={handleInput}
                        value={data.technologies}
                        required
                    />
                    <textarea
                        className="textarea"
                        type="text"
                        placeholder="Descripción"
                        name="desc"
                        id="desc"
                        onChange={handleInput}
                        value={data.desc}
                        required
                    ></textarea>
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset__legend">
                        <p className="fieldset__legend--subtitle">
                            Cuéntanos sobre la autora
                        </p>
                        <hr className="fieldset__legend--line" />
                    </legend>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        name="autor"
                        id="autor"
                        onChange={handleInput}
                        value={data.autor}
                        required
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Trabajo"
                        name="job"
                        id="job"
                        onChange={handleInput}
                        value={data.job}
                        required
                    />
                    <p className="error">{error}</p>
                </fieldset>

                <section className="btn">
                    <GetAvatar
                        className="btn__project"
                        project={project}
                        updateProject={updateProject}
                        text={'Subir foto del proyecto'}
                        onClick={handleProject}
                    />
                    <GetAvatar
                        className="btn__author"
                        avatar={avatar}
                        updateAvatar={updateAvatar}
                        text={'Subir foto de la autora'}
                        onClick={handleAvatar}
                    />
                </section>
                <section className="create__box">
                    <button className="create__box--btn" onClick={handleCreateBtn}>
                        Crear Tarjeta{' '}
                    </button>
                </section>

                <section className={`card ${showUrl ? 'show' : 'hidden'}`}>
                    <span className="card_message"> La tarjeta ha sido creada: </span>
                    <a
                        href={cardUrl}
                        className="card_URL"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {cardUrl}
                    </a>
                </section>
            </form>
        </section>
    );
};

export default CreatePage;
