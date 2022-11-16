import {Character} from "../model/Character";

type GalleryComponentProps = {
    characters:Character[]
}

export default function GalleryComponent(props:GalleryComponentProps ) {
    const characterComponents = props.characters.map((character:Character) => {
        return <C

    })
}