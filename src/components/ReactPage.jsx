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
            <h3>리액트 입문자를 위한 수업입니다.</h3>
            <ul>
              <p>지금 알게 될 것</p>
              <li> 리액트는 사용자 정의 태그를 만드는 기술입니다. </li>
              <li> Props는 컴포넌트의 외부에서 사용하는 입력값입니다. </li>
              <li>State는 컴포넌트 내부에서 사용하는 값입니다. </li>
              <li> 이벤트는 Props를 이용합니다.</li>
              <li> event.preventDefault()를 이용해서 기본동작을 비활성화 할 수 있습니다. </li>
              <li>form을 변경할 때는 Props를 State로 전환 후 onChange를 이용합니다. </li>
            </ul>
          </p>
        </article>
      </section>
    </container>
  );
}

export default ReactPage;
