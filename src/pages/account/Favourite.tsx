import React, { useEffect, useState } from 'react';
import '../../styles/account.css'
import MyAccountContainer from '../../container/MyAccountContainer';
import MyAccountAuthenticatedContainer from '../../container/MyAccountAuthenticatedContainer';
import AccountSidebar from "../../components/account-components/AccountSidebar";
import MyAccountFavoriteContainer from '../../container/MyAcccountFavorites';
import AllPuppies from '../../data/puppy-data/all_puppies.json'


interface Props{
  page: string;
}
function getItemsByIds<T extends { id: string }>(
  ids: (string )[],
  array: any[]
): T[] {
  return array.filter(item => ids.includes(item.puppy_id));
}

const Favorites: React.FC<Props> = ({page}) => {
  const [likePuppyListID, setLikePuppyListID] = useState(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))
  const [likedItems, setLikedItems] = useState(getItemsByIds(likePuppyListID, AllPuppies))

    useEffect(() =>{
        document.title = "Favorites | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);


  return (
    <main className="account">
        <AccountSidebar page={page} />
        
        <MyAccountFavoriteContainer likedItems={likedItems} likePuppyListID={likePuppyListID} setLikePuppyListID={setLikePuppyListID} />
    </main>
  );
}

export default Favorites;
