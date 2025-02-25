import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import AdoptionStatusBox from "../components/AdoptionStatusBox";
import { Oval } from 'react-loader-spinner';

interface Props{
    id: string | undefined;
}

const PuppyTrackerContainer: React.FC<Props> = ({ id }) => {
    const { firebase } = useContext(FirebaseContext);
    const [trackingCode, setTrackingCode] = useState(id);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<any>({})
    const [userNotFound, setUserNotFound] = useState(false)


    const getUserByPaymentID = async (paymentID: string) => {
        if (!firebase) return;

        setLoading(true);
        try {
            const querySnapshot = await firebase.firestore()
                .collection('puppy_orders')
                .where('paymentId', '==', paymentID)
                .get();

            if (querySnapshot.empty) {
                return null;
            }

            const userData = querySnapshot.docs[0].data();
            return userData;
        } catch (error) {
            // console.error('Error fetching user data:', error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setLoading(true);
        if(trackingCode){
            getUserByPaymentID(trackingCode).then(user => {
                if (user) {
                    setUserData(user)
                } else {
                    setUserNotFound(true)
                }
            }).finally(() => setLoading(false));
        }
    };






    
    return (
        <>
            <main>
                <section id="home" className="makeStyles-home">
                    
                    
                    <div className="makeStyles-titleHoler">
                        <h1 className="makeStyles-h1">Puppy Tracker</h1>
                        <div></div> 
                        <span className="makeStyles-p">Enter your tracker ID to see your puppy adoption status.</span>
                    </div>
                    <div className="makeStyles-formSection">
                        <form onSubmit={handleSubmit}>
                            <div className="makeStyles-inputHolder">
                                <input placeholder="Enter your Tracking Code" className="makeStyles-input" value={trackingCode} onChange={(e)=>setTrackingCode(e.currentTarget.value) } />
                                <button type="submit" className="makeStyles-button"><span className="makeStyles-submit">submit</span>
                                    <span className="makeStyles-paperplane">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="adoption-box-loading">
                        {
                            loading
                            ?
                            <Oval
                                visible={true}
                                height="30"
                                width="30"
                                color="#ffffff"
                                ariaLabel="oval-loading"
                                wrapperStyle={{marginLeft: '0.3rem'}}
                                wrapperClass=""
                            />
                            :
                            null
                        }
                    </div>
                    
                    {
                        userData.tracker_approved
                        ?
                            <AdoptionStatusBox userData={userData}/>
                        :
                        null

                    }


                    {/*<div className="sidebar-wrapper">
                        <aside className="sidebar">
                            <button className="close-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="makeStyles-navIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg></button>
                                
                            <section style={{width: "100%", height: "100%"}}>
                                <div className="makeStyles-main">
                                    <div className="makeStyles-img">
                                        <img src="/img/warning.png" alt="warning" style={{width: "100%"}}/>
                                    </div>
                                    <h6 className="makeStyles-p1">Unexpected Error</h6><p className="makeStyles-p3">We are sorry, an unexpected error has occured from our end</p>
                                </div>
                            </section>
                            <div style={{margin: "3rem 0rem 0rem"}}>
                                <a href="/terms-of-service" className="makeStyles-howitworks">Terms and Conditions</a>
                            </div>
                        </aside>
                    </div>*/}
                </section>
            </main>

    
    
        </>

    )
}

export default PuppyTrackerContainer