import Aside from "./Aside";

function ReactPage() {
  return (
    <container>
      <Aside />
      <section className='main_section'>
        <article className='video_article'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/AoMv0SIjZL8'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </article>
        <article className='text_article'>
          <p>
            <h3></h3>
            <ul></ul>
          </p>
        </article>
      </section>
    </container>
  );
}

export default ReactPage;
