import React, { useEffect, useState } from 'react';
import CheckoutNav from '../../components/checkout-components/nav/Nav';
import OrderSummary from '../../components/checkout-components/order-summary-bar/OrderSummary';
import PrcessTracker from '../../components/checkout-components/process-tracker/ProcessTracker';
import TravelSection from '../../components/checkout-components/travel-page';
import OrderSummarySmall from '../../components/checkout-components/order-summary-small/OrderSummarySmall';
import { useParams } from 'react-router-dom';
import allIndivialPuppies from '../../data/individual-puppy-data/individual_puppy1.json'


function getObjectById(array: any[], id: string | undefined): any | undefined {
  return array.find(item => item.puppy_id === id);
}

interface Props{
}
const CheckoutTravel: React.FC<Props> = ({}) => {
  const { puppyId } = useParams();
  const [ puppyInfo, setPuppyInfo ] = useState(getObjectById(allIndivialPuppies, puppyId))
    useEffect(() =>{
        document.title = "Find the Right Puppy for Your Family | PuppySpot | PuppySpot";
    }, []);

  return (
    <>
      <CheckoutNav/>
      <section className='tw-max-w-7xl tw-mx-auto tw-mb-4 sm:tw-px-6'>
        <PrcessTracker page={"travel"}/>


           <div className='tw-flex tw-flex-col tw-justify-between tw-items-start tw-gap-8 lg:tw-flex-row sm:tw-mt-12'>
            
              <TravelSection />

              <OrderSummary puppyInfo={puppyInfo}/>

           </div>


      </section>
      <CheckoutNav />
      <OrderSummarySmall/>
    </>
  );
}

export default CheckoutTravel;