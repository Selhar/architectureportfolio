import React from 'react'
import Link from 'next/link'


const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='#sobre'>
          <a>Sobre</a>
        </Link>
      </li>
      <li>
        <Link href='#projetos'>
          <a>Projetos</a>
        </Link>
      </li>
      <li>
        <Link href='#contato'>
          <a>Contato</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background-color: black;
        padding: 20px;
        
      }
      ul {
        margin: 0;
        display: flex;
        justify-content: center;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 2em;
      }
      a:focus, a:active {
        border: none;
      }
      a: focus, a:active, a:hover {
        color: red;
      }
    `}</style>
  </nav>
)

export default Nav
