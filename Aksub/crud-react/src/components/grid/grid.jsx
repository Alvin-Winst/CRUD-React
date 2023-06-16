import React, { useContext } from 'react'
import './grid.css'
import Card from '../card/card'
import { AppContext } from '../../context/appContext'
import App from '../../App'

function Grid() {
    const {posts} = useContext(AppContext)

    return (
        <div>
                <h1>Posts</h1>
            <div>
                {posts.length == 0?
                    <h1>There are no posts</h1> :
                    posts.map((post) => (
                        <Card key={post.id} id={post.id} title = {post.title} desc={post.desc} />
                    ))
                }
            </div>
        </div>
        
    )
}

export default Grid