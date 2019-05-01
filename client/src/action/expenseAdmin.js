import axios from "axios";

export const fetchOneExpense = (id) => async dispatch =>{
    console.log(id)
    try{
        const expense = axios.get('', {
            params: {
                id
            }
        })
    }catch(e){
        console.log(e)
    }
}   