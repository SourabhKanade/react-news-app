import { createSlice } from "@reduxjs/toolkit";

export const masterSlice = createSlice({
    name: 'master',
     initialState : {
        newsData: []
    },
    reducers: {
        setNewsData: (state, action) => {
          state.newsData = action.payload;
        }
      }
})

export const { setNewsData } = masterSlice.actions;
    
export default masterSlice.reducer;

// export const fetchtimeTemplate = (id, token) => async dispatch => {

//   let response = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_SECRET_KEY}&country=in&language=en&category=${props.category}`)

//   .catch(function (error) {
//      console.log(error)
//       })
//  if(response &&  response.data && response.data){

//   console.log(response.data, "lmao")
//   //    dispatch(timeTemplateViewSuccess(response.data.timetemplate[0]));
//   //    console.log(response.data.timetemplate[0].timetemplatedetails,"1233");
  
//   } 
//   else {
//      console.log("error")
//   }
// };