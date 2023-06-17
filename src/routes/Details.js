import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import './Details.css'

function Detail(props){
    const location=useLocation();
    const navigate = useNavigate();
    const state = location.state;

    useEffect(() => {
        if(location.state === null){
            navigate('/'); //home으로 되돌아 가는 기능
        }
    });
   
    if(location.state){
        return (
            <div className='movie'>
                <div className='movie__detail'>
                    <img src={state.poster} alt={state.title} title={state.title} />
                    <div className='movie__data'>
                        <h3 className="movie__title">{state.title}</h3>
                        <h5 className="movie__year">{state.year}</h5>
                        <p className="movie__summary">{state.summary}</p>
                        {/* <span>{location.state.title}</span> //제목 출력 */}
                        <ul className="movie__genres">
                        {   
                            state.genres.map((genre, index) => {
                                return <li className="movie__genre" key={index}>{genre}</li>;
                            })
                        }
                    </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Detail;