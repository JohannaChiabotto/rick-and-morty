import {Character} from "../model/Character";
import CharacterCardComponent from "./CharacterCardComponent";

type GalleryComponentProps = {
    characters:Character[]
}

export default function GalleryComponent(props:GalleryComponentProps ) {
    const characterComponents = props.characters.map((character:Character, index) => {
        return <CharacterCardComponent character={character}key={character.id}></CharacterCardComponent>
    })
    return (<section>{characterComponents}</section>)
}