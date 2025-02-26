import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import '../../styles/popup/popup.css'
import NewBankTransfer from './NewBankTransfer'
import NewPaypal from './NewPaypal'
import NewCashapp from './NewCashapp'
import allIndivialPuppies1 from '../../data/individual-puppy-data/_split_restructured_puppies-data1.json'
import allIndivialPuppies2 from '../../data/individual-puppy-data/_split_restructured_puppies-data2.json'
import allIndivialPuppies3 from '../../data/individual-puppy-data/_split_restructured_puppies-data3.json'
import allIndivialPuppies4 from '../../data/individual-puppy-data/_split_restructured_puppies-data4.json'
import allIndivialPuppies5 from '../../data/individual-puppy-data/_split_restructured_puppies-data5.json'
import allIndivialPuppies6 from '../../data/individual-puppy-data/_split_restructured_puppies-data6.json'


const allPuppies = [
  allIndivialPuppies1,
  allIndivialPuppies2,
  allIndivialPuppies3,
  allIndivialPuppies4,
  allIndivialPuppies5,
  allIndivialPuppies6,
];


function findItemById(arrays, id) {
  if (!id) return undefined;

  for (const array of arrays) {
    const found = array.find(item => item.puppy_id === id);
    if (found) {
      return found;
    }
  }
  return undefined;
}



/*
address (object) - paypal/cashapp/skrill address coming from each production's data base
nameLink (string) - name of the selected game (eg apex, call-of-duty etc)
serviceCode (string) - code name of the selected game (eg apex, cod etc)
serviceTitle (string) - title name of the selected game (eg Apex Stacked Account, COD Account Boosting etc)
choosenPlan (object) - selected package { sold, tire, name, price, props, media, ogprice, percent, date }
...
...
activeGame (string) - the active device (eg xbox, ps, pc)
Service (string) - this is the choosen service gotten from params (eg stacked-account, account-boosting etc)
moreInfo (boolean) - this is to know when the more info form popup is needed
...
*/
const Popup = ({ needed, setNeeded, userData, setAlert,setAlertMessage,setAlertMode}) => {

  const [PageSwitch, setPageSwitch] = useState('')
  const [VerifyTime, setVerifyTime] = useState(false)
  const [emailText, setEmailText] = useState('')
  const [paymentIdText, setPaymentIdText] = useState(0)
  const [PaymentId, setPaymentId] = useState('')
  const [Price, setPrice] = useState(0)


  const closePopup =()=>{
    // window.location.reload()
    setNeeded(false)
  }

    const [ puppyInfo, setPuppyInfo ] = useState({})
    useEffect(()=>{
        if(userData.puppyId){
            setPuppyInfo(findItemById(allPuppies, userData.puppyId))
        }
    }, [userData])



  return (
    <div className={`${needed ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={()=> closePopup()}>
          {/* <RiCloseFill  className="navIcon" /> */}
          <span className="navIcon">×</span>
        </button>
        
        <div className='responsive2padding'>
          {
            userData.gees_option == 'bank'
            ?
              <NewBankTransfer  
                closePopup={closePopup}
                PaymentId={userData.paymentId} 
                Price={userData.gees_amont_to_pay}
                BankName={userData.gees_bank_name}
                BreederName={userData.gees_breeders_name}
                SortCode={userData.gees_sort_code}
                AccountNumber={userData.gees_account_number}
                PuppyName={puppyInfo.puppy_name}

                setAlert={setAlert}
                setAlertMessage={setAlertMessage}
                setAlertMode={setAlertMode}

              />
            :
            userData.gees_option == 'paypal'
            ?

              <NewPaypal  
                  closePopup={closePopup}
                  PaymentId={userData.paymentId} 
                  Price={userData.gees_amont_to_pay}
                  BreederName={userData.gees_breeders_name}
                  PaypalAddress={userData.gees_paypal_address}
                  PuppyName={puppyInfo.puppy_name}

                  setAlert={setAlert}
                  setAlertMessage={setAlertMessage}
                  setAlertMode={setAlertMode}

               />
              :
              userData.gees_option == 'cashapp'
              ?
              <NewCashapp 
                  closePopup={closePopup}
                  PaymentId={userData.paymentId} 
                  Price={userData.gees_amont_to_pay}
                  BreederName={userData.gees_breeders_name}
                  CashappAddress={userData.gees_cashapp_address}
                  PuppyName={puppyInfo.puppy_name}

                  setAlert={setAlert}
                  setAlertMessage={setAlertMessage}
                  setAlertMode={setAlertMode}
              />
              :
              null

          }
          

          
          
        </div>



        
          <div style={{margin: '3rem 0rem 0rem 0rem'}}>
            <a href="/terms-of-use" className="howitworks">Terms and Conditions</a>
          </div>
        

      </aside>
    </div>
  )
}

export default Popup
