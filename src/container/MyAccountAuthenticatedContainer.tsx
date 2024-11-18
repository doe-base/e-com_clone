import React, { useState, useContext } from "react";
import { FirebaseContext } from '../context/firebase';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { pages } from '../contants/routes';


interface Props {}
const MyAccountAuthenticatedContainer: React.FC<Props> = ({}) => {
    const { firebase } = useContext(FirebaseContext)
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [ nameEdit, setNameEdit ] = useState(false)
    const [ firstName, setFirstName ] = useState(user.first_name)
    const [lastName, setLastName ] = useState(user.last_name)

    const nameEditFunction =()=>{
        setNameEdit(user.first_name)
        setLastName(user.last_name)
        setNameEdit(!nameEdit)
    }
    const handleNamesUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        updateItem()
    }
    async function updateItem() {
        if (!firebase) return;
        setError('');
        setLoading(true);
      
        try {
          // Query the collection to find the document
          const querySnapshot = await firebase.firestore()
            .collection('customers')
            .where('id', '==', user.user)
            .get();
      
          if (querySnapshot.empty) {
            setLoading(false);
            setError('Document not found');
            return;
          }
      
          // Update each document that matches the query
          for (const doc of querySnapshot.docs) {
            await doc.ref.update({
                first_name : firstName,
                last_name : lastName,
            });
          }
      
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            storedUser.first_name = firstName;
            storedUser.last_name = lastName;
            localStorage.setItem('user', JSON.stringify(storedUser));

          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError('An unexpected error occurred');
          console.error('Error updating document:', error);
        }
    }

    const [loadingPhone, setLoadingPhone] = useState(false)
    const [errorPhone, setErrorPhone] = useState('')
    const [ phoneEdit, setPhoneEdit ] = useState(false)
    const [ phone, setPhone ] = useState(user.phone)
    const [shouldCall, setShouldCall] = useState('yes')

    const handleShouldCallChange = () =>{
        if(shouldCall === 'yes'){
            setShouldCall('no')
        }else{
            setShouldCall('yes')
        }
    }
    const phoneEditFunction =()=>{
        setPhone(user.phone)
        setPhoneEdit(!phoneEdit)
    }
    const handlePhoneUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        phoneUpdateItem()
    }
    async function phoneUpdateItem() {
        if (!firebase) return;
        setErrorPhone('');
        setLoadingPhone(true);
      
        try {
          // Query the collection to find the document
          const querySnapshot = await firebase.firestore()
            .collection('customers')
            .where('id', '==', user.user)
            .get();
      
          if (querySnapshot.empty) {
            setLoadingPhone(false);
            setErrorPhone('Document not found');
            return;
          }
      
          // Update each document that matches the query
          for (const doc of querySnapshot.docs) {
            await doc.ref.update({
                phone : phone,
                shouldCall: shouldCall,
            });
          }
      
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            storedUser.phone = phone;
            localStorage.setItem('user', JSON.stringify(storedUser));

            setLoadingPhone(false);
        } catch (error) {
          setLoadingPhone(false);
          setErrorPhone('An unexpected error occurred');
          console.error('Error updating document:', error);
        }
    }


    const [loadingPassword, setLoadingPassword] = useState(false)
    const [errorPassword, setErrorPassword] = useState('')
    const [ passwordEdit, setPasswordEdit ] = useState(false)
    const [ password, setPassword ] = useState(user.code)
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordAgain, setNewPasswordAgain] = useState('')
    const [oldPw, setOldPw] = useState(false)
    const [pw, setPw] = useState(false)
    const [pwAgain, setPwAgain] = useState(false)

    const passwordEditFunction =()=>{
        setPassword(user.phone)
        setPasswordEdit(!passwordEdit)
    }
    const handlePasswordUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(newPassword !== newPasswordAgain){return}
        handlePasswordChange();
    }

    const Logout = () =>{
        if(!firebase){return}

        firebase
        .auth()
        .signOut()
        .then(() => {
            window.location.replace(pages.LOGIN);
        })
        .catch((error) => {
            console.error("Error signing out:", error);
        });
    }

    const handlePasswordChange = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        setErrorPassword('')
        setLoadingPassword(true)

        if (!user) {
            setError('User not authenticated');
            return;
        }

        try {
            // Reauthenticate the user with the current password
            await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email || '', password));

            // Update the password
            await updatePassword(user, newPassword);

            console.log('Password updated successfully');
            Logout()
            setLoadingPassword(false)
       
        } catch (error) {
            setErrorPassword('Failed to update password. Please try again');
            setLoadingPassword(false)
        }
    };


    const [loadingAddress, setLoadingAddress] = useState(false)
    const [errorAddress, setErrorAddress] = useState('')
    const [ addressEdit, setAddressEdit ] = useState(false)
    const [ address1, setAddress1 ] = useState(user.address1)
    const [ address2, setAddress2 ] = useState(user.address2)
    const [city, setCity] = useState(user.city)
    const [state, setState] = useState(user.state)
    const [zip, setZip] = useState(user.zip)
    const [country, setCountry] = useState('United-States')

    const addressEditFunction =()=>{
        setAddress1(user.address1)
        setAddress2(user.address2)
        setCity(user.city)
        setState(user.state)
        setZip(user.zip)
        setCountry('United-States')

        setAddressEdit(!addressEdit)
    }
    const handleAddressUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        updateAddress()
    }
    async function updateAddress() {
        if (!firebase) return;
        setErrorAddress('');
        setLoadingAddress(true);
      
        try {
          // Query the collection to find the document
          const querySnapshot = await firebase.firestore()
            .collection('customers')
            .where('id', '==', user.user)
            .get();
      
          if (querySnapshot.empty) {
            setLoadingAddress(false);
            setErrorAddress('Document not found');
            return;
          }
          console.log(address1, address2, city, state, zip, country)
          // Update each document that matches the query
          for (const doc of querySnapshot.docs) {
            await doc.ref.update({
                address1 : address1,
                address2 : address2,
                city : city,
                state : state,
                zip : zip,
                country : country
            });
          }
      
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            storedUser.address1 = address1
            storedUser.address2 = address2
            storedUser.city = city
            storedUser.state = state
            storedUser.zip = zip
            storedUser.country = country
            localStorage.setItem('user', JSON.stringify(storedUser));

          setLoadingAddress(false);
        } catch (error) {
          setLoadingAddress(false);
          setErrorAddress('An unexpected error occurred');
          console.error('Error updating document:', error);
        }
    }



  return (
    <main className="account">
        <aside className="account-navigation">
            <div className="account-navigation__dropdown">
                <div className="collapsible-panel__container js-collapsible-panel-container">
                        <h3 className="js-collapsible-panel-handle collapsible-panel__handle  ">
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" fill="currentColor"></path>
        </svg>
                            My Account</span>
                        </h3>
                <div className="js-collapsible-panel hidden">
                <div className="collapsible-panel__content">
                    <ul>
                                                <li className="account-navigation__nav-link account-navigation__nav-link--active">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" fill="currentColor"></path>
        </svg>
                                <a href="https://www.puppyspot.com/my-account">My Account</a>
                            </li>
                                                <li className="account-navigation__nav-link ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5645 7.27888C20.2852 6.63724 19.8825 6.0558 19.379 5.56709C18.875 5.07693 18.2808 4.6874 17.6288 4.41969C16.9526 4.141 16.2274 3.99834 15.4952 4.00001C14.468 4.00001 13.4658 4.27911 12.5948 4.80629C12.3865 4.9324 12.1886 5.07092 12.001 5.22184C11.8135 5.07092 11.6156 4.9324 11.4072 4.80629C10.5363 4.27911 9.53408 4.00001 8.50688 4.00001C7.76721 4.00001 7.05046 4.1406 6.3733 4.41969C5.71906 4.68845 5.12941 5.07505 4.6231 5.56709C4.11887 6.05524 3.71608 6.63683 3.43755 7.27888C3.14793 7.94665 3 8.65576 3 9.38554C3 10.074 3.14168 10.7914 3.42297 11.5211C3.65841 12.131 3.99595 12.7636 4.42725 13.4025C5.11066 14.4134 6.05035 15.4678 7.21715 16.5366C9.1507 18.3084 11.0655 19.5323 11.1468 19.5819L11.6406 19.8961C11.8593 20.0346 12.1406 20.0346 12.3594 19.8961L12.8532 19.5819C12.9345 19.5302 14.8472 18.3084 16.7828 16.5366C17.9496 15.4678 18.8893 14.4134 19.5727 13.4025C20.004 12.7636 20.3437 12.131 20.577 11.5211C20.8583 10.7914 21 10.074 21 9.38554C21.0021 8.65576 20.8541 7.94665 20.5645 7.27888ZM12.001 18.2608C12.001 18.2608 4.58351 13.5451 4.58351 9.38554C4.58351 7.27888 6.33997 5.57122 8.50688 5.57122C10.03 5.57122 11.351 6.41472 12.001 7.64688C12.6511 6.41472 13.9721 5.57122 15.4952 5.57122C17.6621 5.57122 19.4185 7.27888 19.4185 9.38554C19.4185 13.5451 12.001 18.2608 12.001 18.2608Z" fill="currentColor"></path>
        </svg>
                                <a href="https://www.puppyspot.com/my-account/favorite-puppies">Favorites</a>
                            </li>
                            <li className="account-navigation__nav-link ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4 17.4C17.8774 17.4 18.3352 17.5896 18.6728 17.9272C19.0104 18.2648 19.2 18.7226 19.2 19.2C19.2 19.6774 19.0104 20.1352 18.6728 20.4728C18.3352 20.8104 17.8774 21 17.4 21C16.9226 21 16.4648 20.8104 16.1272 20.4728C15.7896 20.1352 15.6 19.6774 15.6 19.2C15.6 18.201 16.401 17.4 17.4 17.4ZM3 3H5.943L6.789 4.8H20.1C20.3387 4.8 20.5676 4.89482 20.7364 5.0636C20.9052 5.23239 21 5.46131 21 5.7C21 5.853 20.955 6.006 20.892 6.15L17.67 11.973C17.364 12.522 16.77 12.9 16.095 12.9H9.39L8.58 14.367L8.553 14.475C8.553 14.5347 8.5767 14.5919 8.6189 14.6341C8.6611 14.6763 8.71833 14.7 8.778 14.7H19.2V16.5H8.4C7.92261 16.5 7.46477 16.3104 7.12721 15.9728C6.78964 15.6352 6.6 15.1774 6.6 14.7C6.6 14.385 6.681 14.088 6.816 13.836L8.04 11.631L4.8 4.8H3V3ZM8.4 17.4C8.87739 17.4 9.33523 17.5896 9.67279 17.9272C10.0104 18.2648 10.2 18.7226 10.2 19.2C10.2 19.6774 10.0104 20.1352 9.67279 20.4728C9.33523 20.8104 8.87739 21 8.4 21C7.92261 21 7.46477 20.8104 7.12721 20.4728C6.78964 20.1352 6.6 19.6774 6.6 19.2C6.6 18.201 7.401 17.4 8.4 17.4ZM16.5 11.1L19.002 6.6H7.626L9.75 11.1H16.5Z" fill="currentColor"></path>
        </svg>
                                <a href="https://www.puppyspot.com/my-account/order-history">Order History</a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
            </div>
            <div className="account-navigation__content">
                            <h2>My Account</h2>
                
                <nav className="account-navigation__nav">
                    <ul>
                                        <li className="account-navigation__nav-link account-navigation__nav-link--active">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" fill="currentColor"></path>
        </svg>
                            <a href="https://www.puppyspot.com/my-account">My Account</a>
                        </li>
                                        <li className="account-navigation__nav-link ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5645 7.27888C20.2852 6.63724 19.8825 6.0558 19.379 5.56709C18.875 5.07693 18.2808 4.6874 17.6288 4.41969C16.9526 4.141 16.2274 3.99834 15.4952 4.00001C14.468 4.00001 13.4658 4.27911 12.5948 4.80629C12.3865 4.9324 12.1886 5.07092 12.001 5.22184C11.8135 5.07092 11.6156 4.9324 11.4072 4.80629C10.5363 4.27911 9.53408 4.00001 8.50688 4.00001C7.76721 4.00001 7.05046 4.1406 6.3733 4.41969C5.71906 4.68845 5.12941 5.07505 4.6231 5.56709C4.11887 6.05524 3.71608 6.63683 3.43755 7.27888C3.14793 7.94665 3 8.65576 3 9.38554C3 10.074 3.14168 10.7914 3.42297 11.5211C3.65841 12.131 3.99595 12.7636 4.42725 13.4025C5.11066 14.4134 6.05035 15.4678 7.21715 16.5366C9.1507 18.3084 11.0655 19.5323 11.1468 19.5819L11.6406 19.8961C11.8593 20.0346 12.1406 20.0346 12.3594 19.8961L12.8532 19.5819C12.9345 19.5302 14.8472 18.3084 16.7828 16.5366C17.9496 15.4678 18.8893 14.4134 19.5727 13.4025C20.004 12.7636 20.3437 12.131 20.577 11.5211C20.8583 10.7914 21 10.074 21 9.38554C21.0021 8.65576 20.8541 7.94665 20.5645 7.27888ZM12.001 18.2608C12.001 18.2608 4.58351 13.5451 4.58351 9.38554C4.58351 7.27888 6.33997 5.57122 8.50688 5.57122C10.03 5.57122 11.351 6.41472 12.001 7.64688C12.6511 6.41472 13.9721 5.57122 15.4952 5.57122C17.6621 5.57122 19.4185 7.27888 19.4185 9.38554C19.4185 13.5451 12.001 18.2608 12.001 18.2608Z" fill="currentColor"></path>
        </svg>
                            <a href="https://www.puppyspot.com/my-account/favorite-puppies">Favorites</a>
                        </li>
                        <li className="account-navigation__nav-link ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4 17.4C17.8774 17.4 18.3352 17.5896 18.6728 17.9272C19.0104 18.2648 19.2 18.7226 19.2 19.2C19.2 19.6774 19.0104 20.1352 18.6728 20.4728C18.3352 20.8104 17.8774 21 17.4 21C16.9226 21 16.4648 20.8104 16.1272 20.4728C15.7896 20.1352 15.6 19.6774 15.6 19.2C15.6 18.201 16.401 17.4 17.4 17.4ZM3 3H5.943L6.789 4.8H20.1C20.3387 4.8 20.5676 4.89482 20.7364 5.0636C20.9052 5.23239 21 5.46131 21 5.7C21 5.853 20.955 6.006 20.892 6.15L17.67 11.973C17.364 12.522 16.77 12.9 16.095 12.9H9.39L8.58 14.367L8.553 14.475C8.553 14.5347 8.5767 14.5919 8.6189 14.6341C8.6611 14.6763 8.71833 14.7 8.778 14.7H19.2V16.5H8.4C7.92261 16.5 7.46477 16.3104 7.12721 15.9728C6.78964 15.6352 6.6 15.1774 6.6 14.7C6.6 14.385 6.681 14.088 6.816 13.836L8.04 11.631L4.8 4.8H3V3ZM8.4 17.4C8.87739 17.4 9.33523 17.5896 9.67279 17.9272C10.0104 18.2648 10.2 18.7226 10.2 19.2C10.2 19.6774 10.0104 20.1352 9.67279 20.4728C9.33523 20.8104 8.87739 21 8.4 21C7.92261 21 7.46477 20.8104 7.12721 20.4728C6.78964 20.1352 6.6 19.6774 6.6 19.2C6.6 18.201 7.401 17.4 8.4 17.4ZM16.5 11.1L19.002 6.6H7.626L9.75 11.1H16.5Z" fill="currentColor"></path>
        </svg>
                            <a href="https://www.puppyspot.com/my-account/order-history">Order History</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>


        <div className="account__wrapper">
            <section className="account__content my-profile">
                <article className="info-group">
                    <section className="info-group__content">
                        <div className="editable-field js-editable-field">
                            <span className="editable-field__label">Name</span>
                            <div className="error-container js-editable-field__error hidden">
                                <span></span>
                            </div>
                            <div className={`editable-field__display js-editable-field__display ${nameEdit && 'hidden'}`}>
                                <div className="editable-field__wrapper ">
                                    <span>{user.first_name} {user.last_name}</span>
                                    <a href="javascript:void(0)" onClick={nameEditFunction} className={`editable-field__action js-editable-field__action`} data-action="updateName" data-value="">
                                        Edit
                                    </a>
                                    <div className="loading cta invisible">
                                        <picture className="">
                                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={(e)=>handleNamesUpdate(e)} noValidate className={`editable-field__form ${nameEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updateName">
                                <div className="editable-field__form-fields editable-field__form-fields--auto">
                                    <div className="input-wrapper">
                                            <label htmlFor="firstName">First name</label>
                                            <input 
                                                id="firstName" 
                                                type="text" 
                                                name="firstName" 
                                                className="js-account-firstName" 
                                                value={firstName}
                                                onChange={(e)=> setFirstName(e.currentTarget.value)}
                                                required
                                            />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="lastName">Last name</label>
                                            <input 
                                                id="lastName" 
                                                type="text" 
                                                name="lastName" 
                                                className="js-account-lastName" 
                                                value={lastName}
                                                onChange={(e)=> setLastName(e.currentTarget.value)}
                                                required
                                            />
                                        </div>
                                </div>
                                <div className="editable-field__form-actions">
                                    <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                    <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={nameEditFunction}>
                                        Cancel
                                    </button>
                                    <div className={`loading cta ${loading || 'invisible'}`}>
                                        <picture className="">
                                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                        </picture>

                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="editable-field js-editable-field">
                            <span className="editable-field__label">Email</span>
                            <div className="error-container js-editable-field__error hidden">
                                <span></span>
                            </div>
                            <div className="editable-field__display js-editable-field__display">
                                <div className="editable-field__wrapper ">
                                    <span>stargamingstoree@gmail.com</span>
                                </div>
                            </div>
                            <form noValidate className="editable-field__form hidden js-form-validate js-editable-field__form" data-action="">
                                <div className="editable-field__form-fields editable-field__form-fields--auto">
                                    <div className="input-wrapper">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="text" value="stargamingstoree@gmail.com" data-validate="required,email"/>
                                    </div>
                                </div>
                                <div className="editable-field__form-actions">
                                    <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                    <button type="button" className="button ghost js-cancel" tabIndex={11}>
                                        Cancel
                                    </button>
                                    <div className="loading cta invisible">
                                        <picture className="">
                                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                        </picture>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="editable-field js-editable-field">
                            <span className="editable-field__label">Phone</span>
                            <div className="error-container js-editable-field__error hidden">
                                <span></span>
                            </div>
                            <div className={`editable-field__display js-editable-field__display ${phoneEdit && 'hidden'}`}>
                                <div className="editable-field__wrapper ">
                                    <span>{phone ? phone : 'Please add your phone number'}</span>
                                        <a href="javascript:void(0)" onClick={phoneEditFunction} className="editable-field__action js-editable-field__action" data-action="updatePhone" data-value="">
                                            Edit
                                        </a>
                                        <div className="loading cta invisible">
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                            </picture>
                                        </div>
                                </div>
                            </div>
                            <form onSubmit={(e)=>handlePhoneUpdate(e)} noValidate className={`editable-field__form ${phoneEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updatePhone">
                                <div className="editable-field__form-fields editable-field__form-fields--column">
                                    <div className="input-wrapper">
                                        <label htmlFor="phone">Phone</label>
                                        <input 
                                            id="phone" 
                                            type="text" 
                                            name="phoneNumber" 
                                            className="js-account-phoneNumber" 
                                            value={phone}
                                            onChange={(e)=>setPhone(e.currentTarget.value)} 
                                            required
                                        />
                                    </div>
                                    <div className="input-wrapper sms-okay">
                                        <input type="hidden" name="canReceiveSms" value="no" />
                                        <input id="canReceiveSms" type="checkbox" name="canReceiveSms" className="js-account-canReceiveSms" value={shouldCall} onChange={handleShouldCallChange} />
                                        <label htmlFor="canReceiveSms" className="sms-okay">
                                            <span className="sms-okay__text">It is OK to text me</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="editable-field__form-actions">
                                    <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                    <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={phoneEditFunction}>
                                        Cancel
                                    </button>
                                    <div className={`loading cta ${loadingPhone || 'invisible'}`}>
                                        <picture className="">
                                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                        </picture>

                                    </div>
                                </div>
                            </form>
                        </div>
                                        
                        <div className="editable-field js-editable-field">
                            <span className="editable-field__label">Password</span>
                            <div className="error-container js-editable-field__error hidden">
                                <span></span>
                            </div>
                            <div className={`editable-field__display js-editable-field__display ${passwordEdit && 'hidden'}`}>
                                <div className="editable-field__wrapper ">
                                    <span>••••••••</span>
                                        <a href="javascript:void(0)" onClick={passwordEditFunction} className="editable-field__action js-editable-field__action" data-action="updatePassword" data-value="">
                                            Update
                                        </a>
                                        <div className="loading cta invisible">
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                            </picture>
                                        </div>
                                </div>
                            </div>


                            <form onSubmit={handlePasswordUpdate} noValidate className={`editable-field__form ${passwordEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updatePassword">
                                <div className="editable-field__form-fields editable-field__form-fields--auto">
                                    <div className="input-wrapper password" style={{position: 'relative'}}>
                                        <label htmlFor="currentPassword">Current Password</label>
                                        <input 
                                            autoComplete="off" 
                                            id="currentPassword" 
                                            type={oldPw ? "password" : 'text'}
                                            name="current_password" 
                                            value={password}
                                            onChange={(e)=> setPassword(e.currentTarget.value)}
                                            required
                                        />
                                        <span onClick={()=>setOldPw(!oldPw)} className={`password-visibility js-show-password ${oldPw && 'visible'}`}></span>
                                    </div>
                                    <div className="input-wrapper password" style={{position: 'relative'}}>
                                        <label htmlFor="password">New Password</label>
                                        <input 
                                            autoComplete="off" 
                                            id="password" 
                                            type={pw ? "password" : 'text'}
                                            name="password_uni"
                                            value={newPassword}
                                            onChange={(e)=> setNewPassword(e.currentTarget.value)}
                                            required
                                        />
                                        <span onClick={()=>setPw(!pw)} className={`password-visibility js-show-password ${pw && 'visible'}`}></span>
                                    </div>
                                    <div className="input-wrapper password" style={{position: 'relative'}}>
                                        <label htmlFor="passwordConfirmation">Password Confirmation</label>
                                        <input 
                                            autoComplete="off" 
                                            id="passwordConfirmation" 
                                            type={pwAgain ? "password" : 'text'}
                                            name="password_confirmation" 
                                            data-match="password_uni" 
                                            value={newPasswordAgain}
                                            onChange={(e)=> setNewPasswordAgain(e.target.value)}
                                            required
                                        />
                                        <span onClick={()=>setPwAgain(!pwAgain)} className={`password-visibility js-show-password ${pwAgain && 'visible'}`}></span>
                                    </div>
                                </div>

                                <div className="editable-field__form-actions">
                                    <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                    <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={passwordEditFunction}>
                                        Cancel
                                    </button>
                                    <div className={`loading cta ${loadingPassword || 'invisible'}`}>
                                        <picture className="">
                                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                        </picture>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className="editable-field js-editable-field">
                            <span className="editable-field__label">Address</span>
                            <div className="error-container js-editable-field__error">
                                <span></span>
                            </div>
                            <div className={`editable-field__display js-editable-field__display  ${addressEdit && 'hidden'}`}>
                                <div className="editable-field__wrapper ">
                                    <span>{address1 ? address1 : 'Please add your address'}</span>
                                    <a href="javascript:void(0)" onClick={addressEditFunction} className="editable-field__action js-editable-field__action" data-action="updateAddress" data-value="">
                                        Edit
                                    </a>
                                    <div className="loading cta invisible">
                                        <picture className="">
                                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleAddressUpdate} noValidate className={`editable-field__form ${addressEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updateAddress">
                                <div className="editable-field__form-fields editable-field__form-fields--column">
                                    <div className="input-wrapper">
                                            <label htmlFor="address">Address</label>
                                            <input 
                                                id="address" 
                                                type="text" 
                                                name="address" 
                                                value={address1}
                                                onChange={(e)=> setAddress1(e.currentTarget.value)} 
                                                required
                                            />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="address2">Address 2</label>
                                            <input 
                                                id="address2" 
                                                type="text" 
                                                name="address2" 
                                                value={address2}
                                                onChange={(e)=> setAddress2(e.currentTarget.value)} 
                                            />
                                        </div>
                                        <div className="input-wrapper country">
                                            <label htmlFor="countryId" className="required">Country</label>
                                            <div className="chevron-wrapper">
                                                <span className="chevron"></span>
                                                <select 
                                                    className="js-country-selector" 
                                                    name="countryId" 
                                                    id="country" 
                                                    data-prefill-field="countryId" 
                                                    data-state-dropdown-id="state" 
                                                    onChange={(e)=> setCountry(e.currentTarget.value)}
                                                >
                                                    <option value="United-States">United States</option>
                                                    <option value="Canada">Canada</option>
                                                                
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input-wrapper state">
                                            <label htmlFor="state" className="required">State/Province</label>
                                            <div className="chevron-wrapper">
                                                <span className="chevron"></span>
                                                {
                                                    country == 'Canada'
                                                    ?
                                                    <select className="js-state-selector state" id="state" name="stateId" data-prefill-field="stateId" data-filter="state" onChange={(e)=> setState(e.currentTarget.value)}>
                                                        <option value=""></option><option value="1">Alberta</option><option value="6">British Columbia</option><option value="23">Manitoba</option><option value="31">New Brunswick</option><option value="37">Newfoundland and Labrador</option><option value="40">Northwest Territories</option><option value="39">Nova Scotia</option><option value="41">Nunavut</option><option value="46">Ontario</option><option value="49">Prince Edward Island</option><option value="51">Quebec</option><option value="55">Saskatchewan</option><option value="65">Yukon</option>
                                                    </select>
                                                    :
                                                    <select className="js-state-selector state" id="state" name="stateId" data-prefill-field="stateId" data-filter="state" onChange={(e)=> setState(e.currentTarget.value)}>
                                                        <option value=""></option><option value="3">Alabama</option><option value="2">Alaska</option><option value="5">Arizona</option><option value="4">Arkansas</option><option value="7">California</option><option value="8">Colorado</option><option value="9">Connecticut</option><option value="11">Delaware</option><option value="10">District of Columbia</option><option value="12">Florida</option><option value="13">Georgia</option><option value="14">Hawaii</option><option value="16">Idaho</option><option value="17">Illinois</option><option value="18">Indiana</option><option value="15">Iowa</option><option value="19">Kansas</option><option value="20">Kentucky</option><option value="21">Louisiana</option><option value="25">Maine</option><option value="24">Maryland</option><option value="22">Massachusetts</option><option value="26">Michigan</option><option value="27">Minnesota</option><option value="29">Mississippi</option><option value="28">Missouri</option><option value="30">Montana</option><option value="34">Nebraska</option><option value="42">Nevada</option><option value="35">New Hampshire</option><option value="36">New Jersey</option><option value="38">New Mexico</option><option value="43">New York</option><option value="32">North Carolina</option><option value="33">North Dakota</option><option value="44">Ohio</option><option value="45">Oklahoma</option><option value="47">Oregon</option><option value="48">Pennsylvania</option><option value="50">Puerto Rico</option><option value="52">Rhode Island</option><option value="53">South Carolina</option><option value="54">South Dakota</option><option value="56">Tennessee</option><option value="57">Texas</option><option value="58">Utah</option><option value="60">Vermont</option><option value="59">Virginia</option><option value="61">Washington</option><option value="63">West Virginia</option><option value="62">Wisconsin</option><option value="64">Wyoming</option>
                                                    </select>
                                                }
                                            </div>
                                        </div>

                                        <div className="input-wrapper">
                                            <label htmlFor="city">City</label>
                                            <input 
                                                id="city" 
                                                type="text" 
                                                name="city" 
                                                value={city}
                                                onChange={(e)=> setCity(e.currentTarget.value)} 
                                                required
                                            />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="postalCode">Postal Code</label>
                                            <input 
                                                id="postalCode" 
                                                type="text" 
                                                name="postalCode" 
                                                value={zip}
                                                onChange={(e)=> setZip(e.currentTarget.value)} 
                                                required
                                            />
                                        </div>
                                </div>

                                <div className="editable-field__form-actions">
                                    <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                    <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={addressEditFunction}>
                                        Cancel
                                    </button>
                                    <div className={`loading cta ${loadingAddress || 'invisible'}`}>
                                        <picture className="">
                                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                                        </picture>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </section>
                </article>
            </section>
        </div>


        <div className="white-modal js-white-modal white-modal--confirm hidden modal-checkout">
            <div className="white-modal__wrapper">
                <div className="white-modal__close">
                                    <a className="js-close-modal">
                            <picture className="">
                                    <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/puppy-listings/menu-close.svg" />
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


        <div className="white-modal js-white-modal white-modal--confirm hidden modal-favorite">
            <div className="white-modal__wrapper">
                <div className="white-modal__close">
                    <a className="js-close-modal">
                        <picture className="">
                            <img loading="lazy" alt="" id="" className="" src="https://www.puppyspot.com/assets/img/puppy-listings/menu-close.svg" />
                        </picture>
                    </a>
                </div>
                <div className="white-modal__content">
                    <section>
                        <h3>Remove <span className="js-puppy-name"></span> from favorites?</h3>
                        <p>Are you sure you want to <span className="hyperlink">remove</span> this puppy from your list of favorites?</p>
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
    </main>
  );
};

export default MyAccountAuthenticatedContainer;
