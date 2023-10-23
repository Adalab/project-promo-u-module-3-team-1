import Preview from "./Preview";
import cover from '../images/cover.jpeg';


const CreatePage = (data) => {
    const handleInput = (ev) => {
        handleChangeInput(ev.target.value);

    };

    const handleForm = (ev) => {
        ev.preventDefault();
    }

    return (
        <section className='preview'>
            <img className="image preview__cover" src={cover} alt="" />
            <Preview name={data.name} slogan={data.slogan} demo={data.demo} repo={data.repo} technologies={data.technologies} desc={data.desc} autor={data.autor} job={data.job} image={data.image} photo={data.photo} />


            <form className='form' onSubmit={handleForm}>
                <h2 className='form__title'>Información</h2>

                <fieldset className='fieldset'>
                    <legend className='fieldset__legend'>
                        <p className='fieldset__legend--subtitle'>
                            Cuéntanos sobre el proyecto
                        </p>
                        <hr className='fieldset__legend--line' />
                    </legend>
                    <input
                        className='input'
                        type='text'
                        placeholder='Nombre del proyecto'
                        name='name'
                        id='name'
                        onChange={handleInput}
                        value={data.name}
                    />
                    <input
                        className='input'
                        type='text'
                        name='slogan'
                        id='slogan'
                        placeholder='Slogan'
                        onChange={handleInput}
                        value={data.slogan}
                    />
                    <input
                        className='input'
                        type='text'//url
                        name='repo'
                        id='repo'
                        placeholder='Repositorio'
                        onChange={handleInput}
                        value={data.repo}
                    />

                    <input
                        className='input'
                        type='text'
                        placeholder='Demo'
                        name='demo'
                        id='demo'
                        onChange={handleInput}
                        value={data.demo}
                    />
                    <p className='error'>{errorUrl}</p>
                    <input
                        className='input'
                        type='text'
                        placeholder='Tecnologías'
                        name='technologies'
                        id='technologies'
                        onChange={handleInput}
                        value={data.technologies}
                    />
                    <textarea
                        className='textarea'
                        type='text'
                        placeholder='Descripción'
                        name='desc'
                        id='desc'
                        onChange={handleInput}
                        value={data.desc}
                    ></textarea>
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className='fieldset__legend'>
                        <p className='fieldset__legend--subtitle'>
                            Cuéntanos sobre la autora
                        </p>
                        <hr className='fieldset__legend--line' />
                    </legend>
                    <input
                        className='input'
                        type='text'
                        placeholder='Nombre'
                        name='autor'
                        id='autor'
                        onChange={handleInput}
                        value={data.autor}
                    />
                    <input
                        className='input'
                        type='text'
                        placeholder='Trabajo'
                        name='job'
                        id='job'
                        onChange={handleInput}
                        value={data.job}
                    />
                    <p className='error'>{error}</p>
                </fieldset>

                <section className='btn'>
                    <button className='btn__project'>Subir foto de proyecto</button>
                    <button className='btn__author'>Subir foto de autora</button>
                </section>
                <section className='create__box'>
                    <button className='create__box--btn' onClick={handleCreateBtn}>Crear Tarjeta </button>
                </section>

                <section className={`card ${showUrl ? 'show' : 'hidden'}`}>
                    <span > La tarjeta ha sido creada: </span>
                    <a href={cardUrl} className='' target='_blank' rel='noreferrer'>
                        {cardUrl}
                    </a>
                </section>
            </form>
        </section>
    )
};

export default CreatePage;