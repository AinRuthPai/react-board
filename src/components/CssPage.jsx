import Aside from "./Aside";
import css_aside from "../data/css_aside";
import { useParams } from "react-router-dom";

function CssPage() {
  const data = css_aside;
  let { id } = useParams();

  return (
    <container className='main_container'>
      <Aside data={data} />
      <section className='main_section'>
        <article className='video_article'>
          <iframe
            width='560'
            height='315'
            src={data[id].video}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </article>
        <article className='text_article'>
          <p>
            <h3>{data[id].text}</h3>
            <ul></ul>
          </p>
        </article>
      </section>
    </container>
  );
}

export default CssPage;
