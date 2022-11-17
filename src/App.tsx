import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryComponent from "./components/GalleryComponent";
import {CHARACTERS} from "./components/characterRickAndMorty";

function App() {
    const [search, setSearch] = useState('');


    const suchen = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const filtered = () => {
        return search !== '' ? CHARACTERS.filter(character => character.name.toUpperCase().includes(search.toUpperCase())) : CHARACTERS;
    }

    return (
        <div className="App">
            <input type="text" onChange={suchen}/>
            <GalleryComponent characters={filtered()}></GalleryComponent>
        </div>
    );
}

export default App;
