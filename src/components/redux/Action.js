import axios from 'axios';



export const getArticle = (domain) => async(dispatch)=>{
   try {
    const {data} = await axios.get("http://localhost:9000/article/");
    // const {data} = await axios.get(`http://localhost:9000/article/${domain}`);
    console.log("domain",data)
    dispatch({
        type:'GETDATA',
        payload:data.articles
    })
   
 dispatch(getArticleDetails(data[0].articles._id))
 console.log("tessst",data.articles)
   } catch (error) {
    console.error(error)
   } 
}

export const getArticleDetails = (articleId) => async(dispatch)=>{
    console.log("ID",articleId)
    try {
     const {data} = await axios.get(`http://localhost:9000/article/${articleId}`);
     console.log("details",data)
     dispatch({
         type:'DETAILS-ARTICLE',
         payload:data
     })
 
    } catch (error) {
     console.error(error)
    } 
 }

 export const newPublication = (newArticle) => async(dispatch)=>{
    console.log("newArticle",newArticle)
    try {
     const {data} = await axios.post("http://localhost:9000/article/add",newArticle);
     dispatch({
         type:'NEW-ARTICLE',
         payload:data
     })
 
    } catch (error) {
     console.error(error)
    } 
 }


export const updateArticle = (id,myData) => async(dispatch)=>{
    try {
        const {data} = await axios.put(`http://localhost:9000/article/${id}`,myData);
       console.log("hello",data)
        dispatch({
            type:'UPDATE_ARTICLE',
        })
        // dispatch(getArticle())
       } catch(error) {
        console.error(error)
       } 
}

// export const deleteArticle = (ID) =>async(dispatch)=>{  article
//        try {
//         const {data} = await axios.delete('http://localhost:9000/article',ID);
//         dispatch({
//             type:'DELETE-ARTICLE',
//             payload:ID
//         })
    
//        } catch (error) {
//         console.error(error)
//        } 
//     }

export const getheart = () => async(dispatch)=>{
    try {
     const {data} = await axios.get(`http://localhost:9000/heart/`);
    //  console.log('hearts',data)
     dispatch({
         type:'GETHEART',
         payload:data.hearts
     })
 
    } catch (error) {
     console.error(error)
    } 
 }

 export const addDeleteheart = (ID,heart) => async(dispatch)=>{
    try {
     const {data} = await axios.post(`http://localhost:9000/heart/addHeart`,ID,heart);
     console.log('hearts',data)
     dispatch({
         type:'POST-DELETE-HEART',
         payload:data
     })
 
    } catch (error) {
     console.error(error)
    } 
 }

//  LOGIN ACTIONS
export const addUser = (newUser) => async(dispatch)=>{
    try {
     const {data} = await axios.post("http://localhost:9000/user/add",newUser);
     
     dispatch({
         type:'ADD-USER',
         payload:data
     })
       localStorage.setItem('token',data.token)
       dispatch(currentUser(data.token))
    } catch (error) {
     console.log(error)
    } 
 }
  
 export const currentUser = (token,navigate) => async(dispatch)=>{
    const config={
        headers:{
            Authorization:token
        }
    }
    try {
     const {data} = await axios.get("http://localhost:9000/user/current",config);
     
     dispatch({
         type:'CURRENT-USER',
         payload:data.user
     })
     dispatch(roleUser(data.user.role,navigate))
    } catch (error) {
     console.log(error)
    } 
 }

 export const roleUser = (roleId,navigate) => async(dispatch)=>{
    
    try {
     const {data} = await axios.get(`http://localhost:9000/role/${roleId}`);
     dispatch({
         type:'ROLE-USER',
         payload:data.role.roleName
     })
    
    } catch (error) {
     console.log(error)
    } 
 }



 export const userLogin = (log,navigate) => async(dispatch)=>{
    console.log("log",log)
    try {
     const {data} = await axios.post("http://localhost:9000/user/login",log);
    console.log("teeest",data)
     dispatch({
         type:'LOGIN-USER',
         payload:data
     })
     localStorage.setItem('token',data.token)
     navigate('/publication')
    } catch(error) {
     console.log(error)
    } 
 }



 




