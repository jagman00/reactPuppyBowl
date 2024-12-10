import { useState } from "react";
import { addPlayer } from "../API";

const NewPlayerForm = ({setFetchToggle}) => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState(""); 
    const [imageUrl, setImageUrl] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await addPlayer(name,breed,imageUrl);
        
        if (result && result.success) {
            setName("");
            setBreed("");
            setImageUrl("");
            setFetchToggle((prev) => ! prev);
        } else {
            console.error("Failed to add player!");
        }
    }

    return ( 
    <form onSubmit={handleSubmit}>
        <label>
            Name: {" "}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
            Breed: {" "}
            <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
        </label>
        <label>
            Image Url: {" "}
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
    </form>
    );
}
 
export default NewPlayerForm;