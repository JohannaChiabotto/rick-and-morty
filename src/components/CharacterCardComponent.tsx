import {Character} from "../model/Character";

type CharacterCardComponentProps = {
    character:Character
}

export default function CharacterCardComponent (props:CharacterCardComponentProps) {
    return(
        <div>
            <h3>{props.character.name}</h3>
            <img src={props.character.image}></img>
            <p>{props.character.status}</p>
        </div>)
}