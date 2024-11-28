import React, { useState, useContext } from "react";
import { FirebaseContext } from '../context/firebase';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { pages } from '../contants/routes';


interface Props {
    likedItems: any[];
    likePuppyListID: any;
    setLikePuppyListID: React.Dispatch<any>;
}
const MyAccountFavoriteContainer: React.FC<Props> = ({likedItems, likePuppyListID, setLikePuppyListID}) => {
    const [areYouSureYouWantToUnlike, setAreYouSureYouWantToUnlike] = useState(false)
    const [puppyToRemove, setPuppyToRemove] = useState('')
    const [loginPopup, setLoginPopup] = useState(false)

    
    const triggerUnlike =(e: any, puppyID: string)=>{
        e.preventDefault()
        e.stopPropagation();
        setAreYouSureYouWantToUnlike(true)

        if(likePuppyListID.includes(puppyID)){
            setPuppyToRemove(puppyID)
        }else{
            handleLikePuppy(puppyID)
        }
    }


    const handleLikePuppy = (puppyId: string) => {
        const likedPuppiesString = localStorage.getItem('liked-puppies-id');
        
        const likedPuppies: string[] = likedPuppiesString ? JSON.parse(likedPuppiesString) : [];
      
        if (!likedPuppies.includes(puppyId)) {
          likedPuppies.push(puppyId);
      
          localStorage.setItem('liked-puppies-id', JSON.stringify(likedPuppies));

          setLikePuppyListID(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))
          setAreYouSureYouWantToUnlike(false)
      
        } else {
        //   console.log(`Puppy ID ${puppyId} is already liked.`);
        }
    };
    const handleUnlikePuppy = (puppyId: string) => {
        const likedPuppiesString = localStorage.getItem('liked-puppies-id');
    
        const likedPuppies: string[] = likedPuppiesString ? JSON.parse(likedPuppiesString) : [];
    
        if (likedPuppies.includes(puppyId)) {
            const updatedPuppies = likedPuppies.filter(id => id !== puppyId);
    
            localStorage.setItem('liked-puppies-id', JSON.stringify(updatedPuppies));
            
            setLikePuppyListID(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))
            setAreYouSureYouWantToUnlike(false)
    
        } else {
            // console.log(`Puppy ID ${puppyId} is not in the liked puppies list.`);
        }
    };


  return (
    
        <>
            {
                !likedItems || likedItems.length < 1
                ?
                <section className="account__content favorite-puppies">
                    <div className="account__no-puppies js-account__no-puppies " style={{width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                        <picture className="">
                            <img id="" alt="" className=" lazyloaded" data-cy="" data-src="/img/account/doghouse.svg" loading="lazy" src="/img/account/doghouse.svg" style={{marginBottom: '1.5rem'}}/>
                        </picture>

                        <h3 style={{marginBottom: '0.5rem'}}>Your best friend is still waiting for you.</h3>
                        <a href={pages.PUPPIES_FOR_SELL} className="button main center">Search for puppies</a>
                    </div>
                </section>
                :
                <section className="account__content favorite-puppies">
                        <p>{likedItems.length} puppies</p>

                        <div className="favorite-puppies__list">
                            {
                                likedItems.map((item: any)=>{
                                    return(
                                        <div className="card">
                                            <a href={item.link} className="card--favorite">
                                                <div className="card__display">
                                                    <div onClick={(e)=>triggerUnlike(e, item.puppy_id)} className={`favorite-puppy js-favorite-puppy ${likePuppyListID.includes(item.puppy_id) ? 'favorited' : ''}`} data-puppy={item.puppy_id} data-reload="true"></div>
                                                    <img className="card__image" src={item.image} alt={`${item.breed} puppy for sale ${item.name}, dog for sale`} />
                                                </div>
                                            </a>

                                            <div className="card__details">
                                                <p className="name">{item.name}</p>
                                                <p className="breed">{item.breed}</p>
                                                <p className="age">{item.age} week{Number(item.age) < 2 ? '' : 's'}</p>
                                            </div>

                                            <a className="js-funnel-cookie button main center card__cta truncate" href={`/shop/checkout/details/${item.puppy_id}`} data-puppy={item.puppy_id} data-funnel="Favorite">
                                                Take me home
                                            </a>
                                        </div>
                                    )
                                })
                            }



                        </div>
                </section>
            }




            <div className={`white-modal js-white-modal white-modal--confirm hidden modal-checkout`}>
                <div className="white-modal__wrapper">
                    <div className="white-modal__close">
                            <a className="js-close-modal">
                                <picture className="">
                                    <img loading="lazy" alt="" id="" className="" src="/img/puppy-listings/menu-close.svg" />
                                </picture>
                            </a>
                    </div>
                    <div className="white-modal__content">
                        <section>
                        <h3>Are you sure you want to remove this puppy from your cart?</h3>
                        <p></p>
                        <button type="button" className="button main js-confirm">
                            Yes, remove
                        </button>
                        <button type="button" className="button ghost js-cancel">
                            Cancel
                        </button>
                    </section>
                    </div>
                </div>
            </div>


            <div className={`white-modal js-white-modal white-modal--confirm ${areYouSureYouWantToUnlike || 'hidden'} modal-favorite`}>
                <div className="white-modal__wrapper">
                    <div className="white-modal__close">
                        <a className="js-close-modal" onClick={()=>setAreYouSureYouWantToUnlike(false)}>
                            <picture className="">
                                <img loading="lazy" alt="" id="" className="" src="/img/puppy-listings/menu-close.svg" />
                            </picture>
                        </a>
                    </div>
                    <div className="white-modal__content">
                        <section>
                            <h3 style={{margin: '1.3rem 0'}}>Remove <span className="js-puppy-name"></span> from favorites?</h3>
                            <p>Are you sure you want to <span className="hyperlink" onClick={()=> handleUnlikePuppy(puppyToRemove)}>remove</span> this puppy from your list of favorites?</p>
                            <button type="button" className="button main js-confirm" onClick={()=> handleUnlikePuppy(puppyToRemove)}>
                                Yes, remove
                            </button>
                            <button type="button" className="button ghost js-cancel" onClick={()=>setAreYouSureYouWantToUnlike(false)}>
                                Cancel
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    
  );
};

export default MyAccountFavoriteContainer;
