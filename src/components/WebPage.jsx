import Aside from "./Aside";
import "../App.css";
import web_aside from "../data/web_aside";

function WebPage() {
  const data = web_aside;
  return (
    <container>
      <Aside data={data} />
      <section className='main_section'>
        <article className='video_article'>
          <iframe
            width='560'
            height='315'
            src={data[0].video}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </article>
        <article className='text_article'>
          <p>
            <h3>Web 입문자를 위한 수업입니다.</h3>
            <ul></ul>
          </p>
        </article>
      </section>
    </container>
  );
}

export default WebPage;
