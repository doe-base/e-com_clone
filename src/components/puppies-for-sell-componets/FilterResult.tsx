import React, { useState, useEffect } from 'react';
import AlertPopup from '../../components/alert-message/AlertMessage';
import PaginationBar from '../../components/puppies-for-sell-componets/PaginationPagebar';
import useAuthListener from '../../hooks/use-auth-listener';
import LoginPopup from "../popups/single-puppy-popups/LoginPopup";
import Loading from "../loading/Loading"

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

    const [loading, setLoading] = useState(false);

    const fetchNextPage = async () => {
      setLoading(true); // Start loader
      // Simulate fetching new data (replace with your actual data fetching logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false); // Stop loader
    };

    useEffect(() => {
      fetchNextPage();
    }, [puppySinglePageArr]);

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
                                                <p className="age">{item.sex} . {item.age} weeks<span className="hidden">old</span></p>
                                            </div>
                                            <div className="card__actions" onClick={(e) =>handleLike(e, item.puppy_id)}>
                                                <button className={`favorite-puppy-circle js-favorite-puppy ${likePuppyListID.includes(item.puppy_id) ? 'favorited' : ''}`} data-puppy={item.puppy_id}></button>
                                            </div>
                                        </div>

                                    </div>
                                </a>

                                {index === randomIndex &&
                                // <div style={{padding: "0 4px 4px 0"}} id="container-puppies-for-sale-trust-card">
                                //     <div className="card card--small pd-1  bg-cover bg-no-repeat bg-center bg-[#FFFFFF]" style={{backgroundImage: "url(/img/val-season.webp)"}}>
                                //         <div className="w-full h-full flex-col gap-4 flex items-center justify-center "></div>
                                //     </div>
                                // </div>
                                    <div id="container-puppies-for-sale-trust-card">
                                        <div className="card card--small pd-1  bg-cover bg-no-repeat bg-center ">
                                            <a href="/reviews">
                                                <svg width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.71438 15.18C1.20771 15.18 0.821042 15.04 0.554375 14.76C0.287708 14.48 0.154375 14.0867 0.154375 13.58V2.48C0.154375 1.96 0.287708 1.56667 0.554375 1.3C0.834375 1.03333 1.22771 0.899999 1.73438 0.899999H6.59438C8.16771 0.899999 9.38104 1.3 10.2344 2.1C11.0877 2.88667 11.5144 3.98667 11.5144 5.4C11.5144 6.81333 11.0877 7.92 10.2344 8.72C9.38104 9.52 8.16771 9.92 6.59438 9.92H3.25438V13.58C3.25438 14.0867 3.12104 14.48 2.85438 14.76C2.60104 15.04 2.22104 15.18 1.71438 15.18ZM3.25438 7.52H6.07438C6.87438 7.52 7.48104 7.34 7.89438 6.98C8.32104 6.62 8.53438 6.09333 8.53438 5.4C8.53438 4.70667 8.32104 4.18667 7.89438 3.84C7.48104 3.49333 6.87438 3.32 6.07438 3.32H3.25438V7.52ZM16.6198 15.22C15.7932 15.22 15.1065 15.0667 14.5598 14.76C14.0132 14.4533 13.6065 13.9933 13.3398 13.38C13.0865 12.7533 12.9598 11.98 12.9598 11.06V6.54C12.9598 6.03333 13.0865 5.65333 13.3398 5.4C13.6065 5.14667 13.9798 5.02 14.4598 5.02C14.9398 5.02 15.3132 5.14667 15.5798 5.4C15.8465 5.65333 15.9798 6.03333 15.9798 6.54V11.14C15.9798 11.7267 16.0998 12.1667 16.3398 12.46C16.5798 12.74 16.9598 12.88 17.4798 12.88C18.0532 12.88 18.5198 12.68 18.8798 12.28C19.2532 11.8667 19.4398 11.3267 19.4398 10.66V6.54C19.4398 6.03333 19.5665 5.65333 19.8198 5.4C20.0865 5.14667 20.4598 5.02 20.9398 5.02C21.4332 5.02 21.8065 5.14667 22.0598 5.4C22.3265 5.65333 22.4598 6.03333 22.4598 6.54V13.64C22.4598 14.6667 21.9732 15.18 20.9998 15.18C20.5198 15.18 20.1532 15.0467 19.8998 14.78C19.6465 14.5133 19.5198 14.1333 19.5198 13.64V12.3L19.8198 13.08C19.5265 13.76 19.1065 14.2867 18.5598 14.66C18.0132 15.0333 17.3665 15.22 16.6198 15.22ZM26.3167 18.78C25.8234 18.78 25.4434 18.6467 25.1767 18.38C24.9234 18.1267 24.7967 17.7467 24.7967 17.24V6.54C24.7967 6.04667 24.9234 5.67333 25.1767 5.42C25.4434 5.15333 25.8101 5.02 26.2767 5.02C26.7701 5.02 27.1434 5.15333 27.3967 5.42C27.6501 5.67333 27.7767 6.04667 27.7767 6.54V7.9L27.5567 7.12C27.7567 6.48 28.1567 5.96667 28.7567 5.58C29.3701 5.18 30.0701 4.98 30.8567 4.98C31.7101 4.98 32.4567 5.18667 33.0967 5.6C33.7501 6.01333 34.2567 6.6 34.6167 7.36C34.9767 8.12 35.1567 9.02667 35.1567 10.08C35.1567 11.1333 34.9767 12.0467 34.6167 12.82C34.2567 13.5933 33.7567 14.1867 33.1167 14.6C32.4767 15.0133 31.7234 15.22 30.8567 15.22C30.0834 15.22 29.3967 15.0333 28.7967 14.66C28.1967 14.2733 27.7901 13.7733 27.5767 13.16H27.8167V17.24C27.8167 17.7467 27.6834 18.1267 27.4167 18.38C27.1634 18.6467 26.7967 18.78 26.3167 18.78ZM29.9567 12.96C30.3834 12.96 30.7567 12.8533 31.0767 12.64C31.4101 12.4267 31.6634 12.1133 31.8367 11.7C32.0234 11.2733 32.1167 10.7333 32.1167 10.08C32.1167 9.10667 31.9167 8.39333 31.5167 7.94C31.1167 7.47333 30.5967 7.24 29.9567 7.24C29.5301 7.24 29.1501 7.34 28.8167 7.54C28.4967 7.74 28.2434 8.05333 28.0567 8.48C27.8701 8.89333 27.7767 9.42667 27.7767 10.08C27.7767 11.0533 27.9767 11.78 28.3767 12.26C28.7767 12.7267 29.3034 12.96 29.9567 12.96ZM38.5238 18.78C38.0304 18.78 37.6504 18.6467 37.3838 18.38C37.1304 18.1267 37.0038 17.7467 37.0038 17.24V6.54C37.0038 6.04667 37.1304 5.67333 37.3838 5.42C37.6504 5.15333 38.0171 5.02 38.4837 5.02C38.9771 5.02 39.3504 5.15333 39.6038 5.42C39.8571 5.67333 39.9838 6.04667 39.9838 6.54V7.9L39.7638 7.12C39.9638 6.48 40.3638 5.96667 40.9638 5.58C41.5771 5.18 42.2771 4.98 43.0638 4.98C43.9171 4.98 44.6638 5.18667 45.3038 5.6C45.9571 6.01333 46.4638 6.6 46.8238 7.36C47.1838 8.12 47.3638 9.02667 47.3638 10.08C47.3638 11.1333 47.1838 12.0467 46.8238 12.82C46.4638 13.5933 45.9638 14.1867 45.3238 14.6C44.6838 15.0133 43.9304 15.22 43.0638 15.22C42.2904 15.22 41.6038 15.0333 41.0038 14.66C40.4038 14.2733 39.9971 13.7733 39.7838 13.16H40.0238V17.24C40.0238 17.7467 39.8904 18.1267 39.6238 18.38C39.3704 18.6467 39.0038 18.78 38.5238 18.78ZM42.1638 12.96C42.5904 12.96 42.9638 12.8533 43.2838 12.64C43.6171 12.4267 43.8704 12.1133 44.0438 11.7C44.2304 11.2733 44.3238 10.7333 44.3238 10.08C44.3238 9.10667 44.1238 8.39333 43.7238 7.94C43.3238 7.47333 42.8038 7.24 42.1638 7.24C41.7371 7.24 41.3571 7.34 41.0238 7.54C40.7038 7.74 40.4504 8.05333 40.2638 8.48C40.0771 8.89333 39.9838 9.42667 39.9838 10.08C39.9838 11.0533 40.1838 11.78 40.5838 12.26C40.9838 12.7267 41.5104 12.96 42.1638 12.96ZM51.6564 18.78C51.3097 18.78 51.0231 18.6867 50.7964 18.5C50.5697 18.3133 50.4364 18.0667 50.3964 17.76C50.3564 17.4667 50.4097 17.1533 50.5564 16.82L51.8964 13.86V15.1L48.3564 6.98C48.2231 6.63333 48.1764 6.31333 48.2164 6.02C48.2697 5.71333 48.4164 5.47333 48.6564 5.3C48.9097 5.11333 49.2564 5.02 49.6964 5.02C50.0564 5.02 50.3431 5.10667 50.5564 5.28C50.7831 5.44 50.9897 5.75333 51.1764 6.22L53.5364 12.22H52.8964L55.3364 6.2C55.5231 5.74667 55.7297 5.44 55.9564 5.28C56.1964 5.10667 56.5164 5.02 56.9164 5.02C57.2631 5.02 57.5364 5.11333 57.7364 5.3C57.9497 5.47333 58.0764 5.70667 58.1164 6C58.1697 6.29333 58.1164 6.61333 57.9564 6.96L53.2564 17.62C53.0564 18.0733 52.8297 18.38 52.5764 18.54C52.3364 18.7 52.0297 18.78 51.6564 18.78ZM64.9405 15.22C64.3805 15.22 63.8071 15.1733 63.2205 15.08C62.6471 15 62.0938 14.88 61.5605 14.72C61.0405 14.56 60.5738 14.36 60.1605 14.12C59.8671 13.96 59.6605 13.7533 59.5405 13.5C59.4205 13.2333 59.3738 12.9667 59.4005 12.7C59.4405 12.4333 59.5405 12.2 59.7005 12C59.8738 11.7867 60.0871 11.6533 60.3405 11.6C60.6071 11.5333 60.9005 11.58 61.2205 11.74C61.7671 12.0467 62.3605 12.2733 63.0005 12.42C63.6538 12.5667 64.3005 12.64 64.9405 12.64C65.9138 12.64 66.6071 12.4933 67.0205 12.2C67.4338 11.8933 67.6405 11.5133 67.6405 11.06C67.6405 10.6733 67.4938 10.3667 67.2005 10.14C66.9071 9.91333 66.3938 9.72 65.6605 9.56L63.4005 9.08C62.1205 8.81333 61.1671 8.36 60.5405 7.72C59.9271 7.06667 59.6205 6.21333 59.6205 5.16C59.6205 4.49333 59.7605 3.88667 60.0405 3.34C60.3205 2.79333 60.7138 2.32 61.2205 1.92C61.7271 1.52 62.3271 1.21333 63.0205 0.999999C63.7271 0.786666 64.5005 0.68 65.3405 0.68C66.0871 0.68 66.8205 0.773333 67.5405 0.96C68.2605 1.13333 68.8938 1.39333 69.4405 1.74C69.7071 1.9 69.8871 2.10667 69.9805 2.36C70.0871 2.6 70.1205 2.84667 70.0805 3.1C70.0538 3.34 69.9538 3.55333 69.7805 3.74C69.6205 3.92667 69.4138 4.04667 69.1605 4.1C68.9071 4.15333 68.6005 4.09333 68.2405 3.92C67.8005 3.69333 67.3338 3.52667 66.8405 3.42C66.3471 3.31333 65.8405 3.26 65.3205 3.26C64.7605 3.26 64.2805 3.33333 63.8805 3.48C63.4938 3.62667 63.1938 3.83333 62.9805 4.1C62.7805 4.36667 62.6805 4.67333 62.6805 5.02C62.6805 5.40667 62.8205 5.72 63.1005 5.96C63.3805 6.2 63.8671 6.39333 64.5605 6.54L66.8205 7.02C68.1271 7.3 69.1005 7.75333 69.7405 8.38C70.3805 8.99333 70.7005 9.80667 70.7005 10.82C70.7005 11.4867 70.5671 12.0933 70.3005 12.64C70.0338 13.1733 69.6471 13.6333 69.1405 14.02C68.6338 14.4067 68.0271 14.7067 67.3205 14.92C66.6138 15.12 65.8205 15.22 64.9405 15.22ZM73.973 18.78C73.4796 18.78 73.0996 18.6467 72.833 18.38C72.5796 18.1267 72.453 17.7467 72.453 17.24V6.54C72.453 6.04667 72.5796 5.67333 72.833 5.42C73.0996 5.15333 73.4663 5.02 73.933 5.02C74.4263 5.02 74.7996 5.15333 75.053 5.42C75.3063 5.67333 75.433 6.04667 75.433 6.54V7.9L75.213 7.12C75.413 6.48 75.813 5.96667 76.413 5.58C77.0263 5.18 77.7263 4.98 78.513 4.98C79.3663 4.98 80.113 5.18667 80.753 5.6C81.4063 6.01333 81.913 6.6 82.273 7.36C82.633 8.12 82.813 9.02667 82.813 10.08C82.813 11.1333 82.633 12.0467 82.273 12.82C81.913 13.5933 81.413 14.1867 80.773 14.6C80.133 15.0133 79.3796 15.22 78.513 15.22C77.7396 15.22 77.053 15.0333 76.453 14.66C75.853 14.2733 75.4463 13.7733 75.233 13.16H75.473V17.24C75.473 17.7467 75.3396 18.1267 75.073 18.38C74.8196 18.6467 74.453 18.78 73.973 18.78ZM77.613 12.96C78.0396 12.96 78.413 12.8533 78.733 12.64C79.0663 12.4267 79.3196 12.1133 79.493 11.7C79.6796 11.2733 79.773 10.7333 79.773 10.08C79.773 9.10667 79.573 8.39333 79.173 7.94C78.773 7.47333 78.253 7.24 77.613 7.24C77.1863 7.24 76.8063 7.34 76.473 7.54C76.153 7.74 75.8996 8.05333 75.713 8.48C75.5263 8.89333 75.433 9.42667 75.433 10.08C75.433 11.0533 75.633 11.78 76.033 12.26C76.433 12.7267 76.9596 12.96 77.613 12.96ZM89.38 15.22C88.3267 15.22 87.4067 15.0133 86.62 14.6C85.8467 14.1867 85.2467 13.5933 84.82 12.82C84.3933 12.0467 84.18 11.1333 84.18 10.08C84.18 9.29333 84.3 8.58667 84.54 7.96C84.78 7.33333 85.1267 6.8 85.58 6.36C86.0467 5.90667 86.6 5.56667 87.24 5.34C87.88 5.1 88.5933 4.98 89.38 4.98C90.4333 4.98 91.3467 5.18667 92.12 5.6C92.9067 6.01333 93.5133 6.6 93.94 7.36C94.38 8.12 94.6 9.02667 94.6 10.08C94.6 10.88 94.4733 11.5933 94.22 12.22C93.98 12.8467 93.6333 13.3867 93.18 13.84C92.7267 14.2933 92.1733 14.64 91.52 14.88C90.88 15.1067 90.1667 15.22 89.38 15.22ZM89.38 12.96C89.82 12.96 90.2 12.8533 90.52 12.64C90.84 12.4267 91.0933 12.1133 91.28 11.7C91.4667 11.2733 91.56 10.7333 91.56 10.08C91.56 9.10667 91.36 8.39333 90.96 7.94C90.56 7.47333 90.0333 7.24 89.38 7.24C88.9533 7.24 88.5733 7.34 88.24 7.54C87.92 7.74 87.6667 8.05333 87.48 8.48C87.3067 8.89333 87.22 9.42667 87.22 10.08C87.22 11.0533 87.42 11.78 87.82 12.26C88.22 12.7267 88.74 12.96 89.38 12.96ZM101.16 15.22C100.24 15.22 99.4664 15.0667 98.8397 14.76C98.2264 14.4533 97.7664 14.0067 97.4597 13.42C97.1664 12.8333 97.0197 12.0933 97.0197 11.2V7.44H96.1797C95.8064 7.44 95.513 7.34 95.2997 7.14C95.0997 6.94 94.9997 6.66667 94.9997 6.32C94.9997 5.94667 95.0997 5.66667 95.2997 5.48C95.513 5.28 95.8064 5.18 96.1797 5.18H97.0197V3.66C97.0197 3.15333 97.153 2.77333 97.4197 2.52C97.6864 2.25333 98.0597 2.12 98.5397 2.12C99.033 2.12 99.4064 2.25333 99.6597 2.52C99.913 2.77333 100.04 3.15333 100.04 3.66V5.18H101.94C102.313 5.18 102.6 5.28 102.8 5.48C103 5.66667 103.1 5.94667 103.1 6.32C103.1 6.66667 103 6.94 102.8 7.14C102.6 7.34 102.313 7.44 101.94 7.44H100.04V11.08C100.04 11.64 100.166 12.06 100.42 12.34C100.686 12.62 101.106 12.76 101.68 12.76C101.88 12.76 102.066 12.74 102.24 12.7C102.413 12.66 102.573 12.6333 102.72 12.62C102.906 12.6067 103.06 12.6667 103.18 12.8C103.3 12.92 103.36 13.1933 103.36 13.62C103.36 13.94 103.306 14.22 103.2 14.46C103.093 14.7 102.906 14.8733 102.64 14.98C102.466 15.0467 102.226 15.1 101.92 15.14C101.626 15.1933 101.373 15.22 101.16 15.22Z" fill="black" fill-opacity="0.85"></path></svg>
                                                <span className="card__title display-h6 text-center">The easiest &amp; safest way to get a new puppy</span>
                                                <div className="card__rating state-location-pages-module__ratingTextCenter--1a5dZ">
                                                    <ul className="stars">
                                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg>
                                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg>
                                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg>
                                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path fill="#FFC107" stroke="#FFC107" stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L8 12Z"></path><path fill="#c4c4c4" stroke="#c4c4c4" stroke-width="1" d="M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L8 0Z"></path></svg>
                                                    </ul>
                                                </div>

                                                <span className="card__subtitle display-h5">Trusted Breeders:</span>
                                                <ul className="card__footer">
                                                    <li>
                                                        <img src="https://www.puppyspot.com/preact/./img/puppy-spot-nose.svg" alt="puppyspot" />
                                                        <span>Certified</span></li><li>
                                                            <picture className="">
                                                                <img src="/img/logo-usda.webp" loading="lazy" className="lazyloaded card__footer__logo" alt="USDA licensed" />
                                                            </picture><span>Licensed
                                                        </span>
                                                    </li>
                                                </ul>
                                            </a>
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

        <Loading loading={loading}/>
        <LoginPopup loginPopup={loginPopup}  setLoingPopup={setLoginPopup}/>
    </>

  );
}

export default FilterResult;
