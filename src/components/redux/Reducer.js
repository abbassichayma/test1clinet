const init = {
    articles:[],
    hearts:[],
    user:[],
    role:{},
    details:[]
   
}
console.log("init",init)

const articleReducer = (state=init,action)=>{
    
    switch (action.type) {
         
        case 'GETDATA':
            console.log(action.payload)
           return {
            ...state,
            articles:action.payload
           } 
 
           case'NEW-ARTICLE':
           console.log("nouveau",action.payload)
           
           return {
            ...state,
            articles:[...state.articles,action.payload]
            
           } 

           case 'DETAILS-ARTICLE':
           return {
            ...state,
            details:action.payload
           } 

           
          
        case 'POST-DELETE-HEART':
           return {
            ...state,
            hearts:action.payload
           } 

           case 'GETHEART':
            return {
             ...state,
             hearts:action.payload
            } 


        case 'ADD-USER':
            return {
             ...state,
             user:action.payload
            }
            case 'CURRENT-USER':
            return {
             ...state,
             user:action.payload
            }  

            case 'ROLE-USER':
                return {
                 ...state,
                 role:action.payload
                }  

            case 'LOGIN-USER':
                return {
                 ...state,
                 user:action.payload
                } 
         
           
        default: return state
           
    }
}

export default articleReducer
