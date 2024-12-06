import React, { useEffect, useState } from 'react';
import '../../styles/account.css'
import MyAccountContainer from '../../container/MyAccountContainer';
import MyAccountAuthenticatedContainer from '../../container/MyAccountAuthenticatedContainer';
import AccountSidebar from "../../components/account-components/AccountSidebar";
import MyAccountFavoriteContainer from '../../container/MyAcccountFavorites';
import AllPuppies from '../../data/puppy-data/all_puppies.json'
import MyAccountOrderHistoryContainer from '../../container/MyAccountOrderHistory';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

interface Props{
  page: string;
  userEmail: string;
}
function getItemsByIds<T extends { id: string }>(
    ids: (string )[],
    array: any[]
  ): T[] {
    return array.filter(item => ids.includes(item.puppy_id));
}
const OrderHistory: React.FC<Props> = ({page, userEmail}) => {
    const [puppyList, setPuppyList] = useState<any>([])
    const [orderList, setOrderList] = useState<any>(getItemsByIds(puppyList, AllPuppies))

    useEffect(() =>{
        document.title = "Order History | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);


    async function getPuppyIdsByEmail(email: string) {
        const db = getFirestore(); // Initialize Firestore
        const puppyOrdersRef = collection(db, "puppy_orders"); // Reference to the collection
      
        const q = query(puppyOrdersRef, where("emailInput", "==", email)); // Query for emailInput match
      
        try {
          const querySnapshot = await getDocs(q); // Execute the query
          const puppyIds = new Set<string>(); // Use a Set to store unique puppyId values
      
          querySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.puppyId) {
              puppyIds.add(data.puppyId); // Add to the Set
            }
          });
      
             setPuppyList(Array.from(puppyIds)); // Convert the Set to an array
        } catch (error) {
          // console.error("Error fetching puppy IDs:", error);
        }
      }
      useEffect(()=>{
        getPuppyIdsByEmail(userEmail)
      }, [])
      useEffect(()=> {
        setOrderList(getItemsByIds(puppyList, AllPuppies))
      }, [puppyList])

  return (
    <main className="account">
        <AccountSidebar page={page} />
        
        <MyAccountOrderHistoryContainer orderList={orderList} />
    </main>
  );
}

export default OrderHistory;
