import React, {useState, useEffect} from "react"
import * as yup from 'yup' 
import { schema } from "./FormSchema"

export default function PizzaOrderForm(){
    const [form, setForm] = useState({user: '', size: '', sauce: '', topping: '',
        instructions:'',})
    const [errors, setErrors] = useState({user: '', size: '', sauce: '', topping:'',
        instructions:'',})
    const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(()=> setErrors({...errors, [name]: ''}))
        .catch(err=> setErrors({...errors, [name]: err.errors[0]}))
    }

    const handleChange = event => {
        const { name, value, type, checked} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setForm({...form, [name]: valueToUse})
    }

    useEffect(()=> {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return(
        <div className='AppForm'>
            <div style={{color: 'red'}}>
                <div>{errors.user}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.topping}</div>
                <div>{errors.instructions}</div>
            </div>
            <form>
                <div className="dropMenu">
                    <h4>Pizza Size</h4>
                    <label htmlFor="pizzaSize">Select</label>
                    <select onChange={handleChange}>
                        <option value='1'>Small</option>
                        <option value='2'>Medium</option>
                        <option value='3'>Large</option>
                        <option value='4'>Extra Large</option>
                    </select><br/> 
                </div>

                <div className="radioBtn">
                    <h4>Select A Sauce</h4>
                    <label htmlFor="sauce">Marinara</label>
                    <input type='radio' name='sauce' onChange={handleChange}/><br/>
                    <label htmlFor="sauce">Alfredo</label>
                    <input type='radio' name='sauce' onChange={handleChange}/><br/>
                    <label htmlFor="sauce">BBQ</label>
                    <input type='radio' name='sauce' onChange={handleChange}/><br/>
                </div>

                <div className="checkBox">
                    <h4>Toppings</h4>
                    <label htmlFor="toppings">Cheese</label>
                    <input type="checkbox" checked={form.cheese} name="cheese" onChange={handleChange}/>
                    <br/>

                    <label htmlFor="toppings">Pepperoni</label>
                    <input type="checkbox" checked={form.pepperoni} name="pepperoni" onChange={handleChange}/><br/>

                    <label htmlFor="toppings">Sausage</label>
                    <input type="checkbox" checked={form.sausage}  name="cheese" onChange={handleChange}/>
                    <br/>

                    <label htmlFor="toppings">Mushroom</label>
                    <input type="checkbox" checked={form.mushroom}  name="mushroom" onChange={handleChange}/>
                    <br/>

                    <label htmlFor="toppings">Pineapple</label>
                    <input type="checkbox" checked={form.pineapple}  name="pineapple" onChange={handleChange}/>
                </div>

                <div className="textField">
                    <h4>Special Instructions</h4>    
                    <label htmlFor="instuctions"></label>
                    <input value={form.instructions} 
                    placeholder="Special Instructions"
                    name="instructions" 
                    type="text" 
                    onChange={handleChange}/>
                    <br/>

                    <h4>Name</h4>
                    <label htmlFor="name"></label>
                    <input value={form.user} 
                    placeholder="name"
                    name="user" 
                    type="text" 
                    onChange={handleChange}/>
                    <br/>
                </div>

                <h4>Please double check your order before submitting.</h4>

                <button disabled={disabled}>Submit</button>
                
            </form>
        </div>
    )
}