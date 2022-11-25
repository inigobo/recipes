import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header = () => {
    let navigate = useNavigate();

    return(
        <div className="headerDesign">
            <div className="leftside">
            <div className="appName" onClick={()=>setTimeout(()=>{navigate("/")},500)}>PlaceHolder WebAppName</div>
            </div>
            <div className="rightside">
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/mealshowcase")},500)}>Meals ShowCase</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/newmealform")},500)}>Add Your Meal</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/search")},500)}>Search Your Meal</div>
            </div>
    </div>
    )
}

export default Header;