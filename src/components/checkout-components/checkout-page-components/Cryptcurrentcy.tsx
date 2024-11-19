import React, { useContext, useRef, useState } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useStyles from '../../../styles/checkout';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { FirebaseContext } from '../../../context/firebase';
import FullScreenLoader from '../../loader/FullScreenLoader';


interface Props{
    paymentInfo: any;
    subTotal: string;
    puppyId: string | undefined;
    paymentID: string | undefined;
    subTotalInNumber: number;
}
    function startTimer(stateFunction: React.Dispatch<React.SetStateAction<boolean>>) {
        setTimeout(() => {
        stateFunction(false)
        }, 1500);
    }
  function convertPrice(price: number, rate: number) {
    const convertedPrice = price * rate;
  
    // Return the converted price
    return convertedPrice.toFixed(8);
  }
const CryptoCurrency: React.FC<Props> = ({paymentInfo, subTotal, puppyId, paymentID, subTotalInNumber}) => {
    const classes = useStyles()
    const { firebase } = useContext(FirebaseContext)
    const bitcoinAddress = process.env.REACT_APP_BITCOIN_ADDRESS

    const [blockChain, setBlockChain] = useState('')
    const [stateEmpty, setStateEmpty] = useState(false)
    const bitcoinAddRef = useRef<HTMLHeadingElement>(null)
    const bitcoinPriceRef = useRef<HTMLHeadingElement>(null)
    const [cpActive4, setcpActie4] = useState(false)
    const [cpActive5, setcpActie5] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [Failure, setFailure] = useState(false)
    const defaultBlob = new Blob(["default content"], { type: 'text/plain' });
    const [loading, setloading] = useState(false)
    const [cryptoPrice, setCryptoPrice] = useState('')

    const copyToClipboard4 = () => {
        const textToCopy = bitcoinAddRef.current?.innerText
        if(textToCopy){
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            setcpActie4(true)
            startTimer(setcpActie4)
        })
        .catch((err) => {
            alert("Failed to copy text:");
        });
        }
    };  
    const copyToClipboard5 = () => {
        const textToCopy = bitcoinPriceRef.current?.innerText
        if(textToCopy){
          navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setcpActie5(true)
            startTimer(setcpActie5)
          })
          .catch((err) => {
            alert("Failed to copy text:");
          });
        }
    };


    const onCryptocurrencySubmit = ( e: any ) =>{
      e.preventDefault()
      
      setLoading(true)
      setFailure(false)

      const newFormData = new FormData
      newFormData.append('paymentID', paymentID || defaultBlob)
      newFormData.append('puppyID', puppyId || defaultBlob)
      newFormData.append('price', subTotal || defaultBlob)
      newFormData.append('payerEmail', paymentInfo.emailInput)
      newFormData.append('blockChain', blockChain)
      newFormData.append('cryptoPrice', cryptoPrice)
      newFormData.append('paymentMethod', 'crypto')

      const url = process.env.REACT_APP_CRYPTOCURRENCY || ''
      axios.post(url, newFormData, {
        onUploadProgress: (ProgressEvent)=>{  }
      })
      .then(response => {
        console.log(response)
        if(response.data.success == false){
            setLoading(false)
            setFailure(true)
        }else{
            setLoading(false)
            setFailure(false)

            // const newURL = "https://stargamingstore.shop/success-payment";
            // window.location.replace(newURL);
        }
      })
      .catch(error => {
          console.log(error)
          setLoading(false)
          setFailure(true)
      });
    }

    async function getDocumentById(collectionName: string, documentId: string) {
        if (!firebase) { return; }
        setloading(true)
        try {
            const documentRef = firebase.firestore().collection(collectionName).doc(documentId);
            const docSnapshot = await documentRef.get();
            setloading(false)
            if (docSnapshot.exists) {
                const data = docSnapshot.data();
                return data;
            } else {
                return null;
            }
        } catch (error) {
            setloading(false)
            return null;
        }
    }

    const handleSelectChain = async (selected: string) => {
       const rates = await getDocumentById('crypto-rates', 'P0rkUhkWrcAxPpxTfIf0')
       if(rates){
        selected === 'Bitcoin (BTC)' && setCryptoPrice(convertPrice(subTotalInNumber, rates.bitcoin))
        selected === 'USDT (Tron -TRX)' && setCryptoPrice(convertPrice(subTotalInNumber, rates.usdt))
       }else{
            const bitcoinRate = process.env.REACT_APP_BITCOIN_RATE || 0
            const usdtRate = process.env.REACT_APP_USDT_RATE || 0

            selected === 'Bitcoin (BTC)' && setCryptoPrice(convertPrice(subTotalInNumber, Number(bitcoinRate)))
            selected === 'USDT (Tron -TRX)' && setCryptoPrice(convertPrice(subTotalInNumber, Number(usdtRate)))
       }
       setBlockChain(selected)

    }

  return (

        <>
            <fieldset className="m_eda993d3 tw-px-6 sm:tw-px-0 tw-flex tw-flex-col tw-gap-5 m_e9408a47 mantine-Fieldset-root" data-variant="unstyled">
                <legend className="m_74ca27fe tw-font-nunito tw-text-lg tw-font-extrabold tw-text-gray-01 tw-mb-2 m_90794832 mantine-Fieldset-legend">Selects the crypto payment option</legend>
                    
                    <div className="tw-w-full">
                        <div></div>

                        <div>
                            <div style={{"--input-right-section-pointer-events": "none"} as React.CSSProperties } className="tw-top-0 m_6c018570 mantine-Input-wrapper mantine-Select-wrapper" data-variant="default" data-pointer="true" data-with-right-section="true">
                                <select 
                                    className={`select-field-special ${stateEmpty && 'select-field-special-red'}`}
                                    data-variant="default" 
                                    // placeholder="State*" 
                                    data-path="stateAbbr" 
                                    // readOnly 
                                    aria-haspopup="listbox" 
                                    autoComplete="no" 
                                    required aria-invalid="false" 
                                    id="mantine-1vq052fsz" 
                                    value={blockChain}
                                    onChange={(e)=> handleSelectChain(e.currentTarget.value)}
                                >
                                        <option value="" disabled selected>--Select Blockchain--</option>
                                        <option className="tw-font-inter tw-text-gray-03 !tw-text-sm tw-font-normal tw-p-3 data-[combobox-selected]:tw-bg-gray-06 hover:tw-bg-gray-06 m_92253aa5 mantine-Select-option m_390b5f4" data-combobox-option="true" data-value="bitcoin" aria-selected="false" id=":r68o:" role="option"><span>Bitcoin (BTC)</span></option>
                                        <option className="tw-font-inter tw-text-gray-03 !tw-text-sm tw-font-normal tw-p-3 data-[combobox-selected]:tw-bg-gray-06 hover:tw-bg-gray-06 m_92253aa5 mantine-Select-option m_390b5f4" data-combobox-option="true" data-value="usdt-1" aria-selected="false" id=":r68q:" role="option"><span>USDT (Tron -TRX)</span></option>
                                        <option className="tw-font-inter tw-text-gray-03 !tw-text-sm tw-font-normal tw-p-3 data-[combobox-selected]:tw-bg-gray-06 hover:tw-bg-gray-06 m_92253aa5 mantine-Select-option m_390b5f4" data-combobox-option="true" data-value="usdt-2" aria-selected="false" id=":r68q:" role="option"><span>USDT (Solana -SOL)</span></option>
                                </select>
                                
                                <div data-position="right" className="m_82577fc2 mantine-Input-section mantine-Select-section">
                                    <svg width="24" height="24" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.29167 4.125L5.50001 7.33334L8.70834 4.125" stroke="black" stroke-width="0.870833" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                            </div>
                            {
                                stateEmpty
                                &&
                                <p style={{"--input-error-size": "calc(var(--mantine-font-size-xs) - calc(0.125rem * var(--mantine-scale)))", "margin-bottom": '1rem'} as React.CSSProperties} className="-tw-ml-4 m_8f816625 mantine-InputWrapper-error" data-size="xs" id="mantine-62790zd5a-error"><span className="tw-flex tw-gap-1 tw-items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 8V12" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16H12.01" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span className="tw-font-inter tw-text-sm">Please select your state.</span></span></p>
                            }
                        </div><input type="hidden" value=""/>
                    </div>


                {
                    blockChain === 'Bitcoin (BTC)'
                    ?
                    <>
                        <div className={classes.cryptocurrencyaddressholder}>

                            <span className={classes.cryptocurrencyaddressholdertitle}>Bitcoin wallet address:</span>

                            <div style={{display: 'flex'}} onClick={copyToClipboard4}>
                                <div><h2 ref={bitcoinAddRef} className={classes.selectField2Text2}>{bitcoinAddress}</h2></div>

                                {
                                    cpActive4
                                    ?
                                    <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                    :
                                    <div style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                } 
                            </div>
                        </div>

                        <div className={classes.cryptocurrencyaddressholder}>
                            <span className={classes.cryptocurrencyaddressholdertitle}>Equivalent <span style={{fontWeight: 'bold'}}>Bitcoin</span> amount for wire transfer:</span>

                            <div style={{display: 'flex'}} onClick={copyToClipboard5}>
                                <div><h2 style={{color: "#333", marginRight: '0.3rem'}} ref={bitcoinPriceRef}>{cryptoPrice}</h2></div>
                                {
                                    cpActive5
                                    ?
                                    <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                    :
                                    <div style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                } 
                            </div>
                        </div>

                        <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
                        <div className="tw-px-6 sm:tw-px-0">
                            <button style={{"--button-color":"var(--mantine-color-white)"} as React.CSSProperties } className="mantine-focus-auto mantine-active 
                                    tw-px-6 tw-py-4 tw-h-[52px] tw-rounded-full tw-w-full tw-bg-blue-01
                                    hover:tw-bg-blue-02
                                    data-[disabled]:tw-bg-gray-05 disabled:tw-bg-gray-05
                                    lg:tw-max-w-[400px]
                                tw-mx-auto m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" 
                                type="button"
                                onClick={onCryptocurrencySubmit}
                            >
                                <span className="m_80f1301b mantine-Button-inner">
                                    <span className="tw-font-inter tw-font-bold tw-text-base tw-whitespace-normal tw-h-[52px] tw-overflow-visible tw-leading-normal m_811560b9 mantine-Button-label">
                                    Complete Payment
                                    {
                                        Loading
                                        ?
                                        <Oval
                                            visible={true}
                                            height="30"
                                            width="30"
                                            color="#ffffff"
                                            ariaLabel="oval-loading"
                                            wrapperStyle={{marginLeft: '0.3rem'}}
                                            wrapperClass=""
                                        />
                                        :
                                        null
                                    }
                                    </span>
                                </span>
                            </button>
                            {Failure ? <p style={{fontSize: '0.85rem', color: 'red'}}>Internal error. Please try again</p> : null}
                        </div>
                    </>
                    :
                    null
                }

            </fieldset>

            {loading ? <FullScreenLoader /> : null}
        </>
                 

  );
}

export default CryptoCurrency;

