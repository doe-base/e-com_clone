import { makeStyles } from "@mui/styles";
import { display } from "@mui/system";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme)=>{
    return {
        innerMain: {
            maxWidth: '95%',
            margin: '0 auto'
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 30px',
            height: 'auto !important',
            backgroundColor: '#150723 !important',

            [theme.breakpoints.down('sm')]: {
                padding: '10px 20px',
            },


        },
        logo: {
            display: 'block',
            transition: 'all 0.15s linear',
            height: '80px',
            marginTop: '5px',
            [theme.breakpoints.down('sm')]: {
                height: '50px',
            },
        },
        logoText: {
            color: '#fff',
            fontSize: '1.4rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.1rem',
            },
        }, 

        module: {
            background: '#ffffff',
            borderRadius: '5px',
            marginBottom: '2rem',
        }, 

        header: {
            position: 'relative',
            fontSize: '1.125rem',
            lineHeight: '1.3333333333',
            fontWeight: 'bold',
            color: '#fff',
            background: '#6d6e70',
            padding: '1rem',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
        }, 
        mainSection: {
            margin: '0 1.25rem',
            padding: '2rem 0'
        }, 
        mainSection2: {
            margin: '0 1rem',
        },
        mainSectionP: {
            marginBottom: '1rem',
            color: "#6d6e70",
            fontSize: '0.967rem',
            lineHeight: '1.3'

        }, 
        mainSectionh2: {
            fontSize: '1.125rem',
            lineHeight: '1.33333',
            fontWeight: 'bold',
            color: '#6d6e70',
        },
        mainSectionh2Small: {
            fontSize: '1.025rem',
            lineHeight: '1.33333',
            fontWeight: 'bold',
            color: '#6d6e70',
        },
        mainSectionSection: {
            marginTop: '2rem',
            width: '100%'
        },

        mainSectionSectionTitle: {
            display: 'block',
            width: '100%',
            textAlign: 'left',
            padding: '2rem 0',
        },
        selectField: {
            width: '33%', 
            padding: '0.5rem',
            color: '#6d6e70',
            fontFamily: 'inherit',
            borderRadius: '3px',
            fontSize: '1.05rem',

            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        }, 
        selectField2: {
            width: '70%', 
            padding: '0.5rem',
            color: '#333',
            fontFamily: 'inherit',
            borderRadius: '3px',
            fontSize: '1.05rem',
            fontWeight: '500',

            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        }, 
        selectField2TextHolder: {
            padding: '0.5rem 0',
            display: 'flex',
            width: '70%', 

            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        selectField2Text: {
            marginRight: '0.5rem',
            color: '#333',
            fontFamily: 'inherit',
            borderRadius: '3px',
            fontSize: '1.3rem',
            fontWeight: '700',
            border: 'none !important',

            [theme.breakpoints.down('sm')]: {
                fontSize: '1.05rem',
            },

        }, 
        selectField2Text2: {
            marginRight: '0.5rem',
            color: '#333',
            fontFamily: 'inherit',
            borderRadius: '3px',
            fontSize: '1.3rem',
            fontWeight: '700',
            border: 'none !important',

            [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
            },

        }, 
        selectField2File: {
            width: '70%', 
            padding: '0.5rem',
            color: '#6d6e70',
            fontFamily: 'inherit',
            borderRadius: '3px',
            fontSize: '1.05rem',
            border: '1px solid #000',

            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        }, 
        mainSection2MainChar: {
            paddingRight: '1.5rem',
            display: 'block',
            overflow: 'hidden',
            color: '#6d6e70',
            fontWeight: '700',
            marginBottom: '0.2rem',

            // [theme.breakpoints.down('md')]: {
            //     textOverflow: 'ellipsis',
            //     whiteSpace: 'nowrap',
            // },
        },
        mainSection2SubChar: {
            color: '#6d6e70',
            fontSize: '0.85rem',
            marginBottom: '0.3rem'
        },
        mainSection2PriceChar: {
            color: '#6d6e70',
            fontSize: '1rem',
            fontWeight: '500'
        },
        mainSection2PriceChar2: {
            color: '#6d6e70',
            fontSize: '0.9rem',
            fontWeight: '400'
        },

        cancelBtn: {
            width: '100%',
            display: 'block',
            fontSize: '1.125rem',
            fontWeight: 'bold',
            textAlign: 'center',
            textDecoration: 'none',
            textShadow: '0 -1px 1px #d8452e',
            color: '#fff',
            background: 'linear-gradient(to bottom, #f14c2e 0%, #d8452e 100%)',
            filter: 'progid:DXImageTransform.Microsoft.gradient(enabled=false)',
            padding: '0.5em 1rem',
            border: '1px solid #e0452f',
            borderRadius: '5px',
        },
        cancelBtnHolder: {
            padding: 0,
            margin: '1.125rem',
        },

        infoBox: {
            paddingRight: '3rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #d6d6d6',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            position: 'relative',
            marginBottom: '2rem',

            [theme.breakpoints.down('md')]: {
                padding: '1rem !important'
            },
        },

        rpSm21: {
            [theme.breakpoints.down('sm')]: {
                paddingTop: '0.87rem !important',
                paddingBottom: '1rem !important'
            },
        },
        cryptocurrencyaddressholder: {
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        cryptocurrencyaddressholdertitle: {
            marginBottom: '0.5rem',
            display: 'block',
            color: '#222',
            fontSize: '0.95rem',
        }

    }
})

export default useStyles