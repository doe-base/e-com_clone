import { useState, useRef, useEffect } from "react";
import "./index.css";
import allBreed from '../../../data/all-breeds.json';
import Fuse from 'fuse.js';
import { breeds_pages, navbar, pages } from "../../../contants/routes";
import navData from "../../../data/navbar-data.json"

interface Props{
    smallNavOpen: boolean;
    setSmallNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavDrawer: React.FC<Props> = ({smallNavOpen, setSmallNavOpen}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchBreed, setSearchBreed] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>(allBreed.breedList);
  const fuse = new Fuse(allBreed.breedList, {
    keys: ['name', 'slug'], // Specify which keys to search
    includeScore: true,
  });

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearchBreed(searchQuery)
    setQuery(searchQuery);

    if (searchQuery.trim()) {
    const fuseResults = fuse.search(searchQuery);
        setResults(fuseResults.map((result: any) => result.item));
    } else {
        setResults(allBreed.breedList);
    }
  };

  const us_number = process.env.REACT_APP_US_NUMBER || '+15023820019'

  const showByBreed =()=>{
    document.getElementById('main-navigation-options')?.classList.add('hidden')
    document.getElementById('navigation-options-by-breed')?.classList.remove('hidden')
  }
  const backByBreed =()=>{
    document.getElementById('main-navigation-options')?.classList.remove('hidden')
    document.getElementById('navigation-options-by-breed')?.classList.add('hidden')
  }

  const showByCharacteristics =()=>{
    document.getElementById('main-navigation-options')?.classList.add('hidden')
    document.getElementById('navigation-options-by-characteristics')?.classList.remove('hidden')
  }
  const backByCharacteristics =()=>{
    document.getElementById('main-navigation-options')?.classList.remove('hidden')
    document.getElementById('navigation-options-by-characteristics')?.classList.add('hidden')
  }

  const showByGender =()=>{
    document.getElementById('main-navigation-options')?.classList.add('hidden')
    document.getElementById('navigation-options-by-gender')?.classList.remove('hidden')
  }
  const backByGender =()=>{
    document.getElementById('main-navigation-options')?.classList.remove('hidden')
    document.getElementById('navigation-options-by-gender')?.classList.add('hidden')
  }

  const showOurPromise =()=>{
    document.getElementById('main-navigation-options')?.classList.add('hidden')
    document.getElementById('navigation-options-our-promise')?.classList.remove('hidden')
  }
  const backOurPromise =()=>{
    document.getElementById('main-navigation-options')?.classList.remove('hidden')
    document.getElementById('navigation-options-our-promise')?.classList.add('hidden')
  }

  const showAboutUs =()=>{
    document.getElementById('main-navigation-options')?.classList.add('hidden')
    document.getElementById('navigation-options-about-us')?.classList.remove('hidden')
  }
  const backAboutUs =()=>{
    document.getElementById('main-navigation-options')?.classList.remove('hidden')
    document.getElementById('navigation-options-about-us')?.classList.add('hidden')
  }


  const showTop10Breed =()=>{
    document.getElementById('navigation-options-by-breed')?.classList.add('hidden')
    document.getElementById('navigation-options-top-10-breed')?.classList.remove('hidden')
  }
  const backTop10Breed =()=>{
    document.getElementById('navigation-options-by-breed')?.classList.remove('hidden')
    document.getElementById('navigation-options-top-10-breed')?.classList.add('hidden')
  }

  const showPureBreed =()=>{
    document.getElementById('navigation-options-by-breed')?.classList.add('hidden')
    document.getElementById('navigation-options-pure-breed')?.classList.remove('hidden')
  }
  const backPureBreed =()=>{
    document.getElementById('navigation-options-by-breed')?.classList.remove('hidden')
    document.getElementById('navigation-options-pure-breed')?.classList.add('hidden')
  }

  const showDesignerBreed =()=>{
    document.getElementById('navigation-options-by-breed')?.classList.add('hidden')
    document.getElementById('navigation-options-designer-breed')?.classList.remove('hidden')
  }
  const backDesignerBreed =()=>{
    document.getElementById('navigation-options-by-breed')?.classList.remove('hidden')
    document.getElementById('navigation-options-designer-breed')?.classList.add('hidden')
  }

  const [navHeight, setNavHeight] = useState<number>(0)
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);


  const handleSearchPuppy = (puppySlug: string) => {
    if (puppySlug) {
        // https://example.com/search?query=puppies&sort=asc
        window.location.href = `/puppies-for-sale?breed_slug=${puppySlug}`;
    }
  };
  const handleNavigateToBreedPuppy =(puppySlug: string) => {
    if (puppySlug) {
        window.location.href = `/puppies-for-sale/breed/${puppySlug}`;
    }
  }
  const handleNavigateToBreedPage =(characterSlug: string)=>{
    if (characterSlug) {
        window.location.href = `${characterSlug}`;
    }
  }
  const handleNavigateGender =(genderSlug: string)=>{
    if (genderSlug) {
        window.location.href = `/puppies-for-sale?gender=${genderSlug}`;
    }
  }
  const handleNavigation =(link: string)=>{
    if (link) {
        window.location.href = `${link}`;
    }
  }


  return (
    <div id="nav-bar-drawer" style={{ display: `${smallNavOpen ? 'block' : 'none'}`}}>
      <div ref={navRef} className="drawer-menu-open-nav__content">
        <ul className="drawer-header-nav__content">
            <div style={{width: '16px'}}></div>

            <li className="drawer-header-nav__logo" style={{padding: '0.8rem 0'}}>
              <a href={pages.HOME}>
              <svg className="drawer-header-nav__logo-large" width="130" height="25" viewBox="0 0 130 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5772_493)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1534 1.30069C20.9832 0.108196 17.7594 0.128787 15.4653 2.2261C15.4419 2.21021 15.4209 2.19786 15.4033 2.18668C15.3747 2.16903 15.3543 2.15609 15.3414 2.14373C13.1706 0.23174 9.92573 -0.0359391 7.48727 1.46542C5.35852 2.78146 4.38735 5.31117 5.68926 7.73735C6.43312 9.15634 7.36339 10.4106 8.47948 11.5419C10.1332 13.1868 11.9931 14.5235 14.0184 15.696C14.1634 15.7989 14.3492 15.963 14.3696 16.1072C14.4111 16.6008 14.4316 17.0944 14.3492 17.5674C13.8741 20.0353 12.4273 21.742 10.0297 22.5027C7.5907 23.2633 5.46195 22.6262 3.66393 20.8372C2.92007 20.0971 2.46545 19.1717 2.13471 18.1845C1.92786 17.5674 1.36981 17.3003 0.791314 17.4444C0.233269 17.5885 -0.097468 18.1433 0.0264122 18.7604C0.0427737 18.8587 0.0725751 18.9434 0.104714 19.0364C0.112895 19.0605 0.12166 19.0846 0.12984 19.1099C1.34936 22.4415 3.68497 24.477 7.23951 24.8882C10.5878 25.2789 13.2331 23.9422 15.176 21.2278C15.2093 21.1778 15.2467 21.1278 15.2853 21.0748C15.3426 20.9978 15.4039 20.9142 15.4653 20.8166C15.4986 20.863 15.5296 20.9048 15.5588 20.9442C15.6195 21.0266 15.6715 21.0966 15.7136 21.166C18.8965 25.8754 25.4482 26.2866 29.1891 21.9885C29.9949 21.0631 30.553 20.0141 30.8837 18.8422C31.132 17.958 30.4495 17.1973 29.5818 17.4232C29.0857 17.5468 28.8788 17.9374 28.7345 18.3898C27.7014 21.5155 24.5389 23.3251 21.377 22.6056C18.1737 21.8861 16.3757 18.8422 16.541 16.6008C16.5825 16.066 16.7269 15.7989 17.1815 15.5106C18.6073 14.5852 20.0132 13.6392 21.3151 12.5903C22.9892 11.2537 24.3326 9.60816 25.3038 7.67558C26.5438 5.20763 25.5516 2.59614 23.1546 1.30069H23.1534Z" fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.1313 5.86594C7.11961 5.7771 7.10851 5.68768 7.09448 5.59885C7.09448 4.01513 8.08669 2.94618 9.76083 2.78145C10.1331 2.74027 10.5257 2.71968 10.8974 2.76086C11.373 2.82263 11.6827 3.25445 11.6208 3.70686C11.5588 4.17985 11.2077 4.46754 10.7116 4.44694C9.49203 4.36458 8.87205 4.96112 8.91353 6.15362C8.91353 6.70898 8.66519 7.03784 8.16967 7.12021C7.7355 7.18198 7.34283 6.9143 7.21895 6.40071C7.17746 6.22245 7.15467 6.0442 7.13188 5.86594H7.1313Z" fill="#E0E0E0"></path>
              <path d="M74.386 17.2791V17.8721C74.386 18.754 74.386 19.6358 74.386 20.5177C74.386 20.6071 74.3831 20.6971 74.3726 20.7854C74.299 21.3707 74.0582 21.6161 73.4698 21.6684C72.9801 21.712 72.4881 21.7155 71.999 21.6614C71.5152 21.6078 71.2814 21.3755 71.2014 20.8883C71.1768 20.7383 71.1692 20.5836 71.1692 20.4306C71.1675 16.8396 71.1681 13.248 71.1675 9.65698C71.1675 9.47755 71.1757 9.30047 71.2096 9.12339C71.2849 8.72569 71.5163 8.48508 71.909 8.42213C72.3589 8.35035 72.8147 8.35624 73.2635 8.41213C73.8023 8.47919 74.0185 8.75511 74.0389 9.31165C74.0407 9.36048 74.0454 9.40872 74.0483 9.45108C74.1207 9.48696 74.154 9.44284 74.1844 9.4046C75.6254 7.60321 78.7218 7.7997 80.1365 9.73405C80.708 10.5159 81.0136 11.4007 81.1124 12.3544C81.2146 13.341 81.1579 14.3187 80.8225 15.2659C80.1371 17.2008 78.4454 18.328 76.423 18.1809C75.7376 18.1309 75.1276 17.8803 74.6104 17.4109C74.5496 17.3556 74.5105 17.2579 74.3866 17.2791H74.386ZM77.9517 13.1856C77.9265 12.7156 77.8523 12.2132 77.5794 11.7643C77.2259 11.1842 76.7123 10.8824 76.0374 10.9118C75.38 10.9401 74.8739 11.2589 74.5882 11.8567C74.1628 12.7456 74.1529 13.6604 74.5911 14.5493C74.8891 15.1541 75.3911 15.4959 76.0707 15.5065C76.762 15.5171 77.2744 15.1871 77.6203 14.5905C77.8629 14.1728 77.9406 13.7092 77.9517 13.1851" fill="black"></path>
              <path d="M62.916 9.46931C62.9639 9.44872 62.9931 9.44519 63.006 9.42931C64.4797 7.51496 67.9781 7.73675 69.318 10.2471C69.914 11.3637 70.0829 12.5626 69.9801 13.8104C69.9123 14.6358 69.6897 15.4159 69.2672 16.1319C68.2586 17.8409 66.4232 18.421 64.8601 18.1204C64.2348 18.0003 63.7054 17.6956 63.2718 17.2238C63.1602 17.2897 63.2152 17.3879 63.2152 17.4667C63.214 18.5151 63.2169 19.5635 63.2193 20.6124C63.2193 20.8183 63.2117 21.0231 63.1147 21.2101C62.982 21.4649 62.7728 21.6178 62.49 21.6514C61.9249 21.7184 61.3575 21.7196 60.7931 21.6543C60.3764 21.6061 60.1322 21.3637 60.0545 20.9489C60.0264 20.8001 60.0276 20.6436 60.0276 20.4906C60.0264 16.8596 60.0363 13.228 60.02 9.59698C60.0159 8.67039 60.432 8.34271 61.2278 8.38448C61.4166 8.39448 61.6059 8.38448 61.7946 8.38624C62.5829 8.39154 62.864 8.65686 62.916 9.47049V9.46931ZM66.7779 13.2151C66.7937 12.7279 66.6996 12.2573 66.4588 11.8249C66.1205 11.2189 65.6057 10.8948 64.915 10.913C64.2424 10.9307 63.7253 11.2536 63.4343 11.8661C63.0054 12.7697 62.9925 13.701 63.4623 14.5899C64.0952 15.7877 65.6846 15.8254 66.4127 14.6817C66.6955 14.2375 66.7948 13.7445 66.7779 13.2145" fill="black"></path>
              <path d="M104.522 9.46814C104.57 9.44696 104.599 9.44402 104.612 9.42754C106.098 7.50025 109.644 7.74028 110.96 10.3153C111.524 11.419 111.682 12.5909 111.585 13.811C111.526 14.5446 111.341 15.2441 111.002 15.8989C110.031 17.7744 108.117 18.4369 106.465 18.1198C105.839 17.9997 105.31 17.6962 104.877 17.2244C104.762 17.2908 104.821 17.3891 104.821 17.4679C104.819 18.5416 104.817 19.6158 104.825 20.6901C104.83 21.2701 104.49 21.6508 103.944 21.6731C103.44 21.6937 102.936 21.7196 102.434 21.6602C101.939 21.6014 101.678 21.3072 101.639 20.7971C101.63 20.6701 101.633 20.5418 101.633 20.4136C101.633 16.8208 101.647 13.228 101.624 9.63522C101.618 8.56332 102.122 8.34212 102.869 8.3833C103.045 8.39271 103.222 8.3833 103.399 8.38507C104.189 8.38977 104.47 8.65451 104.522 9.46814ZM108.385 13.2368C108.399 12.7409 108.308 12.2438 108.045 11.7914C107.704 11.2048 107.194 10.8948 106.519 10.913C105.864 10.9301 105.35 11.2372 105.057 11.8319C104.608 12.7438 104.593 13.6869 105.067 14.5893C105.69 15.7748 107.251 15.8289 107.996 14.7129C108.288 14.2752 108.395 13.7834 108.385 13.2368Z" fill="black"></path>
              <path d="M38.5513 11.2819C38.5513 9.49285 38.5513 7.70322 38.5513 5.91418C38.5513 5.82476 38.549 5.73533 38.5513 5.64591C38.5717 5.03349 38.8885 4.7005 39.4962 4.68639C40.1132 4.67227 40.7309 4.68168 41.3479 4.68168C42.2297 4.68168 43.1121 4.67756 43.9938 4.68227C46.3505 4.69521 48.0498 6.3054 48.242 8.68569C48.2981 9.38107 48.2595 10.0629 48.0801 10.7359C47.5735 12.6379 46.0379 13.851 44.0938 13.8787C43.4136 13.8887 42.7334 13.8787 42.0527 13.8816C41.7926 13.8828 41.7874 13.8887 41.7862 14.1599C41.7833 15.0288 41.7856 15.8983 41.785 16.7672C41.785 16.8826 41.7903 16.9985 41.7774 17.112C41.7167 17.6474 41.4151 17.9433 40.8822 17.9627C40.4294 17.9792 39.9747 17.9762 39.5219 17.9662C38.8756 17.9521 38.556 17.6209 38.5525 16.9561C38.5466 15.8824 38.5507 14.8088 38.5507 13.7351L38.5513 11.2819ZM41.7862 9.29164C41.7862 9.80229 41.7926 10.3129 41.7827 10.823C41.7792 11.0066 41.8388 11.0677 42.0199 11.063C42.5102 11.0507 43.0022 11.0748 43.4913 11.0483C44.1563 11.0124 44.6308 10.6777 44.861 10.0306C45.0053 9.62521 45.024 9.20399 44.9405 8.78452C44.7728 7.94795 44.2474 7.51614 43.399 7.50614C42.9461 7.50084 42.4933 7.5132 42.0404 7.50143C41.8464 7.49672 41.7774 7.55732 41.7821 7.76028C41.7944 8.27035 41.7862 8.78099 41.7862 9.29164Z" fill="black"></path>
              <path d="M95.8874 18.1974C94.5259 18.1727 93.2497 17.8303 92.0775 17.1149C91.8934 17.0026 91.721 16.8755 91.5697 16.7184C91.2916 16.429 91.2185 16.0907 91.3979 15.7348C91.6445 15.2447 91.9594 14.7952 92.3171 14.3811C92.5146 14.1522 92.7834 14.0999 93.0785 14.1687C93.38 14.2387 93.6348 14.4052 93.8965 14.5564C94.4499 14.8753 95.0319 15.1059 95.6718 15.1676C96.0294 15.2024 96.3806 15.1676 96.7113 15.0317C97.3319 14.7758 97.4616 14.1293 96.9982 13.6357C96.7873 13.411 96.5296 13.2474 96.2532 13.1198C95.6922 12.8597 95.126 12.6109 94.5639 12.3538C94 12.0961 93.4577 11.8031 92.9534 11.4348C90.8948 9.93231 91.2261 7.05255 92.6659 5.72769C93.3607 5.0882 94.1735 4.70815 95.0851 4.55284C96.5173 4.3081 97.8946 4.5246 99.2117 5.14056C99.4524 5.25292 99.685 5.38117 99.8808 5.56708C100.189 5.85888 100.289 6.20951 100.14 6.61132C99.9672 7.07844 99.737 7.52084 99.4752 7.94148C99.2678 8.27446 98.9709 8.35859 98.5829 8.24858C98.2896 8.16563 98.0284 8.0062 97.7538 7.87853C97.0999 7.57497 96.4261 7.40436 95.701 7.5179C95.4994 7.54967 95.306 7.60379 95.133 7.7144C94.7281 7.97384 94.627 8.43331 94.8823 8.84689C95.0267 9.08103 95.2394 9.23929 95.469 9.37754C95.9476 9.66581 96.47 9.85701 96.9819 10.0712C97.6807 10.3635 98.3755 10.6653 98.9978 11.1113C99.7236 11.6313 100.242 12.2991 100.43 13.1974C100.874 15.3147 99.6955 17.325 97.6404 17.9509C97.0701 18.1245 96.4857 18.2121 95.8874 18.1974Z" fill="black"></path>
              <path d="M117.93 18.1945C116.525 18.1815 115.244 17.8003 114.169 16.8478C113.18 15.9707 112.667 14.85 112.598 13.5227C112.517 11.969 112.99 10.6265 114.132 9.56285C114.904 8.84394 115.828 8.42566 116.859 8.25682C118.34 8.01502 119.755 8.20975 121.037 9.02808C122.497 9.96114 123.229 11.3237 123.289 13.0827C123.377 15.6089 121.657 17.6579 119.021 18.1068C118.661 18.168 118.298 18.2074 117.93 18.1939V18.1945ZM115.83 13.2298C115.833 13.2839 115.834 13.4116 115.846 13.5386C115.944 14.5882 116.722 15.3847 117.761 15.4836C118.652 15.5683 119.639 15.0417 119.949 13.9722C120.073 13.5469 120.098 13.1198 120.014 12.6862C119.741 11.2742 118.47 10.5706 117.232 10.9983C116.37 11.296 115.844 12.1338 115.829 13.2298" fill="black"></path>
              <path d="M86.2633 14.0457C86.4363 13.1962 86.6543 12.3608 86.8804 11.5272C87.0808 10.7889 87.2719 10.0482 87.4747 9.30988C87.6587 8.64157 87.9889 8.39036 88.6772 8.38448C89.0927 8.38095 89.5088 8.38565 89.9248 8.38271C90.0645 8.38154 90.2012 8.39683 90.3356 8.43507C90.7224 8.54509 90.9264 8.83512 90.8738 9.23811C90.851 9.41284 90.7937 9.58639 90.7329 9.75288C89.6139 12.818 88.492 15.8813 87.3718 18.9457C87.2088 19.3911 87.0014 19.8129 86.7267 20.1983C85.6878 21.6561 83.7331 22.2556 82.0742 21.6272C81.5734 21.4378 81.3701 21.0654 81.4939 20.5401C81.5828 20.1647 81.7516 19.82 81.9468 19.4923C82.118 19.2046 82.3827 19.0781 82.7152 19.1064C82.79 19.1128 82.8671 19.1181 82.939 19.1393C83.9447 19.4335 84.5407 18.7181 84.8317 17.8421C84.8773 17.7044 84.7873 17.5944 84.7388 17.4809C84.075 15.9219 83.4082 14.364 82.7421 12.8062C82.3114 11.7984 81.8802 10.7918 81.4519 9.78288C81.3724 9.5958 81.2859 9.41166 81.269 9.20222C81.2362 8.79158 81.4028 8.54097 81.7896 8.43331C81.8136 8.42625 81.8381 8.4186 81.8632 8.41683C82.5417 8.36389 83.2218 8.34624 83.8979 8.42213C84.3636 8.47449 84.6237 8.79923 84.761 9.23164C85.0041 9.99702 85.2448 10.7636 85.4827 11.5307C85.724 12.3097 85.9986 13.0792 86.1435 13.8857C86.1546 13.9487 86.1728 14.0104 86.2645 14.0452" fill="black"></path>
              <path d="M55.6322 16.7508C55.5363 16.7543 55.5165 16.8237 55.4814 16.8708C54.8439 17.7244 53.9715 18.1133 52.943 18.1862C52.5141 18.2162 52.0858 18.1833 51.6663 18.0868C50.4432 17.8062 49.6684 16.9584 49.4469 15.6671C49.3885 15.3271 49.3593 14.9841 49.3604 14.6382C49.3634 12.938 49.3616 11.2383 49.3622 9.53815C49.3622 9.43578 49.3599 9.33283 49.3704 9.23164C49.4165 8.77688 49.6479 8.49155 50.0944 8.42742C50.6682 8.34506 51.2508 8.34388 51.8246 8.42801C52.2705 8.4939 52.4972 8.77864 52.5404 9.23811C52.5521 9.36518 52.5492 9.49343 52.5492 9.6211C52.5492 11.0401 52.5492 12.4585 52.5504 13.8775C52.5504 14.0557 52.5568 14.2328 52.5843 14.4117C52.6877 15.0782 53.1487 15.32 53.7617 15.2418C54.4769 15.1506 54.9573 14.7388 55.2442 14.0834C55.4358 13.6457 55.5112 13.1821 55.5095 12.7026C55.506 11.6931 55.5083 10.683 55.5089 9.67345C55.5089 9.57109 55.5042 9.46872 55.5118 9.36695C55.5626 8.70628 55.8747 8.40389 56.5315 8.38742C56.8716 8.37918 57.2117 8.38389 57.5517 8.38742C57.6774 8.3886 57.8042 8.39036 57.9275 8.41154C58.3961 8.49272 58.6123 8.7104 58.6871 9.18222C58.7134 9.34518 58.7245 9.51226 58.7245 9.67757C58.7268 12.0167 58.7274 14.3558 58.7245 16.6949C58.7245 16.8731 58.7117 17.0532 58.6813 17.2285C58.6076 17.6562 58.3488 17.9162 57.9205 17.9521C57.4308 17.9939 56.9376 17.9921 56.4479 17.9527C56.0295 17.9192 55.7899 17.6821 55.7023 17.2626C55.6672 17.0949 55.6544 16.922 55.6322 16.752" fill="black"></path>
              <path d="M127.895 7.51084C127.895 7.77911 127.902 8.04797 127.893 8.31565C127.886 8.48508 127.956 8.53979 128.115 8.5345C128.354 8.52685 128.594 8.52861 128.833 8.53391C129.521 8.5492 129.843 8.87924 129.855 9.57874C129.857 9.77053 129.862 9.96231 129.851 10.1535C129.818 10.7042 129.505 11.0236 128.962 11.0489C128.673 11.0624 128.383 11.0572 128.093 11.0519C127.948 11.0495 127.894 11.1095 127.895 11.2554C127.899 12.1885 127.884 13.1215 127.906 14.054C127.917 14.5387 128.219 14.89 128.682 15.027C128.875 15.0841 129.079 15.0988 129.274 15.1459C129.746 15.2588 129.946 15.4724 129.981 15.9624C130.007 16.3313 130.009 16.7049 129.982 17.0732C129.942 17.605 129.652 17.8862 129.103 17.9503C128.599 18.0092 128.096 17.9745 127.601 17.865C127.106 17.7556 126.632 17.5873 126.199 17.315C125.201 16.6872 124.746 15.7512 124.726 14.587C124.708 13.5522 124.722 12.5167 124.722 11.4819C124.722 11.3925 124.72 11.3031 124.721 11.2136C124.722 11.1042 124.674 11.0519 124.562 11.0542C124.462 11.056 124.36 11.0554 124.261 11.0419C123.811 10.9824 123.529 10.693 123.493 10.2347C123.475 9.99349 123.481 9.74935 123.486 9.50697C123.499 8.90395 123.792 8.5898 124.382 8.53567C124.663 8.50979 124.804 8.35349 124.805 8.06679C124.805 7.72146 124.808 7.37671 124.803 7.03137C124.802 6.86429 124.818 6.69957 124.851 6.53661C124.934 6.12774 125.186 5.86241 125.593 5.83947C126.095 5.81123 126.601 5.81064 127.103 5.83711C127.551 5.86064 127.839 6.1648 127.879 6.62956C127.905 6.92077 127.884 7.21669 127.884 7.51025H127.897L127.895 7.51084Z" fill="black"></path>
              </g>
              <defs>
              <clipPath id="clip0_5772_493">
              <rect width="130" height="24.4706" fill="white" transform="translate(0 0.5)"></rect>
              </clipPath>
              </defs>
              </svg>
              </a>
            </li>


            <li className="drawer-control-cancel-mobile" onClick={()=> setSmallNavOpen(false)}>
              <a className="drawer-mobile-close js-header-close">
              <svg className="drawer-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.53414 7.99996L0.30405 1.76969C-0.101393 1.36443 -0.101393 0.709193 0.30405 0.30394C0.709305 -0.101313 1.36454 -0.101313 1.7698 0.30394L8.00008 6.53421L14.2302 0.30394C14.6356 -0.101313 15.2907 -0.101313 15.6959 0.30394C16.1014 0.709193 16.1014 1.36443 15.6959 1.76969L9.46583 7.99996L15.6959 14.2302C16.1014 14.6355 16.1014 15.2907 15.6959 15.696C15.494 15.8981 15.2284 15.9997 14.963 15.9997C14.6977 15.9997 14.4323 15.8981 14.2302 15.696L8.00008 9.4657L1.7698 15.696C1.56765 15.8981 1.30229 15.9997 1.03692 15.9997C0.771564 15.9997 0.506203 15.8981 0.30405 15.696C-0.101393 15.2907 -0.101393 14.6355 0.30405 14.2302L6.53414 7.99996Z" fill="currentColor"></path>
              </svg>
              </a>
            </li>
        </ul>


        <div className="drawer-header-nav__mobile banner-visible" style={{overflow: 'scroll'}}>

            <li id="drawer-searchbar-header-modile" className="drawer-search">
                <div className="drawer-desktop-searchbar-module__wrapper--kB8Qr">
                    <div className="drawer-style-module__wrapper--7jJ94 drawer-style-module__open--k2jZl">
                        <div className="drawer-style-module__content--UlhVY ">
                            <div className="drawer-style-module__reducerWrapper--UVMF-">
                                <div className="drawer-style-module__reducer--higDU">
                                    <form autoComplete="off" className="drawer-style-module__controlWrapper--Cak4k" action=".">
                                        <input
                                            type="search"
                                            name="search"
                                            className="drawer-style-module__input--8Dj0T"
                                            placeholder="Search for Breeds"
                                            autoComplete="off"
                                            onChange={(e)=> handleSearch(e)}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                        />
                                    </form>
                                </div>
                            </div>
                            <button className="drawer-style-module__button--uk1Kx drawer-track_top_search_bar" data-cy="submit-button"><i className="drawer-style-module__searchIcon--De0gi "></i></button>
                        </div>


                        {/* DropDown */}
                        <div data-cy="filter-results" className={`drawer-style-module__menu--Xf2XU  ${isFocused ? '' : 'drawer-hidden'}`}>
                            {
                                results.length > 0
                                ?
                                results.map((item: any, index: number)=> {
                                    return (
                                        <div key={index} className="drawer-style-module__item--tuTKJ" onMouseDown={(e) => {
                                            e.preventDefault(); // Prevents the input from losing focus immediately
                                            handleSearchPuppy(item.slug);
                                        }}>{item.name}</div>
                                    )
                                })
                                :
                                <div className="drawer-style-module__item--tuTKJ" style={{fontWeight: 'bold'}}>Search "{searchBreed}"</div>
                            }
                        </div>
                    </div>
                </div>
            </li>

            <li className="drawer-header-nav__links-main">
                <ul className="drawer-header-nav__links-modile">
                    <li className="drawer-phone">
                        <a className="drawer-" href={navbar.PHONE_WHATSAPP}>
                            <div>
                                <picture className="drawer-">
                                    <img id="" alt="" className="drawer-icon ls-is-cached lazyloaded" width="14" height="14" src="/img/phone-icon.svg" style={{marginBottom: '-2px'}} />
                                </picture>
                            </div>
                        </a>
                    </li>

                    <li className="drawer-phone">
                        <a className="drawer-hyperlink-small" href={navbar.PHONE_WHATSAPP}>
                            (502) 382-0019
                        </a>
                    </li>
                </ul>
            </li>



            <div id="main-navigation-options" className="drawer-mobile-menu-container">
                <a href={pages.PUPPIES_FOR_SELL} className="drawer-searchbar-menu-module__circularButtonContainer--Xgw0D"><button type="button" className="drawer-button drawer-searchbar-menu-module__circularButton--rEiKP" tabIndex={11}>Browse All Puppies</button></a>

                <div className="drawer-browse-puppies-container"><span>Available Puppies</span></div>
                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showByBreed}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">By Breeds<i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i></button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showByCharacteristics}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">By Characteristics<i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i></button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showByGender}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">By Gender<i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i></button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showOurPromise}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">Our Promise<i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i></button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showAboutUs}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">About Us<i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i></button>
                    </li>

                    <li>
                        <div className="drawer-links-auth-container">
                            <a className="drawer-hyperlink-small" href={pages.LOGIN}>Log In</a>
                            <div className="drawer-divider"></div>
                            <a className="drawer-hyperlink-small" href={pages.SIGNUP}>Sign Up</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div id="navigation-options-by-breed" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backByBreed}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>By Breeds</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showTop10Breed}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">Top 10 Breeds
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showPureBreed}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">Purebred Breeds
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO" onClick={showDesignerBreed}>
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr">Designer Breeds
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <a href={pages.BREED} className="drawer-searchbar-menu-module__viewAllLink--RPaOW">Explore All Breeds →</a>
                    </li>
                </ul>
            </div>

            <div id="navigation-options-top-10-breed" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backTop10Breed}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>Top 10 Breeds</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    {
                        navData.top10breed.map((item, index) => {
                            return (
                                <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                                    <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=>handleNavigateToBreedPuppy(item.slug)}>{item.name}
                                        <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div id="navigation-options-pure-breed" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backPureBreed}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>Purebred Breeds</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    {
                        navData.activePurebredBreeds.map((item, index) => {
                            return (
                                <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                                    <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=>handleNavigateToBreedPuppy(item.slug)}>{item.name}
                                        <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div id="navigation-options-designer-breed" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backDesignerBreed}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>Designer Breeds</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    {
                        navData.activeDesignerBreeds.map((item, index) => {
                            return (
                                <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                                    <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=>handleNavigateToBreedPuppy(item.slug)}>{item.name}
                                        <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div id="navigation-options-by-characteristics" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backByCharacteristics}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>By Characteristics</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateToBreedPage(breeds_pages.BEST_APARTMENT_DOGS)}>Best Apartment Dogs
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateToBreedPage(breeds_pages.ALLERGY_FRIENDLY_DOGS)}>Allergy Friendly Dogs

                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateToBreedPage(breeds_pages.BEST_FAMILY_DOGS)}>Best Family Dogs
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateToBreedPage(breeds_pages.TEACUP_PUPPIES)}>Teacup Puppies
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateToBreedPage(breeds_pages.DOODLE_PUPPIES)}>Doodle Puppies
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateToBreedPage(breeds_pages.ACTIVE_DOGS)}>Top Active Dog Breeds
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div id="navigation-options-by-gender" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backByGender}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>By Gender</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateGender('female')}>Female
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigateGender('male')}>Male

                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div id="navigation-options-our-promise" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backOurPromise}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>Our Promise</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.PROMISE)}>PuppySpot Promise
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.PUPPY_STANDARDS)}>Breeder Standards
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.DOG_TRAVEL)}>Puppy Travel
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.HEALTH_CHECK)}>Health Check
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.CUSTOMER_REVIEW)}>Customer Reviews
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.PUPPYSPOT_GIVES_BACK)}>PuppySpot Gives Back
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div id="navigation-options-about-us" className="drawer-mobile-menu-container hidden">

                <div className="drawer-searchbar-menu-module__backInfo--PXQfm" onClick={backAboutUs}>
                    <i className="drawer-searchbar-menu-module__backIcon--J-Tj2"></i>
                    <span>About Us</span>
                </div>

                <ul className="drawer-searchbar-menu-module__listUl--Ed91Y">
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.ABOUT_US)}>About Us
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.RESOURCE_CENTER)}>Resource Center
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.CONTACT)}>Contact Us
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li>
                    // <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                    //     <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.FAQ)}>Frequently Asked Questions
                    //         <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                    //     </button>
                    // </li>
                    {/* <li className="drawer-searchbar-menu-module__liUnderline--IzBMO">
                        <button className="drawer-searchbar-menu-module__listLink--Mrxwr" onClick={()=> handleNavigation(pages.PUPPYSPOT_GIVES_BACK)}>Shop Supplies
                            <i className="drawer-searchbar-menu-module__chevronRightIcon--EQrg7"></i>
                        </button>
                    </li> */}
                </ul>
            </div>
        </div>
      </div>


    </div>
  );
}

export default NavDrawer;
