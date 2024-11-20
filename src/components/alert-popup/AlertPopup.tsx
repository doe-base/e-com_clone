import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Theme } from '@mui/material';
import { ClassNames } from '@emotion/react';
import "./index.css"

// APP POPUPS ARE POSITIONED IN Account-settings PAGE
const useStyles = makeStyles((theme: Theme)=>{
    return {
        main: {
            backgroundColor: '#c74242',
            border: '1px solid #c74242',
            color: "#fff",
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            padding: '5px 15px',
            whiteSpace: 'pre-line',
            minHeight: '50px',
            borderRadius: '5px'
        }
    }
})


interface Props{
    alert: boolean;
    setAlert: React.Dispatch<React.SetStateAction<boolean>>;
    alertMessage: string;
    setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
    alertMode: boolean;
    setAlertMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertPopup: React.FC<Props> = ({alert, setAlert, alertMessage, setAlertMessage, alertMode, setAlertMode}) => {
    const classes = useStyles()
    useEffect(() => {
        const cleanup = setTimeout(() => {
            setAlert(false);
            setAlertMessage('')
            setAlertMode(false)
        }, 3200);

        return ()=>{
            clearTimeout(cleanup)
        }
    });
  return (
    <>
        {
            alert
            &&
            <>
                <div id='somethingwrong' className={!alertMode ? 'somethingwrong' : 'somethingwrongNone'}>
                    <div className={classes.main}>
                        <p style={{color: '#fff'}}>{alertMessage}</p>
                    </div>
                </div>

                <div id='somethingwrong4' className={alertMode ? 'somethingwrong' : 'somethingwrongNone'}>
                    <div className={classes.main} style={{background: '#04b304', border: '1px solid #04b304',}}>
                        <p style={{color: '#fff'}}>{alertMessage}</p>
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default AlertPopup

