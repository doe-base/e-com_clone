import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import PuppiesForSellContainer from '../container/PuppiesForSell';
import AuthenticationPopup from '../components/authentication-popups/AuthenticationPopup';
import AllPuppies from '../data/puppy-data/all_puppies.json'
import allBreed from '../data/transformed_breeds.json'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
 
const colorsArr =[
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
const varietiesArr =[
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
const charactersArr =[
  { id: "11", label: "Top Active Dog Breeds" },
  { id: "2", label: "Best Apartment Dogs" },
  { id: "4", label: "Best Family Dogs" },
  { id: "5", label: "Teacup Puppies" },
  { id: "3", label: "Allergy Friendly Dogs" },
  { id: "6", label: "Doodle Puppies" },
]
function getItemsByPage<T>(page: number, array: T[]): T[] {
  if (typeof page !== 'number' || Number.isNaN(page)) {
    page = 1;
  }
  page === 0 && (page = 1);

  const itemsPerPage = 35;
  const totalItems = array.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (page > totalPages) {
    // If the page exceeds the total number of pages, return the last set of items
    page = totalPages;
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return array.slice(startIndex, endIndex);
}

interface Props{}
const PuppiesForSell: React.FC<Props> = ({}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    const page = Number(params.get('page') || '1');
    const gender = params.get('gender');
    const age = params.get('age');
    const travel = params.get('travel');
    const breed_slug = params.get('breed_slug')?.split(',');

    const [puppyCharater, setPuppyCharater] = useState({
      "0": {
        "id": 2,
        "title": "Best Apartment Dogs",
        "slug": "best-apartment-dogs"
      },
      "1": {
        "id": 3,
        "title": "Allergy Friendly Dogs",
        "slug": "allergy-friendly-dogs"
      },
      "2": {
        "id": 4,
        "title": "Best Family Dogs",
        "slug": "best-family-dogs"
      },
      "3": {
        "id": 5,
        "title": "Teacup Puppies",
        "slug": "teacup-puppies"
      },
      "4": {
        "id": 6,
        "title": "Doodle Puppies",
        "slug": "doodle-puppies"
      },
      "5": {
        "id": 11,
        "title": "Top Active Dog Breeds",
        "slug": "active-dogs"
      }
    })
    const [allPuppies, setAllPuppies] = useState(AllPuppies)
    const [sortOption, setSortOption] = useState('Featured')
    const [breedsArr, setBreedsArr] = useState(allBreed)
    const [filterArray, setFilterArray] = useState(allPuppies)
    const [puppySinglePageArr, setPuppySinglePageArr] = useState(getItemsByPage(page, filterArray))
    const [totalPages, setTotalPages] = useState(Math.ceil(filterArray.length / 35))

    // Dynamic Checkbox
    const [colors, setColors] = useState(colorsArr)
    const [varieties, setVarieties] = useState(varietiesArr)
    const [characters, setCharacters] = useState(charactersArr)


    // Filter States
    const [genderFilter, setGenderFilter] = useState(gender ? gender : 'all')
    const [selectedBreedCheck, setSelectedBreedCheck] = useState<any[]>(breedsArr.filter((item) => breed_slug?.includes(item.slug)));
    const [selectedCharacteristicsFilter, setSelectedCharacteristicsFilter] = useState<any[]>([])
    const [selectedVarietyFilter, setSelectedVarietyFilter] = useState<any[]>([])
    const [selectedSizeFilter, setSelectedSizeFilter] = useState<any[]>([])
    const [ageFilter, setAgeFilter] = useState(age ? age : 'all-age')
    const [selectedColorFilter, setSelectedColorFilter] = useState<any[]>([])
    const [travleFilter, setTravleFilter] = useState(travel ? travel : 'all-pupies')

  useEffect(() =>{
      document.title = "Puppies for Sale | Dogs for sale | PuppySpot";
      document.body.classList.add('gray-background')
  }, []);


  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
        if (searchParams.has("page")) {
            // Clone the current search parameters
            const updatedParams = new URLSearchParams(searchParams.toString());
            updatedParams.delete("page"); // Remove the "page" parameter

            // Update the URL without reloading the page
            navigate(`?${updatedParams.toString()}`, { replace: true });
        }
    }, [
      genderFilter,
      selectedBreedCheck,
      selectedCharacteristicsFilter,
      selectedVarietyFilter,
      selectedSizeFilter,
      ageFilter,
      selectedColorFilter,
      travleFilter,
  ]);


  useEffect(() => {
    if (selectedBreedCheck.length === 0) {
      setColors(colorsArr); // Reset to show all colors if no breed is selected
      return;
    }
  
      // Create a dynamic color array from the filter array
      const dynamicColors = colorsArr.filter((color) =>
        filterArray.some(
          (item) => item.puppy_info_details?.Color?.toLowerCase() === color.label.toLowerCase()
        )
      );
      setColors(dynamicColors);
  }, [filterArray, selectedBreedCheck]);  
  useEffect(() => {
    if (selectedBreedCheck.length === 0) {
      setVarieties(varietiesArr); // Reset to show all varieties if no breed is selected
      return;
    }
  
    // Filter varietiesArr to include only varieties that are present in filterArray
    const dynamicVarieties = varietiesArr.filter((variety) =>
      filterArray.some(
        (item) =>
          item.puppy_info_details?.Variety?.toLowerCase() ===
          variety.label.toLowerCase()
      )
    );
    setVarieties(dynamicVarieties);
  }, [filterArray, selectedBreedCheck]);
  useEffect(() => {
    if (selectedBreedCheck.length === 0) {
      setCharacters(charactersArr); // Reset to show all characters if no breed is selected
      return;
    }
  
    // Filter charactersArr to include only those in filterArray
    const dynamicCharacters = charactersArr.filter((character) =>
      filterArray.some(
        (item) => String(item.characterID) === character.id
      )
    );
    setCharacters(dynamicCharacters);
  }, [filterArray, selectedBreedCheck]);
  

  useEffect(()=> {
    setBreedsArr((prevBreedsArr) =>
      prevBreedsArr.map((breed) => ({
          ...breed,
          isSelected: Array.isArray(breed_slug) && breed_slug.includes(breed.slug),
      }))
    );
  }, [])
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const breedCollectionIds = searchParams.get("breed_characteristics");
    if (breedCollectionIds) {
      setSelectedCharacteristicsFilter(breedCollectionIds.split(","));
    }
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sizeCollection = searchParams.get("size");
    if (sizeCollection) {
      setSelectedSizeFilter(sizeCollection.split(","));
    }
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const colorCollection = searchParams.get("color");
    if (colorCollection) {
      setSelectedColorFilter(colorCollection.split(","));
    }
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const varietyCollection = searchParams.get("variety");
    if (varietyCollection) {
      setSelectedVarietyFilter(varietyCollection.split(","));
    }
  }, []);

    useEffect(()=> {

      if(filterArray.length <= 0){
        setPuppySinglePageArr(getItemsByPage(page, allPuppies))
        setTotalPages(Math.ceil(allPuppies.length / 35))

      }else{
        setPuppySinglePageArr(getItemsByPage(page, filterArray))
        setTotalPages(Math.ceil(filterArray.length / 35))
      }
      

    }, [filterArray, page])

    useEffect(() => {
      const filterPuppies = () => {
        let filtered = allPuppies;
    
        // Gender filter
        if (genderFilter !== 'all') {
          filtered = filtered.filter(
            (puppy) => puppy.sex?.toLowerCase() === genderFilter.toLowerCase()
          );
        }
    
        // Breed filter
        if (selectedBreedCheck.length > 0) {
          const breedSlugs = selectedBreedCheck.map((breed) => breed.slug.toLowerCase());
          filtered = filtered.filter((puppy) =>
            breedSlugs.some((slug) => puppy.slug?.toLowerCase().includes(slug))
          );
        }
    
        // Characteristics filter (based on characterID)
        if (selectedCharacteristicsFilter.length > 0) {
          const selectedIDs = selectedCharacteristicsFilter.map((id) => parseInt(id)); // Convert to numbers
          filtered = filtered.filter((puppy) =>
            selectedIDs.includes(puppy.characterID)
          );
        }
    
        // Variety filter
        if (selectedVarietyFilter.length > 0) {
          // Map selected values to labels
          const varietyLabels = selectedVarietyFilter
            .map((varietyValue) => 
              varieties.find((variety) => variety.value === varietyValue)?.label.toLowerCase()
            )
            .filter((label): label is string => label !== undefined); // Ensure no undefined values
          
          // Filter puppies based on matching Variety labels
          filtered = filtered.filter((puppy) =>
            varietyLabels.some((label) => 
              puppy.puppy_info_details?.Variety?.toLowerCase() === label
            )
          );
        }
    
        // Size filter
        if (selectedSizeFilter.length > 0) {
          // Filter puppies based on the selected size values
          filtered = filtered.filter((puppy: any) =>
            selectedSizeFilter.includes(String(puppy.size)) // Convert size to string for comparison
          );
        }


        // Age filter
        if (ageFilter !== "all-age") {
          const ageLimit = parseInt(ageFilter, 10);

          filtered = filtered.filter((puppy: any) => {
            const puppyAge = parseInt(puppy.age, 10);

            if (ageFilter === "17") {
              // Age 17: Return puppies aged above 16
              return puppyAge > 16;
            } else {
              // Other ages: Return puppies aged <= ageLimit
              return puppyAge <= ageLimit;
            }
          });
        }
    
        // Color filter
        if (selectedColorFilter.length > 0) {
          // Map selected values to their corresponding color labels
          const colorLabels = selectedColorFilter
            .map((colorValue) => 
              colors.find((color) => color.value === colorValue)?.label.toLowerCase()
            )
            .filter((label): label is string => label !== undefined); // Ensure no undefined values
          
          // Filter puppies based on matching Color labels
          filtered = filtered.filter((puppy) =>
            colorLabels.some((label) => 
              puppy.puppy_info_details?.Color.toLowerCase().includes(label)
            )
          );
        }

            
        // Travel filter (ALL PUPPIES ARE AVALABLE FOR TRAVLE)
        // if (travleFilter !== 'all-pupies') {
        //   filtered = filtered.filter((puppy: any) =>
        //     puppy['travel_info']
        //       ? travleFilter.toLowerCase() === puppy['travel_info'].toLowerCase()
        //       : false
        //   );
        // }
    
        // Update the filtered array state
        setFilterArray(filtered);
      };
    
      filterPuppies();
    }, [
      genderFilter,
      selectedBreedCheck,
      selectedCharacteristicsFilter,
      selectedVarietyFilter,
      selectedSizeFilter,
      ageFilter,
      selectedColorFilter,
      travleFilter,
      allPuppies,
    ]);


    useEffect(() => {
      let sortedPuppies = [...allPuppies]; // Copy the array to avoid mutating the state

      switch (sortOption) {
          case "Featured":
              sortedPuppies = AllPuppies; // Assume default order is "Featured"
              break;

          case "Name":
              sortedPuppies.sort((a, b) => a.name.localeCompare(b.name));
              break;

          case "Color":
              sortedPuppies.sort((a, b) => {
                  // Add safety checks to ensure puppy_info_details is not undefined
                  const colorA = a.puppy_info_details?.Color || "";
                  const colorB = b.puppy_info_details?.Color || "";
                  return colorA.localeCompare(colorB);
              });
              break;

          case "Age: Young to Old":
              sortedPuppies.sort((a, b) => {
                  const ageA = Number(a.age);
                  const ageB = Number(b.age);
                  return ageA - ageB;
              });
              break;

          case "Age: Old to Young":
              sortedPuppies.sort((a, b) => {
                  const ageA = Number(a.age);
                  const ageB = Number(b.age);
                  return ageB - ageA;
              });
              break;

          case "Price: Low to High":
              sortedPuppies.sort((a, b) => {
                  const priceA = a.price ? parseFloat(a.price.replace(/[^0-9.-]+/g, "")) : Infinity;
                  const priceB = b.price ? parseFloat(b.price.replace(/[^0-9.-]+/g, "")) : Infinity;
                  return priceA - priceB; // Ascending order
              });
              break;
    
          case "Price: High to Low":
              sortedPuppies.sort((a, b) => {
                  const priceA = a.price ? parseFloat(a.price.replace(/[^0-9.-]+/g, "")) : -Infinity;
                  const priceB = b.price ? parseFloat(b.price.replace(/[^0-9.-]+/g, "")) : -Infinity;
                  return priceB - priceA; // Descending order
              });
              break;

          default:
              break;
      }

      setAllPuppies(sortedPuppies); // Update the sorted state
  }, [sortOption, AllPuppies]);


    const clearUrlParams = () => {
      const urlWithoutParams = window.location.origin + window.location.pathname;
      window.location.replace(urlWithoutParams);
    };
    const resetFilters = () => {

      setBreedsArr((prev) => prev.map((breed) => ({ ...breed, isSelected: false })));

     setGenderFilter('all')
      setSelectedBreedCheck([]);
      setSelectedCharacteristicsFilter([])
      setSelectedVarietyFilter([])
      setSelectedSizeFilter([])
      setAgeFilter('all-age')
      setSelectedColorFilter([])
      setTravleFilter('all-pupies')

      clearUrlParams()

    };
    
    
  return (
    <div>
      <AuthenticationPopup />
      <PuppiesForSellContainer 
        breedQuery={query} 
        genderQuery={gender} 
        paginationPage={page} 
        puppySinglePageArr={puppySinglePageArr} 
        totalPages={totalPages}
        breedsArr={breedsArr}
        setBreedsArr={setBreedsArr}

        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        selectedBreedCheck={selectedBreedCheck} 
        setSelectedBreedCheck={setSelectedBreedCheck}
        selectedCharacteristicsFilter={selectedCharacteristicsFilter}
        setSelectedCharacteristicsFilter={setSelectedCharacteristicsFilter}
        selectedVarietyFilter={selectedVarietyFilter}
        setSelectedVarietyFilter={setSelectedVarietyFilter}
        selectedSizeFilter={selectedSizeFilter}
        setSelectedSizeFilter={setSelectedSizeFilter}
        ageFilter={ageFilter}
        setAgeFilter={setAgeFilter}
        selectedColorFilter={selectedColorFilter}
        setSelectedColorFilter={setSelectedColorFilter}
        travleFilter={travleFilter}
        setTravleFilter={setTravleFilter}

        resetFilters={resetFilters}
        colors={colors}
        varieties={varieties}
        characters={characters}
        filterArray={filterArray}
        sortOption={sortOption} 
        setSortOption={setSortOption}
      />
      <Footer />
    </div>
  );
}

export default PuppiesForSell;
