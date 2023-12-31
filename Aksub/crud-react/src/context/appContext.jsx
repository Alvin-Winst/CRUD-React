import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import React from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((res) => {
                setPosts(res.data);
            })
    }, []);

    function createPost(post) {
        axios.post('http://localhost:3000/posts', post).then(() => {
            alert('success insert data');
            setPosts([...posts, post]);
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <AppContext.Provider value={{ posts, setPosts, createPost }}>
            {children}
        </AppContext.Provider>
    )
}