import React, {useState, useEffect} from 'react';
import "../styles/adoption-box.css";
import allIndivialPuppies1 from '../data/individual-puppy-data/_split_restructured_puppies-data1.json'
import allIndivialPuppies2 from '../data/individual-puppy-data/_split_restructured_puppies-data2.json'
import allIndivialPuppies3 from '../data/individual-puppy-data/_split_restructured_puppies-data3.json'
import allIndivialPuppies4 from '../data/individual-puppy-data/_split_restructured_puppies-data4.json'
import allIndivialPuppies5 from '../data/individual-puppy-data/_split_restructured_puppies-data5.json'
import allIndivialPuppies6 from '../data/individual-puppy-data/_split_restructured_puppies-data6.json'


const allPuppies = [
  allIndivialPuppies1,
  allIndivialPuppies2,
  allIndivialPuppies3,
  allIndivialPuppies4,
  allIndivialPuppies5,
  allIndivialPuppies6,
];

function findItemById<T extends { puppy_id: string }>(
      arrays: T[][],
      id: string | undefined
    ): T | undefined {
      for (const array of arrays) {
        const found = array.find(item => item.puppy_id === id);
        if (found) {
          return found;
        }
      }
      return undefined;
}


interface AdoptionStatusBoxProps {
    userData: any;
}

const AdoptionStatusBox: React.FC<AdoptionStatusBoxProps> = ({ userData }) => {

    const [ puppyInfo, setPuppyInfo ] = useState<any>({})
    useEffect(()=>{
        if(userData.puppyId){
            setPuppyInfo(findItemById(allPuppies, userData.puppyId))
        }
    }, [userData])
  

    return (
        <div className="adoption-box">
            <h2>Adoption Status</h2>

            <div className="info-section">
                <h3>Travel Status</h3>
                <p><strong>Current Status:</strong> {userData.tracker_current_status}</p>
                <p><strong>Puppy Location:</strong> {userData.tracker_puppy_location}</p>
                <p><strong>Transport Type:</strong> {userData.tracker_transport_type}</p>
                <p><strong>Delivery Type:</strong> {userData.tracker_delivery_type}</p>
                <p><strong>Estimated Time Left:</strong>{userData.tracker_estimated_time_left}</p>
                <p><strong>Shpping Cost:</strong> ${userData.tracker_trasnport_cost} {!userData.tracker_delivery_paid ? <span style={{color: 'red'}}>(Pending Payment)</span> : <span style={{color: 'green'}}>(Paid)</span>} </p>
                {userData.tracker_message != "" ? <p><strong>Notification:</strong> {userData.tracker_message}</p> : null}
            </div>

            <div className="info-section">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> {userData.firstNameInput} {userData.lastNameInput}</p>
                <p><strong>Email:</strong> {userData.emailInput}</p>
                <p><strong>Phone:</strong> {userData.phoneNumber}</p>
                <p><strong>Address:</strong> {userData.homeAddress}, {userData.city}, {userData.state}, {userData.zipCode}</p>
                <p><strong>Approved:</strong> {userData.tracker_approved == 'No' ? <span style={{color: '#DAA520'}}>Padding</span> : <span style={{color: 'green'}}>Yes</span>} </p>

            </div>

            {
                puppyInfo
                ?
                <div className="info-section">
                    <h3>Puppy Information</h3>
                    <p><strong>Name:</strong> {puppyInfo.puppy_name}</p>
                    <p><strong>Puppy ID:</strong> {puppyInfo.puppy_id}</p>
                    <p><strong>Breed:</strong> {puppyInfo.breed}</p>
                    <p><strong>Gender & Age:</strong> {puppyInfo.sex_and_age}</p>
                    <p><strong>Adoption Fee:</strong> {puppyInfo.price} <span style={{color: 'red'}}>(Pending Payment)</span></p>
                    
                </div>
                :
                null
            }            
            

            <div className="" style={{width: '100%', textAlign: 'center'}}>
                <a href="mailto:support@puppyspotadoption.shop" style={{fontSize: '0.7rem', textDecoration: 'underline'}}>Contact a puppy concierge</a>
                {/*<h3>Status: <span className={`status-${status.toLowerCase()}`}>{status}</span></h3>*/}
            </div>
        </div>
    );
};

export default AdoptionStatusBox;
