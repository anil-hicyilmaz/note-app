import { useState } from "react";

export default function ConditionalStateVisualizer() {

    const [gender, setGender] = useState<string>("");
    const [name, setName] = useState<string>("");

    const genderStyle = {
        backgroundColor: gender === "male" ? "#1a4b6e" : "#c2a4d6",
        paddingBottom: "10px"
    }

    function NameDisplayer(props: { name: string, gender: string }) {
        if (props.name === "") {
            if (props.gender === "male") {
                return <h1>John</h1>;
            } else {
                return <h1>Jane</h1>;
            }
        }
        return <h1>{props.name}</h1>;
    }

    return (
        <div style={genderStyle}>
            <h2>Conditional State Visualizer</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <NameDisplayer name={name} gender={gender} />
            
            <button 
              className="btn btn-primary" 
              onClick={() => setGender("male")}
              style={{
                opacity: 0.9,
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                margin: '0 8px',
                padding: '8px 16px',
                borderRadius: '4px'
              }}
            >Male</button>
            <button 
              className="btn btn-error" 
              onClick={() => setGender("female")}
              style={{
                opacity: 0.9,
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
                margin: '0 8px',
                padding: '8px 16px',
                borderRadius: '4px'
              }}
            >Female</button>
        </div>
    );
}

