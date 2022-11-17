import React, { useState, useEffect, component } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, ACTION } from "./components/config";
import Action from "./components/Action";
import axios from "axios";
import "./ActionMore.css";


function ActionMore() {

    const [actions, setAction] = useState([]);
    const [loadMorePage, setLoadMorePage] = useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}${ACTION}&api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setAction([...actions, ...response.results]);
                setLoadMorePage(response.page)
            });
    }

    const loadMore = () => {

        const endpoint = `${API_URL}${ACTION}&api_key=${API_KEY}&language=en-US&page=${loadMorePage + 1}`;
        fetchMovies(endpoint)
    }
    return(
        <div className="action">
            
            <div className="action_container">
            <h1 className="ActionMore">Action</h1>
                    {actions && actions.map((action, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Action
                                    image={
                                        action.poster_path
                                            ? `${IMAGE_BASE_URL}w500/${action.poster_path}`
                                            : null
                                    }
                                    key={action.id}
                                    id={action.id}
                                />
                            </React.Fragment>
                        );
                    })}
            </div>
            <div className="btn_container">
                <button className="Morebtn" onClick={loadMore}>More</button>
            </div>
    </div>
    )
}

export default ActionMore;