import React, { useEffect, useState } from 'react';
import '../../styles/checkout/detail.css'
import '../../styles/checkout/detail2.css'
import '../../styles/checkout/detail3.css'
import CheckoutNav from '../../components/checkout-components/nav/Nav';
import OrderSummary from '../../components/checkout-components/order-summary-bar/OrderSummary';
import PrcessTracker from '../../components/checkout-components/process-tracker/ProcessTracker';
import DetailsSection from '../../components/checkout-components/details-page';
import CheckoutFooter from '../../components/checkout-components/footer/Footer';
import { useParams } from 'react-router-dom';
import allIndivialPuppies from '../../data/individual-puppy-data/individual_puppy1.json'
import FullScreenLoader from '../../components/loader/FullScreenLoader';


function getObjectById(array: any[], id: string | undefined): any | undefined {
  return array.find(item => item.puppy_id === id);
}
interface Props{
}
const CheckoutDetail: React.FC<Props> = ({}) => {
    const { puppyId } = useParams();
    const [ puppyInfo, setPuppyInfo ] = useState(null)
    const [shippingPrice, setShippingPrice] = useState(0)

    useEffect(() =>{
        document.title = "Find the Right Puppy for Your Family | PuppySpot | PuppySpot";
    }, []);

    useEffect(()=> {
      const puppy = getObjectById(allIndivialPuppies, puppyId)
      if (puppy){
        setPuppyInfo(puppy)
      }else{
        window.location.replace('/page-not-found');
      }
    }, [])

  return (
    <>
      <CheckoutNav/>
      <section className='tw-max-w-7xl tw-mx-auto tw-mb-4 sm:tw-px-6'>
        <PrcessTracker page={"detail"} />


           <div className='tw-flex tw-flex-col tw-justify-between tw-items-start tw-gap-8 lg:tw-flex-row sm:tw-mt-12'>
            
            {
              puppyInfo
              ?
              <>
                <DetailsSection puppyInfo={puppyInfo}/>
                <OrderSummary puppyInfo={puppyInfo} shippingPrice={shippingPrice} passedEssentials={false}/>
              </>
              :
              null
            }



           </div>


      </section>
      <CheckoutFooter />
      {/* <OrderSummary/> */}
      {/* <FullScreenLoader /> */}
    </>
  );
}

export default CheckoutDetail;
