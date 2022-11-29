import React, {useState} from 'react';
import { errorCheck } from '../../services/validate';
import './RegisterCard.css'
import logo from '../../Assets/icons8-kawaii-french-fries-48.png';

const RegisterCard = () => {

    const [user, setUser] = useState({
        recepiename : '',
        ingredients : '',
        preparation: '',
        videolink: ''
    });

    const [userError, setUserError] = useState({
        recepieNameError : '',
        ingredientsError : '',
        preparationError : '',
        videoError : ''
    })

    const inputHandler = (e) => {
        //Now I bind the handler

        setUser((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
        }));

    }

    const errorHandler = (e) => {

        let error = "";

        error = errorCheck(e.target.name,e.target.value);

        setUserError((prevState)=>({...prevState, 
            [e.target.name + 'Error'] : error
        }));

    }

    const handleSaveToPC = (jsonData,filename) => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${filename}.json`;
        link.href = url;
        link.click();
      }

    return (
        <div className="registerCardDesign">
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <div className="registerCardUp">
                <p className='form-text'>Fill the form to add your recepies!</p>
                <img className="logoDesign" src={logo}/>
            </div>
            <form onSubmit={handleSaveToPC} className="registerCardMiddle">
                {/* Here were are going to operate with inputs... */}
                <input placeholder="Recepie Name" type="text" name="recepieName" className="basicInput" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.recepieNameError}</div>
                
                <textarea placeholder="List all the ingredients used" type="text" name="ingredients" className="basicInput" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.ingredientsError}</div>

                <textarea placeholder="Exaplain in detal how you prepare the recipe" type="text" name="preparation" className="basicInput" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.preparationError}</div>
                
                <input placeholder="Link a video of the preparation!" type="url" name="video" className="basicInput" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.videoError}</div>
            </form>
            <div className="registerCardBottom">
                <div onClick={() => alert('Form submitted succesfully!')} className='submit-button'>Submit</div>
            </div>
        </div>
    )
}

export default RegisterCard;
