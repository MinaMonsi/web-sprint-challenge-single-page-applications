import React, {useState} from "react"

export default function OrderForm(){
    const [form, setForm] = useState({
        user: '',
        size: '',
        sauce: '',
        topping:'',
        instructions:'',
    })

    const handleChange = event => { console.log('changing')}
    return(
        <div className='AppForm'>
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
                    <input type="checkbox" checked={form.topping === 'cheese'} name="cheese" onChange={handleChange}/>
                    <br/>

                    <label htmlFor="toppings">Pepperoni</label>
                    <input type="checkbox" checked={form.topping === 'pepperoni'} name="pepperoni" onChange={handleChange}/><br/>

                    <label htmlFor="toppings">Sausage</label>
                    <input type="checkbox" checked={form.topping === 'sausage'}  name="cheese" onChange={handleChange}/>
                    <br/>

                    <label htmlFor="toppings">Mushroom</label>
                    <input type="checkbox" checked={form.topping === 'mushroom'}  name="mushroom" onChange={handleChange}/>
                    <br/>

                    <label htmlFor="toppings">Pineapple</label>
                    <input type="checkbox" checked={form.topping === 'pineapple'}  name="pineapple" onChange={handleChange}/>
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
                    placeholder="Name"
                    name="user" 
                    type="text" 
                    onChange={handleChange}/>
                    <br/>
                </div>

                <h4>Please double check your order before submitting.</h4>
                <input type="submit"/>
                
            </form>
        </div>
    )
}