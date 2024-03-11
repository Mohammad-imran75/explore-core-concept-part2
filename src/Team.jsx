import { useState } from "react"

export default function Team(){
    const [team ,setTeam] = useState(0);

    const teamStyle ={
        border :'3px solid lightblue',
        padding:'20px',
        margin:'20px',
        borderRadius:'15px',
        backgroundColor:'gray',
    }

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button style={{marginLeft:'20px'}} onClick={() =>setTeam(team-1)}>Remove</button>
        </div>
    )
}