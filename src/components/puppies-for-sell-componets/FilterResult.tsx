import React, { useState } from 'react';
import AlertPopup from '../../components/alert-message/AlertMessage';
import PaginationBar from '../../components/puppies-for-sell-componets/PaginationPagebar';
import useAuthListener from '../../hooks/use-auth-listener';
import LoginPopup from "../popups/single-puppy-popups/LoginPopup";


interface Props{
    paginationPage: number;
    totalPages: number;
    puppySinglePageArr: any[];
    filterArray: any[];
}
const FilterResult: React.FC<Props> = ({paginationPage, totalPages, puppySinglePageArr, filterArray}) => {
    const {user} = useAuthListener();

    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * puppySinglePageArr.length));
    const [loginPopup, setLoginPopup] = useState(false)
    const [likePuppyListID, setLikePuppyListID] = useState(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))


    const handleLikePuppy = (puppyId: string) => {
        // Retrieve the current liked puppies from localStorage
        const likedPuppiesString = localStorage.getItem('liked-puppies-id');
        
        // Parse the retrieved value or default to an empty array
        const likedPuppies: string[] = likedPuppiesString ? JSON.parse(likedPuppiesString) : [];
      
        // Check if the puppy ID is already in the array
        if (!likedPuppies.includes(puppyId)) {
          // Add the new puppy ID to the array
          likedPuppies.push(puppyId);
      
          // Save the updated array back to localStorage
          localStorage.setItem('liked-puppies-id', JSON.stringify(likedPuppies));
      
        //   console.log(`Puppy ID ${puppyId} added to liked puppies.`);
        } else {
        //   console.log(`Puppy ID ${puppyId} is already liked.`);
        }
    };
    const handleUnlikePuppy = (puppyId: string) => {
        // Retrieve the current liked puppies from localStorage
        const likedPuppiesString = localStorage.getItem('liked-puppies-id');
    
        // Parse the retrieved value or default to an empty array
        const likedPuppies: string[] = likedPuppiesString ? JSON.parse(likedPuppiesString) : [];
    
        // Check if the puppy ID exists in the array
        if (likedPuppies.includes(puppyId)) {
            // Remove the puppy ID from the array
            const updatedPuppies = likedPuppies.filter(id => id !== puppyId);
    
            // Save the updated array back to localStorage
            localStorage.setItem('liked-puppies-id', JSON.stringify(updatedPuppies));
    
            // console.log(`Puppy ID ${puppyId} removed from liked puppies.`);
        } else {
            // console.log(`Puppy ID ${puppyId} is not in the liked puppies list.`);
        }
    };
    
      
    const handleLike =(e: React.MouseEvent<HTMLDivElement, MouseEvent>, puppyId: string)=>{
        e.preventDefault();
        e.stopPropagation();

        if(!user?.email){
            setLoginPopup(true)
        }else{
            if(likePuppyListID.includes(puppyId)){
                handleUnlikePuppy(puppyId)
            }else{
                handleLikePuppy(puppyId)
            }
            
            setLikePuppyListID(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))
            //In Future Hanlde OPTIMISTICAL like
        }
                        
    }
  return (
    <>
        <div className="puppies-for-sale__results">
            <AlertPopup />
                {
                    filterArray.length <= 0
                    &&
                    <section className="js-puppies-for-sale__no-results puppies-for-sale__no-results">
                        <div className="puppies-for-sale__no-results-title">
                            <h3>Oops!</h3>
                            <p>
                                We apologize for not finding a puppy that matches your search. Don't worry, though! View all our adorable puppies available below.
                            </p>
                        </div>
                    </section>
                }
            <div className="js-puppy-list-container puppies-for-sale__puppy-list puppy-list-small-gap auto-content">
                    {
                    puppySinglePageArr.map((item, index)=>{
                        return (
                            <React.Fragment key={item.id}>

                                <a key={index} href={item.link}>
                                    <div className="card">
                                        <div className="card__display">
                                            {
                                                item.video_icon === 'N/A'
                                                ?
                                                <></>
                                                :
                                                <img 
                                                    className="card__video-icon" 
                                                    alt="Puppy with video" 
                                                    width="30" 
                                                    height="30" 
                                                    src={item.video_icon}
                                                />
                                            }
                                                <img 
                                                    className="card__image ls-is-cached lazyloaded" 
                                                    data-cy="puppy-card-image" 
                                                    data-src={item.image}
                                                    alt={`${item.breed} puppy for sale Snoopy, dog for sale`} 
                                                    width="163" 
                                                    height="163" 
                                                    src={item.image}
                                                    // src='/img/503060929_medium.jpg'
                                                />
                                                {
                                                    item.banner_text === 'N/A'
                                                    ?
                                                    <></>
                                                    :
                                                    <div className="card__banner orange">
                                                        <span>{item.banner_text}</span>
                                                    </div>
                                                }
                                        </div>
                                        <div className="card__details_container">
                                            <div className="card__details">
                                                <p className="name" data-cy="puppy-card-name">
                                                    {item.name}
                                                </p>

                                                <p className="breed">{item.breed}</p>
                                                <p className="age">{item.age} weeks<span className="hidden">old</span></p>
                                            </div>
                                            <div className="card__actions" onClick={(e) =>handleLike(e, item.puppy_id)}>
                                                <button className={`favorite-puppy-circle js-favorite-puppy ${likePuppyListID.includes(item.puppy_id) ? 'favorited' : ''}`} data-puppy={item.puppy_id}></button>
                                            </div>
                                        </div>

                                    </div>
                                </a>

                                {index === randomIndex && 
                                <div style={{padding: "0 4px 4px 0"}} id="container-puppies-for-sale-trust-card">
                                    <div className="card card--small pd-1  bg-cover bg-no-repeat bg-center bg-[#FFFFFF]" style={{backgroundImage: "url(/img/season.webp)"}}>
                                        <div className="w-full h-full flex-col gap-4 flex items-center justify-center "></div>
                                    </div>
                                </div>
                                }
                            </React.Fragment>
                        )
                    })
                    }                                                       

            </div>
            {
                totalPages <= 0 
                ?
                null
                :
                <div className="js-puppy-pagination-container puppies-for-sale__pagination">
                        <PaginationBar currentPage={paginationPage} totalPages={totalPages}/>
                </div>
            }
        </div>

        <LoginPopup loginPopup={loginPopup}  setLoingPopup={setLoginPopup}/>
    </>

  );
}

export default FilterResult;