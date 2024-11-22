import React, { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { useLocation, useNavigate } from 'react-router-dom';



const colors =[
    {value: "6", label: 'Agouti & White'}, 
    {value: '108', label: 'Apricot'}, 
    {value: '229', label: 'Apricot & White'}, 
    {value: '195', label: 'Apricot Fawn'}, 
    {value: '175', label: 'Beaver'}, 
    {value: '181', label: 'Beaver Sable'}, 
    {value: '1', label: 'Beige'}, 
    {value: '278', label: 'Belge'}, 
    {value: '35', label: 'Bi'}, 
    {value: '144', label: 'Bi-Color'}, 
    {value: '1000046', label: 'Biscuit'}, 
    {value: '2', label: 'Black'}, 
    {value: '186', label: 'Black & Apricot'}, 
    {value: '182', label: 'Black & Brindle'}, 
    {value: '187', label: 'Black & Brown'}, 
    {value: '124', label: 'Black & Cream'}, 
    {value: '81', label: 'Black & Fawn'}, 
    {value: '219', label: 'Black & Gold'}, 
    {value: '188', label: 'Black & Gray'}, 
    {value: '197', label: 'Black & Mahogany'}, 
    {value: '95', label: 'Black & Red'}, 
    {value: '130', label: 'Black & Rust'}, 
    {value: '3', label: 'Black & Silver'}, 
    {value: '159', label: 'Black & Silver Brindle'}, 
    {value: '4', label: 'Black & Tan'}, 
    {value: '160', label: 'Black & Tan Brindle'}, 
    {value: '242', label: 'Black & Tan Merle'}, 
    {value: '7', label: 'Black & White'}, 
    {value: '240', label: 'Black and White Piebald'}, 
    {value: '16', label: 'Black Brindle'}, 
    {value: '239', label: 'Black Brindle & White'}, 
    {value: '1000012', label: 'Black Brown & White'}, 
    {value: '82', label: 'Black Fawn & White'}, 
    {value: '203', label: 'Black Gold & Silver'}, 
    {value: '204', label: 'Black Gold & White'}, 
    {value: '207', label: 'Black Gray & White'}, 
    {value: '43', label: 'Black Red & White'}, 
    {value: '1000066', label: 'Black Roan'}, 
    {value: '1000024', label: 'Black Rust & White'}, 
    {value: '96', label: 'Black Sabled Fawn'}, 
    {value: '97', label: 'Black Sabled Silver'}, 
    {value: '230', label: 'Black Silver & Tan'}, 
    {value: '44', label: 'Black Tan & Bluetick'}, 
    {value: '46', label: 'Black Tan & Redtick'}, 
    {value: '39', label: 'Black Tan & White'}, 
    {value: '1000078', label: 'Black Tri'}, 
    {value: '1000079', label: 'Black Tri Merle'}, 
    {value: '1000013', label: 'Black White & Brown'}, 
    {value: '205', label: 'Black White & Silver'}, 
    {value: '90', label: 'Black White & Tan'}, 
    {value: '64', label: 'Black, Brindle & White'}, 
    {value: '1000098', label: 'Black, Brown Undercoat'}, 
    {value: '1000101', label: 'Black, Silver Undercoat'}, 
    {value: '91', label: 'Blenheim'}, 
    {value: '17', label: 'Blue'}, 
    {value: '125', label: 'Blue & Cream'}, 
    {value: '220', label: 'Blue & Gold'}, 
    {value: '131', label: 'Blue & Rust'}, 
    {value: '93', label: 'Blue & Tan'}, 
    {value: '8', label: 'Blue & White'}, 
    {value: '222', label: 'Blue & White Pied'}, 
    {value: '18', label: 'Blue Brindle'}, 
    {value: '1000005', label: 'Blue Brindle & White'}, 
    {value: '98', label: 'Blue Brindled Fawn'}, 
    {value: '19', label: 'Blue Fawn'}, 
    {value: '227', label: 'Blue Fawn & White'}, 
    {value: '254', label: 'Blue Leopard'}, 
    {value: '37', label: 'Blue Merle'}, 
    {value: '1000050', label: 'Blue Merle & Gold'}, 
    {value: '1000049', label: 'Blue Merle & Tan'}, 
    {value: '120', label: 'Blue Merle & White'}, 
    {value: '121', label: 'Blue Merle White & Tan'}, 
    {value: '31', label: 'Blue Mottled'}, 
    {value: '117', label: 'Blue Roan'}, 
    {value: '118', label: 'Blue Roan & Tan'}, 
    {value: '176', label: 'Blue Sable'}, 
    {value: '1000062', label: 'Blue Sable & White'}, 
    {value: '41', label: 'Blue Tan & White'}, 
    {value: '1000082', label: 'Blue Tri'}, 
    {value: '48', label: 'Brindle'}, 
    {value: '65', label: 'Brindle & White'}, 
    {value: '216', label: 'Brindle Merle & White'}, 
    {value: '1000047', label: 'Brindlequin'}, 
    {value: '249', label: 'Bronze & White'}, 
    {value: '21', label: 'Brown'}, 
    {value: '1000059', label: 'Brown & Tan'}, 
    {value: '209', label: 'Brown & White'}, 
    {value: '210', label: 'Brown Black & White'}, 
    {value: '22', label: 'Brown Brindle'}, 
    {value: '1000109', label: 'Brown Tan & White'}, 
    {value: '42', label: 'Brown White & Tan'}, 
    {value: '268', label: 'Brown, Black Overlay'}, 
    {value: '115', label: 'Buff'}, 
    {value: '116', label: 'Buff & White'}, 
    {value: '184', label: 'Cafe Au Lait'}, 
    {value: '166', label: 'Charcoal'}, 
    {value: '275', label: 'Chestnut'}, 
    {value: '89', label: 'Chestnut Brindle'}, 
    {value: '75', label: 'Chocolate'}, 
    {value: '189', label: 'Chocolate & Apricot'}, 
    {value: '126', label: 'Chocolate & Cream'}, 
    {value: '1000000', label: 'Chocolate & Fawn'}, 
    {value: '226', label: 'Chocolate & Gold'}, 
    {value: '134', label: 'Chocolate & Rust'}, 
    {value: '94', label: 'Chocolate & Tan'}, 
    {value: '99', label: 'Chocolate & White'}, 
    {value: '152', label: 'Chocolate Brindle'}, 
    {value: '1000048', label: 'Chocolate Brindle & White'}, 
    {value: '101', label: 'Chocolate Brindled Fawn'}, 
    {value: '232', label: 'Chocolate Dapple'}, 
    {value: '1000102', label: 'Chocolate Gold & White'}, 
    {value: '183', label: 'Chocolate Merle'}, 
    {value: '1000064', label: 'Chocolate Merle & Tan'}, 
    {value: '1000053', label: 'Chocolate Merle & White'}, 
    {value: '194', label: 'Chocolate Phantom'}, 
    {value: '238', label: 'Chocolate Roan & White'}, 
    {value: '161', label: 'Chocolate Sable'}, 
    {value: '1000061', label: 'Chocolate Sable & White'}, 
    {value: '102', label: 'Chocolate Sabled Fawn'}, 
    {value: '170', label: 'Chocolate Stag Red'}, 
    {value: '1000071', label: 'Chocolate Tan & White'}, 
    {value: '45', label: 'Chocolate White & Tan'}, 
    {value: '274', label: 'Cinnamon'}, 
    {value: '211', label: 'Copper & White'}, 
    {value: '49', label: 'Cream'}, 
    {value: '103', label: 'Cream & White'}, 
    {value: '87', label: 'Cream Brindle'}, 
    {value: '50', label: 'Cream Sable'}, 
    {value: '1000035', label: 'Dark Brown'}, 
    {value: '145', label: 'Dark Golden'}, 
    {value: '1000068', label: 'Dark Wheaten'}, 
    {value: '259', label: 'Deadgrass'}, 
    {value: '148', label: 'English Cream'}, 
    {value: '1000052', label: 'Fallow'}, 
    {value: '23', label: 'Fawn'}, 
    {value: '127', label: 'Fawn (Isabella) Cream'}, 
    {value: '132', label: 'Fawn (Isabella) & Rust'}, 
    {value: '128', label: 'Fawn (Isabella) & Tan'}, 
    {value: '142', label: 'Fawn & Black'}, 
    {value: '171', label: 'Fawn & Rust'}, 
    {value: '77', label: 'Fawn & White'}, 
    {value: '24', label: 'Fawn Brindle'}, 
    {value: '78', label: 'Fawn Brindle & White'}, 
    {value: '104', label: 'Fawn Brindled Black'}, 
    {value: '25', label: 'Fawn Sable'}, 
    {value: '269', label: 'Fawn, Black Overlay'}, 
    {value: '155', label: 'Fawnequin'}, 
    {value: '70', label: 'Flashy Brindle'}, 
    {value: '73', label: 'Flashy Fawn'}, 
    {value: '149', label: 'Fox Red'}, 
    {value: '54', label: 'Gold'}, 
    {value: '105', label: 'Gold & White'}, 
    {value: '156', label: 'Gold Brindle'}, 
    {value: '157', label: 'Gold Sable'}, 
    {value: '228', label: 'Gold Sable & White'}, 
    {value: '146', label: 'Golden'}, 
    {value: '262', label: 'Golden Rust'}, 
    {value: '51', label: 'Gray'}, 
    {value: '212', label: 'Gray & Black'}, 
    {value: '9', label: 'Gray & White'}, 
    {value: '79', label: 'Gray Brindle'}, 
    {value: '52', label: 'Gray Sable'}, 
    {value: '164', label: 'Grizzle'}, 
    {value: '150', label: 'Harlequin'}, 
    {value: '143', label: 'Honey Pied'}, 
    {value: '223', label: 'Isabella'}, 
    {value: '1000060', label: 'Isabella & Tan'}, 
    {value: '68', label: 'Lavender'}, 
    {value: '1000054', label: 'Lavender & Tan'}, 
    {value: '69', label: 'Lavender & White'}, 
    {value: '40', label: 'Lemon & White'}, 
    {value: '147', label: 'Light Golden'}, 
    {value: '55', label: 'Lilac'}, 
    {value: '1000032', label: 'Lilac & Tan'}, 
    {value: '107', label: 'Lilac & White'}, 
    {value: '1000111', label: 'Lilac Fawn & White'}, 
    {value: '1000070', label: 'Lilac White & Tan'}, 
    {value: '26', label: 'Liver'}, 
    {value: '53', label: 'Liver & Tan'}, 
    {value: '136', label: 'Liver & White'}, 
    {value: '234', label: 'Liver & White, Blue Factored'}, 
    {value: '241', label: 'Liver Merle'}, 
    {value: '256', label: 'Liver Pepper'}, 
    {value: '1000065', label: 'Liver Roan'}, 
    {value: '137', label: 'Liver White & Tan'}, 
    {value: '47', label: 'Mahogany'}, 
    {value: '247', label: 'Mahogany & White'}, 
    {value: '151', label: 'Mantle'}, 
    {value: '153', label: 'Mantle Merle'}, 
    {value: '245', label: 'Merle'}, 
    {value: '154', label: 'Merlequin'}, 
    {value: '177', label: 'Orange'}, 
    {value: '139', label: 'Orange & White'}, 
    {value: '178', label: 'Orange Sable'}, 
    {value: '225', label: 'Orange Sable & White'}, 
    {value: '193', label: 'Phantom'}, 
    {value: '5', label: 'Red'}, 
    {value: '190', label: 'Red & Apricot'}, 
    {value: '1000010', label: 'Red & Black'}, 
    {value: '133', label: 'Red & Rust'}, 
    {value: '135', label: 'Red & Tan'}, 
    {value: '10', label: 'Red & White'}, 
    {value: '28', label: 'Red Brindle'}, 
    {value: '80', label: 'Red Brindle & White'}, 
    {value: '233', label: 'Red Dapple'}, 
    {value: '85', label: 'Red Fawn'}, 
    {value: '1000108', label: 'Red Fawn & White'}, 
    {value: '86', label: 'Red Fawn Brindle'}, 
    {value: '165', label: 'Red Gold'}, 
    {value: '264', label: 'Red Golden'}, 
    {value: '38', label: 'Red Merle'}, 
    {value: '217', label: 'Red Merle & White'}, 
    {value: '119', label: 'Red Roan'}, 
    {value: '29', label: 'Red Sable'}, 
    {value: '235', label: 'Red Sable & White'}, 
    {value: '202', label: 'Red Sesame'}, 
    {value: '34', label: 'Red Speckled'}, 
    {value: '237', label: 'Red Tri'}, 
    {value: '88', label: 'Red Wheaten'}, 
    {value: '270', label: 'Red, Black Overlay'}, 
    {value: '243', label: 'Red, Blue Factored'}, 
    {value: '71', label: 'Reverse Brindle'}, 
    {value: '72', label: 'Reverse Flashy Brindle'}, 
    {value: '92', label: 'Ruby'}, 
    {value: '261', label: 'Rust'}, 
    {value: '265', label: 'Rust Golden'}, 
    {value: '56', label: 'Sable'}, 
    {value: '11', label: 'Sable & White'}, 
    {value: '57', label: 'Sable Merle'}, 
    {value: '122', label: 'Sable Merle & White'}, 
    {value: '236', label: 'Sable Piebald'}, 
    {value: '198', label: 'Salt & Pepper'}, 
    {value: '273', label: 'Sandy'}, 
    {value: '67', label: 'Seal'}, 
    {value: '12', label: 'Seal & White'}, 
    {value: '66', label: 'Seal Brindle & White'}, 
    {value: '1000043', label: 'Sealed Brindle'}, 
    {value: '1000033', label: 'Sealed Flashy Brindle'}, 
    {value: '224', label: 'Shaded Cream'}, 
    {value: '106', label: 'Silver'}, 
    {value: '13', label: 'Silver & White'}, 
    {value: '185', label: 'Silver Beige'}, 
    {value: '158', label: 'Silver Brindle'}, 
    {value: '231', label: 'Silver Dapple'}, 
    {value: '196', label: 'Silver Fawn'}, 
    {value: '215', label: 'Silver Gray'}, 
    {value: '162', label: 'Silver Sable'}, 
    {value: '271', label: 'Silver, Black Overlay'}, 
    {value: '206', label: 'Silver, Gold & White'}, 
    {value: '112', label: 'Slate'}, 
    {value: '168', label: 'Stag Red'}, 
    {value: '74', label: 'Tan'}, 
    {value: '213', label: 'Tan & Black'}, 
    {value: '214', label: 'Tan & White'}, 
    {value: '244', label: 'Tawny'}, 
    {value: '36', label: 'Tri'}, 
    {value: '179', label: 'Tri-Colored'}, 
    {value: '76', label: 'Wheaten'}, 
    {value: '1000055', label: 'Wheaten Brindle'}, 
    {value: '14', label: 'White'}, 
    {value: '191', label: 'White & Apricot'}, 
    {value: '276', label: 'White & Badger'}, 
    {value: '15', label: 'White & Biscuit'}, 
    {value: '58', label: 'White & Black'}, 
    {value: '59', label: 'White & Blue'}, 
    {value: '60', label: 'White & Blue Merle'}, 
    {value: '140', label: 'White & Brindle'}, 
    {value: '1000001', label: 'White & Brown'}, 
    {value: '1000027', label: 'White & Buff'}, 
    {value: '114', label: 'White & Chocolate'}, 
    {value: '1000026', label: 'White & Cream'}, 
    {value: '141', label: 'White & Fawn'}, 
    {value: '1000045', label: 'White & Gray'}, 
    {value: '1000011', label: 'White & Lemon'}, 
    {value: '138', label: 'White & Liver'}, 
    {value: '1000030', label: 'White & Orange'}, 
    {value: '61', label: 'White & Red'}, 
    {value: '62', label: 'White & Red Merle'}, 
    {value: '173', label: 'White & Sable'}, 
    {value: '192', label: 'White & Silver'}, 
    {value: '277', label: 'White & Tan'}, 
    {value: '1000051', label: 'White & Yellow'}, 
    {value: '1000004', label: 'White Black & Red'}, 
    {value: '174', label: 'White Black & Tan'}, 
    {value: '123', label: 'White Merle'}, 
    {value: '167', label: 'White with Cream'}, 
    {value: '272', label: 'White, Red Shading'}, 
    {value: '129', label: 'Wild Boar'}, 
    {value: '180', label: 'Wolf Sable'}, 
    {value: '1000019', label: 'Wolfgray & Black'}, 
    {value: '163', label: 'Yellow'}
]
const varieties =[
    { value: "8", label: "American" },
    { value: "40", label: "American and English" },
    { value: "43", label: "American and European" },
    { value: "37", label: "American and German" },
    { value: "44", label: "Broken-Coated" },
    { value: "45", label: "Brush Coat" },
    { value: "46", label: "Coated" },
    { value: "34", label: "English" },
    { value: "47", label: "European" },
    { value: "56", label: "F1" },
    { value: "57", label: "F1b" },
    { value: "58", label: "F2" },
    { value: "48", label: "Fluffy-Coated" },
    { value: "9", label: "German" },
    { value: "10", label: "Hairless" },
    { value: "49", label: "Horse Coat" },
    { value: "26", label: "Long Coat" },
    { value: "30", label: "Long Coat Apple Head" },
    { value: "36", label: "Long Haired" },
    { value: "18", label: "Medium F1" },
    { value: "19", label: "Medium F1B" },
    { value: "31", label: "Medium F1B Reverse" },
    { value: "20", label: "Medium F2" },
    { value: "21", label: "Medium Multi-generation" },
    { value: "50", label: "Medium-Coated" },
    { value: "39", label: "Miniature" },
    { value: "22", label: "Miniature F1" },
    { value: "23", label: "Miniature F1B" },
    { value: "32", label: "Miniature F1B Reverse" },
    { value: "24", label: "Miniature F2" },
    { value: "5", label: "Miniature Long Haired" },
    { value: "25", label: "Miniature Multi-generation" },
    { value: "6", label: "Miniature Smooth Haired" },
    { value: "7", label: "Miniature Wire Haired" },
    { value: "59", label: "Multi-generation" },
    { value: "35", label: "Phalene (ears down)" },
    { value: "11", label: "Powderpuff" },
    { value: "12", label: "Rough-coated" },
    { value: "28", label: "Short-haired" },
    { value: "27", label: "Smooth Coat" },
    { value: "29", label: "Smooth Coat Apple Head" },
    { value: "33", label: "Smooth Haired" },
    { value: "13", label: "Smooth-coated" },
    { value: "16", label: "Soft-coated" },
    { value: "14", label: "Straight-coated" },
    { value: "17", label: "Thick-coated" },
    { value: "38", label: "Tiny Toy" },
    { value: "15", label: "Wire-coated" },
]

interface BreedObject {
    name: string;
    slug: string;
    isSelected: boolean;
    description: string;
    id: number;
    characterID: number;
}

interface Props {
    breedsArr: BreedObject[];
    setBreedsArr: React.Dispatch<React.SetStateAction<BreedObject[]>>
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>
    results: any;
    setResults: React.Dispatch<any>;
    emptyQuery: boolean;
    setEmptyQuery: React.Dispatch<React.SetStateAction<boolean>>;
    
    selectedBreedCheck: any;
    setSelectedBreedCheck: React.Dispatch<React.SetStateAction<any[]>>;
    genderFilter: string;
    setGenderFilter: React.Dispatch<React.SetStateAction<string>>;
    selectedCharacteristicsFilter: any[]; 
    setSelectedCharacteristicsFilter: React.Dispatch<React.SetStateAction<any[]>>;
    selectedVarietyFilter: any[]; 
    setSelectedVarietyFilter: React.Dispatch<React.SetStateAction<any[]>>;
    selectedSizeFilter: any[];
    setSelectedSizeFilter: React.Dispatch<React.SetStateAction<any[]>>;
    ageFilter: string;
    setAgeFilter: React.Dispatch<React.SetStateAction<string>>;
    selectedColorFilter: any[]; 
    setSelectedColorFilter: React.Dispatch<React.SetStateAction<any[]>>;
    travleFilter: string;
    setTravleFilter: React.Dispatch<React.SetStateAction<string>>;

    resetFilters: ()=> void;
}
const PuppiesForSellFilterSidebar: React.FC<Props> = ({
    breedsArr, 
    setBreedsArr, 
    query, 
    setQuery, 
    results, 
    setResults,
    emptyQuery,
    setEmptyQuery,
    selectedBreedCheck,
    setSelectedBreedCheck,
    genderFilter,
    setGenderFilter,
    selectedCharacteristicsFilter,
    setSelectedCharacteristicsFilter,
    selectedVarietyFilter,
    setSelectedVarietyFilter,
    selectedSizeFilter,
    setSelectedSizeFilter,
    ageFilter,
    setAgeFilter,
    selectedColorFilter,
    setSelectedColorFilter,
    travleFilter,
    setTravleFilter,
    resetFilters
}) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const inputRef = useRef(null)
    const checkerUlLiCheckerRef = useRef<HTMLUListElement | null>(null)
    const checkerUlLiCheckerFirstChildRef = useRef<HTMLLIElement | null>(null)
    const fuse = new Fuse(breedsArr, {
        keys: ['name', 'slug'], // Specify which keys to search
        includeScore: true,
    });

    const handleGender =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_gender-btn')
        const el = document.getElementById('js-collapsible-panel_gender')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleBreed =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_breed-btn')
        const el = document.getElementById('js-collapsible-panel_breed')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleCharacter =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_characteristics-btn')
        const el = document.getElementById('js-collapsible-panel_characteristics')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleAge =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_age-btn')
        const el = document.getElementById('js-collapsible-panel_age')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleColor =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_color-btn')
        const el = document.getElementById('js-collapsible-panel_color')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleReady =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_ready-btn')
        const el = document.getElementById('js-collapsible-panel_ready')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleVariety =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_variety-btn')
        const el = document.getElementById('js-collapsible-panel_variety')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleSize =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_size-btn')
        const el = document.getElementById('js-collapsible-panel_size')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }


    const handleGenderSelect =(gender:string)=>{
        setGenderFilter(gender)
        const searchParams = new URLSearchParams(location.search);

        if (gender === "all") {
            searchParams.delete("gender");
        } else {
            searchParams.set("gender", gender);
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
    
        if (selectedBreedCheck.length === 0) {
            searchParams.delete("breed_slug"); // Remove parameter if no breeds are selected
            searchParams.delete("variety");
            searchParams.delete("size");
        } else {
            const breedSlugs = selectedBreedCheck.map((breed: BreedObject) => breed.slug); // Extract the slug property
            searchParams.set("breed_slug", breedSlugs.join(",")); // Set selected breeds
        }
    
        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedBreedCheck]);
    
    const handleCheckboxChange = (value: string) => {
        setSelectedCharacteristicsFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedCharacteristicsFilter.length === 0) {
            searchParams.delete("breed_characteristics"); // Remove param if none selected
        } else {
            searchParams.set("breed_characteristics", selectedCharacteristicsFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedCharacteristicsFilter]);

    const handleVarietyChange = (value: string) => {
        setSelectedVarietyFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedVarietyFilter.length === 0) {
            searchParams.delete("variety"); // Remove param if none selected
        } else {
            searchParams.set("variety", selectedVarietyFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedVarietyFilter]);

    const handleSizeChange = (value: string) => {
        setSelectedSizeFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedSizeFilter.length === 0) {
            searchParams.delete("size"); // Remove param if none selected
        } else {
            searchParams.set("size", selectedSizeFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedSizeFilter]);

    const handleColorChange = (value: string) => {
        setSelectedColorFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedColorFilter.length === 0) {
            searchParams.delete("color"); // Remove param if none selected
        } else {
            searchParams.set("color", selectedColorFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedColorFilter]);

    const handleAgeSelect =(age:string)=>{
        setAgeFilter(age)
        const searchParams = new URLSearchParams(location.search);

        if (age === "all-age") {
            searchParams.delete("age");
        } else {
            searchParams.set("age", age);
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    const handleTravelSelect =(travel:string)=>{
        setTravleFilter(travel)
        const searchParams = new URLSearchParams(location.search);

        if (travel === "all-pupies") {
            searchParams.delete("travel");
        } else {
            searchParams.set("travel", travel);
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    // Separate selected and unselected items
    const selectedItems = colors.filter((item) => selectedColorFilter.includes(item.value));
    const unselectedItems = colors.filter((item) => !selectedColorFilter.includes(item.value));
    const sortedColors = [...selectedItems, ...unselectedItems];

    // Separate selected and unselected items
    const selectedItemsVariety = varieties.filter((item) => selectedVarietyFilter.includes(item.value));
    const unselectedItemsVariety = varieties.filter((item) => !selectedVarietyFilter.includes(item.value));
    const sortedVarieties = [...selectedItemsVariety, ...unselectedItemsVariety];

    
    const handleSelectionCheck = () => {
        // Store the filtered array in selectedBreedCheck state
        setSelectedBreedCheck(breedsArr.filter((item) => item.isSelected));
    }
    const handleCheckAndUncheckBreed =(name: string)=>{
            setBreedsArr((prevList) =>
                prevList.map((breed) =>
                breed.slug === name
                    ? { ...breed, isSelected: !breed.isSelected } // Toggle isSelected
                    : breed
                )
            );
            handleSelectionCheck()
    }
    const handleSelectAll =()=>{
        setBreedsArr((prevList) =>
                prevList.map((breed) =>(
                    { ...breed, isSelected: false } // Toggle isSelected
                )
            )
          );
          
          handleSelectionCheck()
          const searchParams = new URLSearchParams(location.search);
          searchParams.delete("breed_slug"); // Remove parameter if no breeds are selected
          searchParams.delete("variety");
          searchParams.delete("size");
    }
    const closeSearch=()=>{
        handleSelectionCheck()
        setQuery('')

    }
    const handleSearch = () => {
        if(query === ''){
            setEmptyQuery(true)
        }else{
            setEmptyQuery(false)
        }
        setQuery(query);
    
        if (query.trim()) {
        const fuseResults = fuse.search(query);
            setResults(fuseResults.map((result: any) => result.item));
        } else {
            setResults(breedsArr);
        }
    };

    useEffect(()=>{
        handleSearch()

        if(checkerUlLiCheckerFirstChildRef.current){
            if (selectedBreedCheck.length <= 0) {
                checkerUlLiCheckerFirstChildRef.current.classList.add('selected');
                checkerUlLiCheckerFirstChildRef.current.classList.add('active');
            }else{
                checkerUlLiCheckerFirstChildRef.current.classList.remove('selected');
                checkerUlLiCheckerFirstChildRef.current.classList.remove('active');
            }
        }
    },[query, breedsArr, selectedBreedCheck])
    useEffect(()=>{
        handleSelectionCheck()
    }, [breedsArr])

  return (

    <section className="puppies-for-sale__sidebar">
        <div className="puppies-for-sale-filter puppies-for-sale__filters js-filter-menu hidden">

            <div className="puppies-for-sale-filter__content">
                <div className="puppies-for-sale-filter__header">
                    <span className="bold">Filters</span>
                    <div>
                        <a onClick={resetFilters} className="js-clear-filters ab-filters-btn text-underline" href="javascript:void(0)">
                        Reset
                        </a>
                        <a className="js-close-filters ab-filters-btn text-underline" href="javascript:void(0)">
                        Close
                        </a>
                    </div>
                </div>

                <form id="js-filters" className="puppy-list-filter" autoComplete="off">
                    <ul className="puppy-list-filter__main">
                        <li className="puppy-list-filter__gender js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3
                                    id='js-collapsible-panel_gender-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle js-puppy-list-filter desktop-collapsible-open open"
                                    onClick={handleGender}
                                >
                                    <span>Gender</span>
                                </h3>
                                <div id='js-collapsible-panel_gender' className="js-collapsible-panel">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="puppy_gender" id="target">
                                            <div className="input-container selected" data-facet-id="1">
                                                <input name="gender" type="radio" id="gender-male" value="male" checked={genderFilter === "male"} onClick={()=> handleGenderSelect('male')} />
                                                <label htmlFor="gender-male" className="gtag-filter_all gtag-filter_male">Male</label>
                                            </div>
                                            <div className="input-container" data-facet-id="2">
                                                <input name="gender" type="radio" id="gender-female" value="female" checked={genderFilter === "female"} onClick={()=> handleGenderSelect('female')} />
                                                <label htmlFor="gender-female" className="gtag-filter_all gtag-filter_female">Female</label>
                                            </div>
                                            <div className="input-container">
                                                <input name="gender" type="radio" id="gender-either" value="all" checked={genderFilter === "all"} onClick={()=> handleGenderSelect('all')} />
                                                <label htmlFor="gender-either" className="gtag-filter_all gtag-filter_eitther">All</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__breed js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h2 
                                    id='js-collapsible-panel_breed-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle js-puppy-list-filter desktop-collapsible-open open"
                                    onClick={handleBreed}
                                >
                                    <span>Breed</span>
                                </h2>
                                <div id='js-collapsible-panel_breed' className="js-collapsible-panel">
                                    <div className="collapsible-panel__content">
                                        <div data-breed-select="" id="breed" className="breed-searchbar" data-filter="breed_slug" data-breed-id="">
                                            <div className="selectr-container breed-selectr selectr-desktop multiple has-selected open" style={{width: "100%"}}>
                                                <div className="selectr-selected" tabIndex={0} style={{display: 'none'}} aria-expanded="true">
                                                    <ul className="selectr-label selectr-tags"><li className="selectr-tag" tabIndex={-1}>
                                                        All Breeds
                                                        <button className="selectr-tag-remove" type="button"></button>
                                                        </li>
                                                    </ul>
                                                    <div className="selectr-placeholder">Search for Breeds</div>
                                                </div>
                                                <div className="selectr-options-container">
                                                    <div className="selectr-input-container">
                                                        <input 
                                                            ref={inputRef}
                                                            className="selectr-input" 
                                                            autoComplete="off" 
                                                            autoCorrect="off" 
                                                            autoCapitalize="none" 
                                                            spellCheck="true" 
                                                            role="textbox" 
                                                            type="search" 
                                                            placeholder="Search for Breeds" 
                                                            tabIndex={0} 
                                                            value={query}
                                                            onChange={(e)=>setQuery(e.currentTarget.value)} 
                                                        />
                                                        <button onClick={closeSearch} className="selectr-input-clear" style={{display: `${emptyQuery ? 'none' : 'block'}`}} type="button"></button>
                                                    </div>
                                                        <div className="selectr-notice"></div>
                                                        <ul
                                                            ref={checkerUlLiCheckerRef}
                                                            className="selectr-options"
                                                            role="tree"
                                                            aria-hidden="false"
                                                            aria-expanded="true"
                                                        >
                                                            {query ? null : (
                                                                <li
                                                                    ref={checkerUlLiCheckerFirstChildRef}
                                                                    className="selectr-option selected active"
                                                                    role="treeitem"
                                                                    tabIndex={-1}
                                                                    aria-selected="true"
                                                                    onClick={handleSelectAll}
                                                                >
                                                                    All Breeds
                                                                </li>
                                                            )}

                                                            {results.length > 0 ? (
                                                                // Sort items so selected appear on top
                                                                [...results]
                                                                    .sort((a, b) => (b.isSelected ? 1 : 0) - (a.isSelected ? 1 : 0))
                                                                    .map((item, index) => (
                                                                        <li
                                                                            key={index}
                                                                            id={`breed-check-item-name_${item.slug}`}
                                                                            onClick={() => handleCheckAndUncheckBreed(item.slug)}
                                                                            className={
                                                                                item.isSelected
                                                                                    ? "selectr-option selected active"
                                                                                    : "selectr-option"
                                                                            }
                                                                            role="treeitem"
                                                                            tabIndex={-1}
                                                                            aria-selected="false"
                                                                            data-facet-id={item.id}
                                                                        >
                                                                            {item.name}
                                                                        </li>
                                                                    ))
                                                            ) : (
                                                                <div className="selectr-notice">No results.</div>
                                                            )}
                                                        </ul>
                                                </div>
                                                {/* <select className="js-breed-searchbar selectr-hidden" multiple={true} tabIndex={-1} aria-hidden="true">
                                                    <option value="" data-breed-slug="" className="js-breed-searchbar__all" data-is-default="" selected={true}>
                                                    All Breeds
                                                    </option>
                                                    <option id="goldendoodle" data-facet-id="334" data-breed-slug="goldendoodle" value="goldendoodle">
                                                    Goldendoodle
                                                    </option>
                                                    <option id="cavapoo" data-facet-id="390" data-breed-slug="cavapoo" value="cavapoo">
                                                    Cavapoo
                                                    </option>
                                                    <option id="bernedoodle" data-facet-id="444" data-breed-slug="bernedoodle" value="bernedoodle">
                                                    Bernedoodle
                                                    </option>
                                                    <option id="poodle" data-facet-id="322" data-breed-slug="poodle" value="poodle">
                                                    Poodle
                                                    </option>
                                                    <option id="golden-retriever" data-facet-id="228" data-breed-slug="golden-retriever" value="golden-retriever">
                                                    Golden Retriever
                                                    </option>
                                                    <option id="dachshund" data-facet-id="222" data-breed-slug="dachshund" value="dachshund">
                                                    Dachshund
                                                    </option>
                                                    <option id="maltipoo" data-facet-id="345" data-breed-slug="maltipoo" value="maltipoo">
                                                    Maltipoo
                                                    </option>
                                                    <option id="cavalier-king-charles-spaniel" data-facet-id="276" data-breed-slug="cavalier-king-charles-spaniel" value="cavalier-king-charles-spaniel">
                                                    Cavalier King Charles Spaniel
                                                    </option>
                                                    <option id="labrador-retriever" data-facet-id="231" data-breed-slug="labrador-retriever" value="labrador-retriever">
                                                    Labrador Retriever
                                                    </option>
                                                    <option id="french-bulldog" data-facet-id="225" data-breed-slug="french-bulldog" value="french-bulldog">
                                                    French Bulldog
                                                    </option>
                                                    <option id="havanese" data-facet-id="302" data-breed-slug="havanese" value="havanese">
                                                    Havanese
                                                    </option>
                                                    <option id="german-shepherd-dog" data-facet-id="226" data-breed-slug="german-shepherd-dog" value="german-shepherd-dog">
                                                    German Shepherd Dog
                                                    </option>
                                                    <option id="yorkshire-terrier" data-facet-id="249" data-breed-slug="yorkshire-terrier" value="yorkshire-terrier">
                                                    Yorkshire Terrier
                                                    </option>
                                                    <option id="shih-tzu" data-facet-id="244" data-breed-slug="shih-tzu" value="shih-tzu">
                                                    Shih Tzu
                                                    </option>
                                                    <option id="cocker-spaniel" data-facet-id="220" data-breed-slug="cocker-spaniel" value="cocker-spaniel">
                                                    Cocker Spaniel
                                                    </option>
                                                    <option id="pomeranian" data-facet-id="238" data-breed-slug="pomeranian" value="pomeranian">
                                                    Pomeranian
                                                    </option>
                                                    <option id="miniature-schnauzer" data-facet-id="320" data-breed-slug="miniature-schnauzer" value="miniature-schnauzer">
                                                    Miniature Schnauzer
                                                    </option>
                                                    <option id="maltese" data-facet-id="232" data-breed-slug="maltese" value="maltese">
                                                    Maltese
                                                    </option>
                                                    <option id="labradoodle" data-facet-id="327" data-breed-slug="labradoodle" value="labradoodle">
                                                    Labradoodle
                                                    </option>
                                                    <option id="beagle" data-facet-id="212" data-breed-slug="beagle" value="beagle">
                                                    Beagle
                                                    </option>
                                                    <option id="cockapoo" data-facet-id="347" data-breed-slug="cockapoo" value="cockapoo">
                                                    Cockapoo
                                                    </option>
                                                    <option id="chihuahua" data-facet-id="219" data-breed-slug="chihuahua" value="chihuahua">
                                                    Chihuahua
                                                    </option>
                                                    <option id="pembroke-welsh-corgi" data-facet-id="324" data-breed-slug="pembroke-welsh-corgi" value="pembroke-welsh-corgi">
                                                    Pembroke Welsh Corgi
                                                    </option>
                                                    <option id="pomsky" data-facet-id="437" data-breed-slug="pomsky" value="pomsky">
                                                    Pomsky
                                                    </option>
                                                    <option id="australian-shepherd" data-facet-id="258" data-breed-slug="australian-shepherd" value="australian-shepherd">
                                                    Australian Shepherd
                                                    </option>
                                                    <option id="boston-terrier" data-facet-id="217" data-breed-slug="boston-terrier" value="boston-terrier">
                                                    Boston Terrier
                                                    </option>
                                                    <option id="bichonpoo" data-facet-id="434" data-breed-slug="bichonpoo" value="bichonpoo">
                                                    Bichonpoo
                                                    </option>
                                                    <option id="bernese-mountain-dog" data-facet-id="264" data-breed-slug="bernese-mountain-dog" value="bernese-mountain-dog">
                                                    Bernese Mountain Dog
                                                    </option>
                                                    <option id="bichon-frise" data-facet-id="218" data-breed-slug="bichon-frise" value="bichon-frise">
                                                    Bichon Frise
                                                    </option>
                                                    <option id="siberian-husky" data-facet-id="245" data-breed-slug="siberian-husky" value="siberian-husky">
                                                    Siberian Husky
                                                    </option>
                                                    <option id="havapoo" data-facet-id="447" data-breed-slug="havapoo" value="havapoo">
                                                    Havapoo
                                                    </option>
                                                    <option id="aussiedoodle" data-facet-id="404" data-breed-slug="aussiedoodle" value="aussiedoodle">
                                                    Aussiedoodle
                                                    </option>
                                                    <option id="coton-de-tulear" data-facet-id="285" data-breed-slug="coton-de-tulear" value="coton-de-tulear">
                                                    Coton de Tulear
                                                    </option>
                                                    <option id="morkie" data-facet-id="367" data-breed-slug="morkie" value="morkie">
                                                    Morkie
                                                    </option>
                                                    <option id="yorkiepoo" data-facet-id="344" data-breed-slug="yorkiepoo" value="yorkiepoo">
                                                    Yorkiepoo
                                                    </option>
                                                    <option id="great-dane" data-facet-id="299" data-breed-slug="great-dane" value="great-dane">
                                                    Great Dane
                                                    </option>
                                                    <option id="shihpoo" data-facet-id="378" data-breed-slug="shihpoo" value="shihpoo">
                                                    Shihpoo
                                                    </option>
                                                    <option id="rottweiler" data-facet-id="241" data-breed-slug="rottweiler" value="rottweiler">
                                                    Rottweiler
                                                    </option>
                                                    <option id="boxer" data-facet-id="216" data-breed-slug="boxer" value="boxer">
                                                    Boxer
                                                    </option>
                                                    <option id="sheepadoodle" data-facet-id="415" data-breed-slug="sheepadoodle" value="sheepadoodle">
                                                    Sheepadoodle
                                                    </option>
                                                    <option id="west-highland-white-terrier" data-facet-id="253" data-breed-slug="west-highland-white-terrier" value="west-highland-white-terrier">
                                                    West Highland White Terrier
                                                    </option>
                                                    <option id="shiba-inu" data-facet-id="263" data-breed-slug="shiba-inu" value="shiba-inu">
                                                    Shiba Inu
                                                    </option>
                                                    <option id="pug" data-facet-id="240" data-breed-slug="pug" value="pug">
                                                    Pug
                                                    </option>
                                                    <option id="cavachon" data-facet-id="385" data-breed-slug="cavachon" value="cavachon">
                                                    Cavachon
                                                    </option>
                                                    <option id="bulldog" data-facet-id="214" data-breed-slug="bulldog" value="bulldog">
                                                    Bulldog
                                                    </option>
                                                    <option id="miniature-pinscher" data-facet-id="233" data-breed-slug="miniature-pinscher" value="miniature-pinscher">
                                                    Miniature Pinscher
                                                    </option>
                                                    <option id="pekingese" data-facet-id="236" data-breed-slug="pekingese" value="pekingese">
                                                    Pekingese
                                                    </option>
                                                    <option id="shetland-sheepdog" data-facet-id="243" data-breed-slug="shetland-sheepdog" value="shetland-sheepdog">
                                                    Shetland Sheepdog
                                                    </option>
                                                    <option id="doberman-pinscher" data-facet-id="223" data-breed-slug="doberman-pinscher" value="doberman-pinscher">
                                                    Doberman Pinscher
                                                    </option>
                                                    <option id="basset-hound" data-facet-id="211" data-breed-slug="basset-hound" value="basset-hound">
                                                    Basset Hound
                                                    </option>
                                                    <option id="mal-shi" data-facet-id="383" data-breed-slug="mal-shi" value="mal-shi">
                                                    Mal-Shi
                                                    </option>
                                                    <option id="frenchton" data-facet-id="425" data-breed-slug="frenchton" value="frenchton">
                                                    Frenchton
                                                    </option>
                                                    <option id="saint-berdoodle" data-facet-id="476" data-breed-slug="saint-berdoodle" value="saint-berdoodle" className="hidden">
                                                    Saint Berdoodle
                                                    </option>
                                                    <option id="pomapoo" data-facet-id="346" data-breed-slug="pomapoo" value="pomapoo">
                                                    Pomapoo
                                                    </option>
                                                    <option id="portuguese-water-dog" data-facet-id="275" data-breed-slug="portuguese-water-dog" value="portuguese-water-dog">
                                                    Portuguese Water Dog
                                                    </option>
                                                    <option id="russell-terrier" data-facet-id="230" data-breed-slug="russell-terrier" value="russell-terrier">
                                                    Jack Russell Terrier
                                                    </option>
                                                    <option id="shichon" data-facet-id="381" data-breed-slug="shichon" value="shichon">
                                                    Shichon
                                                    </option>
                                                    <option id="puggle" data-facet-id="341" data-breed-slug="puggle" value="puggle">
                                                    Puggle
                                                    </option>
                                                    <option id="samoyed" data-facet-id="268" data-breed-slug="samoyed" value="samoyed">
                                                    Samoyed
                                                    </option>
                                                    <option id="corgipoo" data-facet-id="518" data-breed-slug="corgipoo" value="corgipoo">
                                                    Corgipoo
                                                    </option>
                                                    <option id="newfoundland" data-facet-id="286" data-breed-slug="newfoundland" value="newfoundland">
                                                    Newfoundland
                                                    </option>
                                                    <option id="american-corgi" data-facet-id="522" data-breed-slug="american-corgi" value="american-corgi">
                                                    American Corgi
                                                    </option>
                                                    <option id="akita" data-facet-id="209" data-breed-slug="akita" value="akita" className="hidden">
                                                    Akita
                                                    </option>
                                                    <option id="shorkie" data-facet-id="382" data-breed-slug="shorkie" value="shorkie">
                                                    Shorkie
                                                    </option>
                                                    <option id="scottish-terrier" data-facet-id="242" data-breed-slug="scottish-terrier" value="scottish-terrier">
                                                    Scottish Terrier
                                                    </option>
                                                    <option id="old-english-sheepdog" data-facet-id="278" data-breed-slug="old-english-sheepdog" value="old-english-sheepdog">
                                                    Old English Sheepdog
                                                    </option>
                                                    <option id="golden-mountain-doodle" data-facet-id="576" data-breed-slug="golden-mountain-doodle" value="golden-mountain-doodle">
                                                    Golden Mountain Doodle
                                                    </option>
                                                    <option id="collie" data-facet-id="221" data-breed-slug="collie" value="collie">
                                                    Collie
                                                    </option>
                                                    <option id="yoranian" data-facet-id="517" data-breed-slug="yoranian" value="yoranian">
                                                    Yoranian
                                                    </option>
                                                    <option id="schnoodle" data-facet-id="387" data-breed-slug="schnoodle" value="schnoodle">
                                                    Schnoodle
                                                    </option>
                                                    <option id="papillon" data-facet-id="235" data-breed-slug="papillon" value="papillon">
                                                    Papillon
                                                    </option>
                                                    <option id="dogue-de-bordeaux" data-facet-id="290" data-breed-slug="dogue-de-bordeaux" value="dogue-de-bordeaux" className="hidden">
                                                    Dogue de Bordeaux
                                                    </option>
                                                    <option id="cairn-terrier" data-facet-id="274" data-breed-slug="cairn-terrier" value="cairn-terrier">
                                                    Cairn Terrier
                                                    </option>
                                                    <option id="frenchie-pug" data-facet-id="572" data-breed-slug="frenchie-pug" value="frenchie-pug" className="hidden">
                                                    Frenchie Pug
                                                    </option>
                                                    <option id="vizsla" data-facet-id="247" data-breed-slug="vizsla" value="vizsla">
                                                    Vizsla
                                                    </option>
                                                    <option id="yo-chon" data-facet-id="559" data-breed-slug="yo-chon" value="yo-chon">
                                                    Yo-Chon
                                                    </option>
                                                    <option id="golden-cavadoodle" data-facet-id="580" data-breed-slug="golden-cavadoodle" value="golden-cavadoodle">
                                                    Golden Cavadoodle
                                                    </option>
                                                    <option id="chinese-shar-pei" data-facet-id="330" data-breed-slug="chinese-shar-pei" value="chinese-shar-pei">
                                                    Chinese Shar-Pei
                                                    </option>
                                                    <option id="dalmatian" data-facet-id="289" data-breed-slug="dalmatian" value="dalmatian">
                                                    Dalmatian
                                                    </option>
                                                    <option id="keeshond" data-facet-id="305" data-breed-slug="keeshond" value="keeshond" className="hidden">
                                                    Keeshond
                                                    </option>
                                                    <option id="cane-corso" data-facet-id="343" data-breed-slug="cane-corso" value="cane-corso">
                                                    Cane Corso
                                                    </option>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__collection js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_characteristics-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter" 
                                    onClick={handleCharacter}
                                >
                                    <span>Characteristics</span>
                                </h3>
                                <div id='js-collapsible-panel_characteristics' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="breed_collection_ids">
                                            {[
                                                { id: "11", label: "Top Active Dog Breeds" },
                                                { id: "2", label: "Best Apartment Dogs" },
                                                { id: "4", label: "Best Family Dogs" },
                                                { id: "5", label: "Teacup Puppies" },
                                                { id: "3", label: "Allergy Friendly Dogs" },
                                                { id: "6", label: "Doodle Puppies" },
                                            ].map((item) => (
                                                <div className="input-container" data-facet-id={item.id} key={item.id}>
                                                    <input
                                                        type="checkbox"
                                                        id={`checkbox-${item.id}`}
                                                        value={item.id}
                                                        className="js-collection-input"
                                                        name="collection"
                                                        checked={selectedCharacteristicsFilter.includes(item.id)}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                    />
                                                    <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={selectedBreedCheck.length <= 0 ? "puppy-list-filter__variety js-filter js-breed-filter hidden" : "puppy-list-filter__variety js-filter js-breed-filter"}  >
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 id='js-collapsible-panel_variety-btn' className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter" onClick={handleVariety}>
                                <span>Variety</span>
                                </h3>
                                <div id='js-collapsible-panel_variety' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="puppy_variety_id">
                                            {sortedVarieties.map((item) => (
                                                <div className="input-container" data-facet-id={item.value} key={item.value}>
                                                    <input
                                                        type="checkbox"
                                                        id={`variety-${item.value}`}
                                                        value={item.value}
                                                        name="variety"
                                                        checked={selectedVarietyFilter.includes(item.value)}
                                                        onChange={() => handleVarietyChange(item.value)}
                                                    />
                                                    <label className="variety-classes_all" htmlFor={`variety-${item.value}`}>
                                                        {item.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={selectedBreedCheck.length <= 0 ? "puppy-list-filter__variety-sizes js-filter js-breed-filter hidden" : "puppy-list-filter__variety-sizes js-filter js-breed-filter"}>
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 id='js-collapsible-panel_size-btn' className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter" onClick={handleSize}>
                                <span>Size</span>
                                </h3>
                                <div id='js-collapsible-panel_size' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="variety_size_id">
                                            {[
                                                    { id: "1", label: "Miniature" },
                                                    { id: "2", label: "Medium" },
                                                    { id: "3", label: "Standard" },
                                                ].map((item) => (
                                                    <div className="input-container" data-facet-id={item.id} key={item.id}>
                                                        <input
                                                            type="checkbox"
                                                            id={`variety-size-${item.id}`}
                                                            value={item.id}
                                                            name="varietySize"
                                                            checked={selectedSizeFilter.includes(item.id)}
                                                            onChange={() => handleSizeChange(item.id)}
                                                        />
                                                        <label htmlFor={`variety-size-${item.id}`} className='variety-size_all'>{item.label}</label>
                                                    </div>                                                    
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__age js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_age-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter"
                                    onClick={handleAge}
                                >
                                <span>Age</span>
                                </h3>
                                <div id='js-collapsible-panel_age' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="litter_birth_date" id="age">
                                            <div className="input-container">
                                            <input name="ages" type="radio" id="all-ages" value="" data-max-age="" data-min-age="" checked={ageFilter === "all-age"} onClick={()=> handleAgeSelect('all-age')} />
                                            <label htmlFor="all-ages" className="gtag-filter_age_all gtag-filter_age_any">Any age</label>
                                            </div>
                                            <div className="input-container" data-facet-id="upto8">
                                            <input name="ages" type="radio" id="up-to-8" value="upto8" data-max-age="8" data-min-age="" checked={ageFilter === "8"} onClick={()=> handleAgeSelect('8')} />
                                            <label htmlFor="up-to-8" className="gtag-filter_age_all gtag-filter_age_up_to_8">Up to 8 weeks</label>
                                            </div>
                                            <div className="input-container" data-facet-id="upto12">
                                            <input name="ages" type="radio" id="up-to-12" value="upto12" data-max-age="12" data-min-age="" checked={ageFilter === "12"} onClick={()=> handleAgeSelect('12')}  />
                                            <label htmlFor="up-to-12" className="gtag-filter_age_all gtag-filter_age_up_to_12">Up to 12 weeks</label>
                                            </div>
                                            <div className="input-container" data-facet-id="upto16">
                                            <input name="ages" type="radio" id="up-to-16" value="upto16" data-max-age="16" data-min-age="" checked={ageFilter === "16"} onClick={()=> handleAgeSelect('16')}  />
                                            <label htmlFor="up-to-16" className="gtag-filter_age_all gtag-filter_age_up_to_16">Up to 16 weeks</label>
                                            </div>
                                            <div className="input-container" data-facet-id="17plus">
                                            <input name="ages" type="radio" id="17-plus" value="17plus" data-max-age="" data-min-age="17" checked={ageFilter === "17"} onClick={()=> handleAgeSelect('17')}  />
                                            <label htmlFor="17-plus" className="gtag-filter_age_all gtag-filter_age_older_than_16">Older than 16
                                            weeks</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </li>

                        <li className="puppy-list-filter__color js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_color-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter"
                                    onClick={handleColor}
                                >
                                    <span>Color</span>
                                </h3>
                                <div id='js-collapsible-panel_color' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <ul data-filter="puppy_color_id" className="puppy-list-filter__color-list" id="color" style={{marginLeft: '0'}}>
                                            {sortedColors.map((item) => (
                                                <li className="input-container" data-facet-id={item.value} key={item.value}>
                                                    <input
                                                        type="checkbox"
                                                        name="color"
                                                        data-id={item.value}
                                                        id={`color-${item.value}`}
                                                        value={item.value}
                                                        checked={selectedColorFilter.includes(item.value)}
                                                        onChange={() => handleColorChange(item.value)}
                                                    />
                                                    <label className="color-inputs_label_options" htmlFor={`color-${item.value}`}>
                                                        {item.label}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__travelready js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_ready-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter"
                                    onClick={handleReady}
                                >
                                    <span>Ready To Travel</span>
                                </h3>
                                <div id='js-collapsible-panel_ready' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="can_travel" id="canTravel">
                                            <div className="input-container">
                                                <input name="canTravel" type="radio" id="travel-check-all-puppies" checked={travleFilter === "all-pupies"} onClick={()=> handleTravelSelect('all-pupies')}  />
                                                <label htmlFor="travel-check-all-puppies"  className="filter_only_ready_to_travel">All Puppies</label>
                                            </div>
                                            <div className="input-container" data-facet-id="1">
                                                <input name="canTravel" type="radio" id="travel-check" checked={travleFilter === "1"} onClick={()=> handleTravelSelect('1')} />
                                                <label htmlFor="travel-check" className="filter_only_ready_to_travel">Ready To Travel Now</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <input data-filter="search" name="search" type="hidden" value="" />
                </form>
            </div>

            <div className="bottom-controls hidden">
                <div>
                    <a className="text-tangerine js-clear-filters reset-button" href="javascript:void(0)">
                    CLEAR ALL
                    </a>
                </div>
                <div>
                    <a className="text-tangerine js-close-filters close-button" href="javascript:void(0)">
                    DONE
                    </a>
                </div>
            </div>

        </div>
        <div className="puppies-for-sale__related puppies-for-sale__related-filters"> </div>
    </section>

          
  );
}

export default PuppiesForSellFilterSidebar;