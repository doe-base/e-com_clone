import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PuppyTrackerContainer from "../container/PuppyTracker";
import Footer from '../components/footer';
import "../styles/puppy-tracker.css"

interface Props{
    
}
const PuppyTracker: React.FC<Props> = ({}) => {
    const { id } = useParams();

    useEffect(() => {
        document.title = 'Puppy Tracker | PuppySpot';
        window.scrollTo({ top: 0 })
    }, []);

    return(
        <>
            <PuppyTrackerContainer id={id}/>
            <Footer />
        </>
    )
}

export default PuppyTracker;