import { useParams } from "react-router-dom"

function Tags() {
    const {id} = useParams();
    return(
        <div>
            <span>{id.tags}</span>
        </div>
    )
}

export default Tags