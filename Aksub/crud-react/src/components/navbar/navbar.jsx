import React from 'react'

const routes = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/create',
        text: 'Create',
    },
]

function Navbar() {
    return (
        <>
          <h1>Navbar</h1>
          <ul>
            {
              routes.map(element => {
                return (
                  <li key={element.text}>
                  <a href={element.path}>{element.text}</a>
                  </li>
                )
              })
            }
          </ul>
        </>
    )
}

export default Navbar