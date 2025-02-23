import React, { useEffect, useState, useContext } from 'react';
import CheckoutNav from '../../components/checkout-components/nav/Nav';
import OrderSummary from '../../components/checkout-components/order-summary-bar/OrderSummary';
import PrcessTracker from '../../components/checkout-components/process-tracker/ProcessTracker';
import TravelSection from '../../components/checkout-components/travel-page';
import OrderSummarySmall from '../../components/checkout-components/order-summary-small/OrderSummarySmall';
import EssentialsSection from '../../components/checkout-components/essentials-page';
import CheckoutFooter from '../../components/checkout-components/footer/Footer';
import { useParams } from 'react-router-dom';
import allIndivialPuppies1 from '../../data/individual-puppy-data/_split_restructured_puppies-data1.json'
import allIndivialPuppies2 from '../../data/individual-puppy-data/_split_restructured_puppies-data2.json'
import allIndivialPuppies3 from '../../data/individual-puppy-data/_split_restructured_puppies-data3.json'
import allIndivialPuppies4 from '../../data/individual-puppy-data/_split_restructured_puppies-data4.json'
import allIndivialPuppies5 from '../../data/individual-puppy-data/_split_restructured_puppies-data5.json'
import allIndivialPuppies6 from '../../data/individual-puppy-data/_split_restructured_puppies-data6.json'
import { FirebaseContext } from '../../context/firebase';
import FullScreenLoader from '../../components/loader/FullScreenLoader';


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


interface Props{
}
const CheckoutEssentials: React.FC<Props> = ({}) => {
  const { firebase } = useContext(FirebaseContext)
  const { puppyId } = useParams();
  const { paymentID } = useParams();
  const [ puppyInfo, setPuppyInfo ] = useState(findItemById(allPuppies, puppyId))
  const [shippingPrice, setShippingPrice] = useState(0)
  const [loading, setLoading] = useState(false)
  const [ paymentInfo, setPaymentInfo ] = useState<any>(null)


    useEffect(() =>{
        document.title = "Find the Right Puppy for Your Family | PuppySpot | PuppySpot";
    }, []);
    useEffect(()=> {
      const puppy = findItemById(allPuppies, puppyId)
      if (puppy){
        setPuppyInfo(puppy)
      }else{
        window.location.replace('/page-not-found');
      }
    }, [])
    async function getItem(documentId: any) {
      if(!firebase){return}
      setLoading(true)
      const query = firebase.firestore().collection('puppy_orders').where('paymentId', '==', documentId);
      query.get()
      .then(snapshot => {
          if (snapshot.empty) {
            window.location.replace('/page-not-found');
            return;
          }
          snapshot.forEach(doc => {
            setPaymentInfo(doc.data());
          });
          setLoading(false)
      })
      .catch(error => {
          setLoading(false)
          window.location.replace('/page-not-found');
      });
    }
    useEffect(()=> {
      getItem(paymentID)
    }, [])
    useEffect(()=>{
      if(!paymentInfo){return}

      var totalCost = 0;
      if(paymentInfo.shippingMethod === 'air'){
          totalCost = paymentInfo.shippingflighCost || 0;
      }else if(paymentInfo.shippingMethod === 'ground'){
          totalCost = paymentInfo.shippinggroundCost || 0;
      }

      if(paymentInfo.shippingpremiumSerivce === true) {totalCost += paymentInfo.shippingpremiumCost || 0}
      if(paymentInfo.tracker_delivery_type === 'Home Delivery') {totalCost += 15 || 0}

      setShippingPrice(totalCost)
    }, [paymentInfo])

  return (
    <>
      <CheckoutNav/>
      <section className='tw-max-w-7xl tw-mx-auto tw-mb-4 sm:tw-px-6'>
        <PrcessTracker page={"essentials"}/>


           <div className='tw-flex tw-flex-col tw-justify-between tw-items-start tw-gap-8 lg:tw-flex-row sm:tw-mt-12'>
           {
              puppyInfo && paymentInfo
              ?
              <>
                <EssentialsSection puppyInfo={puppyInfo} paymentID={paymentID} shippingPrice={shippingPrice}/>

                <OrderSummary puppyInfo={puppyInfo} shippingPrice={shippingPrice} passedEssentials={paymentInfo.passedEssentials}/>
                
                <OrderSummarySmall puppyInfo={puppyInfo} shippingPrice={shippingPrice} passedEssentials={false}/>
              </>
              :
              null
           }
           </div>


      </section>
      {loading ? <FullScreenLoader /> : null}
      <CheckoutFooter />
    </>
  );
}

export default CheckoutEssentials;
