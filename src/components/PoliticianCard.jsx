import { memo } from "react";

function PoliticianCard({ politician }) {
    console.log("Render card:", politician.name);

    return (
        <div>
            <img
                src={politician.image}
                alt={politician.name}
                width="200"
            />

            <h2>{politician.name}</h2>

            <h4>{politician.position}</h4>

            <p>{politician.biography}</p>
        </div>
    );
}

export default memo(PoliticianCard);