import {useSelector, useDispatch} from 'react-redux'
import Select from 'react-select'
import ReactCountryFlag from "react-country-flag"
import { changeLang } from './redux/Slice'

import { BsCart2, BsFillPersonFill } from "react-icons/bs"

import "./styles/Header.css"
import translations from "./json_data/translations.json"

        
function Header() {
    const lang = useSelector(state => state.lang.lang)
    const dispatch = useDispatch();

    const options = [
        { value: 1, label:  <span className="HeaderOption" onClick={() => dispatch(changeLang(1))}><ReactCountryFlag style={{paddingLeft: '3px', paddingRight: '2px'}} countryCode="RU" svg /><ReactCountryFlag countryCode="RU" style={{fontSize: '20px',marginTop: '-4px', width: '54px', paddingLeft: '5px'}}/></span> },
        { value: 2, label: <span className="HeaderOption" onClick={() => dispatch(changeLang(2))}><ReactCountryFlag style={{paddingLeft: '3px', paddingRight: '2px'}} countryCode="GB" svg /><ReactCountryFlag countryCode="EN" style={{fontSize: '20px',marginTop: '-4px', width: '54px', paddingLeft: '5px'}}/></span> },
        { value: 3, label: <span className="HeaderOption" onClick={() => dispatch(changeLang(3))}><ReactCountryFlag style={{paddingLeft: '3px', paddingRight: '2px'}} countryCode="ES" svg /><ReactCountryFlag countryCode="SP" style={{fontSize: '20px',marginTop: '-4px', width: '54px', paddingLeft: '5px'}}/></span> }, 
      ]
        
    return(
        <div className="Header">
            <a href="/"><img className="Logo" src={ require('./images/logo2.jpg') } /></a>
            <div className="IconButtons">
            <a className ="Icon" href="AccountEnter"><BsCart2 color={"rgb(64,152,159)"} size={"40px"}/></a>
            <a className ="Icon" href="AccountEnter"><BsFillPersonFill color={"rgb(64,152,159)"} size={"40px"}/></a>
            <Select closeMenuOnClick={false} defaultValue={options[lang - 1]} isSearchable={false} className="HeaderSelect" options={options} />
            <div className="OrderButton">{translations[lang - 1].Header}</div>
            </div>
        </div>
    )
}

export default Header