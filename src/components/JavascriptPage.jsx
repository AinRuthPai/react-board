import Aside from "./Aside";

function JavascriptPage() {
  return (
    <container>
      <Aside />
      <section className='main_section'>
        <article className='video_article'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/dPRtcRwKo-Y'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </article>
        <article className='text_article'>
          <p>
            <h3>JavaScript 입문자를 위한 수업입니다.</h3>
            <ul></ul>
          </p>
        </article>
      </section>
    </container>
  );
}

export default JavascriptPage;
