import {BsFillSuitHeartFill} from "react-icons/bs";
import './HeartContainer.css'

interface HeartContainerProps {
    numHearts: number
}

const HeartContainer = ({numHearts}: HeartContainerProps) => {
    const displayHearts = Array(numHearts).fill(<BsFillSuitHeartFill color="#FA6363" style={{marginRight: "3px", marginTop: "3px"}}/>);
    
    return (
        <div id="heart-container">
            {displayHearts}
        </div>
    )
}

export default HeartContainer;