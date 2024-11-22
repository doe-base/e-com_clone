import React, { useState } from 'react';
import AlertPopup from '../../components/alert-message/AlertMessage';
import PaginationBar from '../../components/puppies-for-sell-componets/PaginationPagebar';

interface Props{
    paginationPage: number;
    totalPages: number;
    puppySinglePageArr: any[];
}
const FilterResult: React.FC<Props> = ({paginationPage, totalPages, puppySinglePageArr}) => {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * puppySinglePageArr.length));

  return (

    <div className="puppies-for-sale__results">
        <AlertPopup />

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
                                                // src={item.image}
                                                src='/img/503060929_medium.jpg'
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
                                        <div className="card__actions">

                                                                                                            {/* //Repalce data-puppy */}


                                            <button className="favorite-puppy-circle js-favorite-puppy" data-puppy="771124"></button>
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

        <div className="js-puppy-pagination-container puppies-for-sale__pagination">
                <PaginationBar currentPage={paginationPage} totalPages={totalPages}/>
        </div>
    </div>

  );
}

export default FilterResult;