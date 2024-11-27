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
import allIndivialPuppies1 from '../../data/individual-puppy-data/_split_restructured_puppies-data1.json'
import allIndivialPuppies2 from '../../data/individual-puppy-data/_split_restructured_puppies-data2.json'
import allIndivialPuppies3 from '../../data/individual-puppy-data/_split_restructured_puppies-data3.json'
import allIndivialPuppies4 from '../../data/individual-puppy-data/_split_restructured_puppies-data4.json'
import allIndivialPuppies5 from '../../data/individual-puppy-data/_split_restructured_puppies-data5.json'
import allIndivialPuppies6 from '../../data/individual-puppy-data/_split_restructured_puppies-data6.json'
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
const CheckoutDetail: React.FC<Props> = ({}) => {
    const { puppyId } = useParams();
    const [ puppyInfo, setPuppyInfo ] = useState<any>(null)
    const [shippingPrice, setShippingPrice] = useState(0)

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
