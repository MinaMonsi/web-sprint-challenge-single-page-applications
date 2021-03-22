import * as yup from 'yup'

export const schema = yup.object().shape({
    user: yup.string().required('Name is required').min(6, 'Name needs to be 6 characters minimum'),
    size: yup.string().oneOf(['1','2','3','4'],'Please select a pizza size'),
    sauce: yup.string().oneOf(['marinara','alfredo','bbq'],'Please select a sauce for your pizza'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string().required('Enter N/A if no additional instructions are required').min(3, 'Please enter N/A or specify what additional instructions you have for your order')
})