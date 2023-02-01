import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import {    getAllCountries,
            postAction,
            getAction,           
        } from "../redux/actions/index";
import './styles/createActivity.css'

export default function Activity(){

    const dispatch = useDispatch();
    const activities  = useSelector((state) => state.activities);
    const countries = useSelector((state) => state.countries);
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const [input, setInput] = useState({
        name: "",
        time: "",
        difficulty: "",
        season: "",
        relatedCountries: [],
    });

    function validate(input) {
        let errors = {}
        if (!input.name) {
            errors.name = "*Required name*";
        }
        if (input.name.length < 4 || input.name.length > 20) {
            errors.name = "*Invalid name*"
        }
        if (!input.time) {
            errors.time ="*Required time*"
        }
        if (!input.difficulty) {
            errors.difficulty = "*Required difficulty*"
        }
        if (!input.season) {
            errors.season = "*Required season*"
        }
        if (input.relatedCountries.length === 0) {
            errors.relatedCountries = "*Please selec a country*"
        }
        if (Object.entries(errors).length === 0) {
            setButtonEnabled(true)
        } else {
            setButtonEnabled(false)
        }
        return errors
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value 
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelectCountry(e){
        if (input.relatedCountries.includes(e.target.value)) {
            e.target.value = 'default';
            return alert( "Selected country")
        } else {
            setInput({
                ...input,
                relatedCountries:[...input.relatedCountries, e.target.value]
            })
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))
        }
        e.target.value = 'default';
    }

    function handleSubmit(e) {
        e.preventDefault();
        let validateName = activities.find(a => a.name === (input.name))
        if (validateName !== undefined) {
            alert("Activity name exists")
        } else {
            dispatch(postAction(input))
            alert("Activity Creada")
            setInput({
                name: '',
                time: '',
                difficulty: '',
                season: '',
                relatedCountries: [],
            })
            history.push('/home')}
    }

    function handleDelete(e){
        setInput({
            ...input,
            relatedCountries: input.relatedCountries.filter(c => c !== e)
        })
    }
    
    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getAction())
    },[dispatch]);

    return(
        <div className="container-creare-activity">
            <div className="barActivity">
                <h1 className="title"> PI - Contries</h1>
                <h1>Create Activity</h1>
                <Link className="btnHome" to= '/home'>Back to Home</Link>
            </div>
            
            <div className="container-formulario">
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="formulario">
                        <lable>Activity:</lable>
                        <input type="text" value={input.name} name="name" onChange={ handleChange}/>
                        {errors.name && (<p className="msg-error">{errors.name}</p>)}
                    </div>

                    <div className="formulario">
                        <lable>Duration Min:</lable>
                        <input type="text" value={input.time} name="time" onChange={ handleChange}/>
                        {errors.time && (<p className="msg-error">{errors.time}</p>)}
                    </div>

                    <div className="formulario">
                        <label>Difficulty:</label>
                        <select defaultValue = {'default'} name = "difficulty" onChange = {e => handleSelect(e)}>
                            <option value ='default' disabled>Difficulty</option>
                            <option value ="1">1</option>
                            <option value ="2">2</option>
                            <option value ="3">3</option>
                            <option value ="4">4</option>
                            <option value ="5">5</option>
                        </select>
                    </div>
                    <div>
                        {errors.difficulty && (<p className="msg-error">{errors.difficulty}</p>)}
                    </div>
                    <div className="formulario">
                        <label>Season: </label>
                        <select defaultValue = {'default'} name = "season" onChange = {e => handleSelect(e)}>
                            <option value='default' disabled>Season</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                    <div>
                        {errors.season && (<p className="msg-error">{errors.season}</p>)}
                    </div>

                    <div className="formulario">
                        <label> Country: </label>
                        <select defaultValue = {'default'} name = "relatedCountries" onChange = {(e) => handleSelectCountry(e)}>
                            <option value = 'default' disabled>Select Country</option>
                            {countries.map( c =>(
                                <option value={c.name}>{c.name}</option>                            
                            ))}
                        </select>
                        {errors.relatedCountries && (<p className="msg-error">{errors.season}</p>)}
                    </div>
                    <button className="createButton" type="submit" disabled ={!buttonEnabled}>Create</button>
                </form>
            </div>
            <div className="btnCountry">
            {input.relatedCountries.map(c =>
                    <div >
                        <button className="custom-btn btn-1" onClick={() => handleDelete(c)}>{c}</button>
                    </div>
                )}
            </div>
        </div>
    )

}