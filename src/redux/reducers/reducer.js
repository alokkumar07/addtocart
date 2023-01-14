const INIT_STATE ={
    carts :[]
};
 
export const cartreducer =(state=INIT_STATE,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "ADD_CART":
            return {
                ...state,
                carts:[...state.carts,action.payload]
            }
        
        case "RMV_CART":
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
             
            return {
              ...state,
                carts:data
            }
          
        default:
          return state;
    }
}