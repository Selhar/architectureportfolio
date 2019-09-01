import React from 'react'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <section>
      <Nav/>
    </section>
    <section id="sobre">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
    <section id="projetos">
      <h1>Projetos</h1> 
    </section>
    <section id="contato">
      CONTATO PLACEHOLDER
    </section>
    <section>
      info footer social media
    </section>

    <style global jsx>{`
      section {
        width: 100vw;
        height: 100vh;
      }
    `}</style>
  </div>
)

export default Home
