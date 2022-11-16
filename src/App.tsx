import React from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryComponent from "./components/GalleryComponent";
import {CHARACTERS} from "./components/characterRickAndMorty";

function App() {
  return (
    <div className="App">
      <GalleryComponent characters={CHARACTERS}></GalleryComponent>
    </div>
  );
}

export default App;
