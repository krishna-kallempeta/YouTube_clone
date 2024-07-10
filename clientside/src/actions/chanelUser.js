import * as api from '../api'

export const updateChanelDate=(id,updateData)=> async(dispatch)=>{

    try{
        const {data}=await api.updateChanelData(id,updateData);
        dispatch({type:'UPDATE_DATA',payload:data})

    }catch(error){
        console.log(error)
    }
}
   