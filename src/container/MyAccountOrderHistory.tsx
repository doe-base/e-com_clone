import React, { useState, useContext } from "react";
import { FirebaseContext } from '../context/firebase';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { pages } from '../contants/routes';


interface Props {
    orderList: any;
}

const MyAccountOrderHistoryContainer: React.FC<Props> = ({ orderList }) => {
    const [areYouSureYouWantToUnlike, setAreYouSureYouWantToUnlike] = useState(false)

  return (
    
        <>
            {
                !orderList || orderList.length < 1
                ?
                <section className="account__content order-history">
                    <div className="order-history">
                        <div className="my-puppies__empty">
                            <h3>You don’t have any puppies yet!</h3>
                            <a href="https://www.puppyspot.com/puppies-for-sale" className="button main center">Find a Puppy</a>
                        </div>
                    </div>
                </section>
                :
                <section className="account__content favorite-puppies">
                        <p>{orderList.length} puppies</p>

                        <div className="favorite-puppies__list">
                            {
                                orderList.map((item: any)=>{
                                    return(
                                        <div className="card">
                                            <a href={item.link} className="card--favorite">
                                                <div className="card__display">
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
                            <p>Are you sure you want to <span className="hyperlink">remove</span> this puppy from your list of favorites?</p>
                            <button type="button" className="button main js-confirm">
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

export default MyAccountOrderHistoryContainer;
