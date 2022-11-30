import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import Logo from '../../Assets/icons8-kawaii-french-fries-48.png'

const Header = () => {
    let navigate = useNavigate();

    return(
        <div className="headerDesign">
            <div className="leftside">
            <div className="appName" onClick={()=>setTimeout(()=>{navigate("/")},500)}>PlaceHolder Name</div>
            <img className="header-logo" src={Logo} alt="logo" onClick={()=>setTimeout(()=>{navigate("/")},500)}/>
            </div>
            <div className="rightside">
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/mealshowcase")},500)}>Meals ShowCase</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/newmealform")},500)}>Add Your Meal</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/searchmeal")},500)}>Search Your Meal</div>
            </div>
    </div>
    )
}

export default Header;