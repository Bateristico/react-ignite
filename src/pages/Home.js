import React, { useEffect } from 'react';
//redux logic
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesActions';


const Home = () => {
    //fetch games

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    });

    return(
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
