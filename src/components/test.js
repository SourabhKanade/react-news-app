
import React from 'react'

function test() {

// img : https://www.denverpost.com/wp-content/uploads/2022/06/gfm1.png?w=1400px&strip=all




// {
//     "article_id": "ba0a10dab7416d01471389471bedc7dd",
//     "title": "India extends coal import mandate for power to avoid blackouts",
//     "link": "https://timesofindia.indiatimes.com/business/india-business/india-extends-coal-import-mandate-for-power-to-avoid-blackouts/articleshow/103314255.cms",
//     "keywords": null,
//     "creator": null,
//     "video_url": null,
//     "description": "India extended a mandate to power plants to import coal until March as the driest August in more than a century pushed electricity demand to a record, putting a strain on supplies of the nation’s main generation fuel.​Plants designed to run on domestic coal have been asked to import 4% of their supplies of the fuel through March to avoid outages, extending an earlier direction to buy from overseas until the end of this month, power secretary Pankaj Agarwal said in an interview.",
//     "content": "10 Most Affordable Cities in India to Buy a House Most Visited Monuments in India The Pros and Cons of Investing in Value Stocks Investing in Small-Cap Stocks: Top 10 Tips for Absolute Beginners 10 Ways to Earn Money Online by Selling Physical Products Richest Cricket Players Across the World 10 Things You Didn’t Know About Warren Buffett’s Investment Process Priyanka Chopra Net Worth: Know How Rich is Global Actress Top 10 Benefits of Investing in Small-Cap Stocks 15 Best Tax Saving Schemes in India",
//     "pubDate": "2023-09-02 17:01:13",
//     "image_url": https://www.denverpost.com/wp-content/uploads/2022/06/gfm1.png?w=1400px&strip=all,
//     "source_id": "toi",
//     "source_priority": 391,62.6.102.42

//     "country": [Czech Republic
//         "india"
//     ],
//     "category": [
//         "business"
//     ],
//     "language": "english"
// }


  return (
    <div>test</div>
  )
}

export default test




// import React, { useState } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import "./index.css";
// import LoadingBar from 'react-top-loading-bar'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// // import Home from './components/Home';

// const App = () => {

//   const [progress, setProgress] = useState(0)

//   return (
//     <div>
      
//       <Router>
//         <Navbar />
      
//         <LoadingBar
//           color='#f11946'
//           progress={progress} />
//              {/* <Home /> */}
//         <Switch>
//           <Route path="/business"><News setProgress={setProgress} key="business" content="Business" country="in" category="Business" /></Route>
//           <Route path="/entertainment"><News setProgress={setProgress} key="entertainment" content="Entertainment" country="in" category="Entertainment" /></Route>
//           <Route path="/politics"><News setProgress={setProgress} key="politics" content="Politics" country="in" category="Politics" /></Route>
//           <Route path="/sports"><News setProgress={setProgress} key="sports" content="Sports" country="in" category="Sports" /></Route>
//           <Route path="/health"><News setProgress={setProgress} key="health" content="Health" country="in" category="Health" /></Route>
//           <Route path="/technology"><News setProgress={setProgress} key="technology" content="Technology" country="in" category="Technology" /></Route>
//         </Switch>
//       </Router>
//     </div>




// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByAmount } from "./redux/counter";

//   const { count } = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//      <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(33))}>



// import React from 'react'
// import { Grid, Typography, Tooltip } from "@mui/material";
// import CustomButton from "./custom-button";
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';
// import CardLayout from './CardLayout';
// // import CallIcon from '@mui/icons-material/Call';
// import {ReactComponent as CallIcon} from '.././assets/Images/call-icon-toolbar.svg';
// import { useSelector } from 'react-redux';
// import makeStyles from '@mui/styles/makeStyles';


// const useStyles = makeStyles((theme) => ({
// gridMargin:{
//     margin:"10px",
// },
// gridIcon:{
//     justifyContent:"flex-end"
// },
// iconColor:{
//     color:"#4d4e4e"
// },
// custName:{
//     display:"flex",justifyContent:"space-around"
// },
// nocenter: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// }

// }));

// const UserCard = ({ previewData }) => {
//     const classes = useStyles();
//     const { contact1, contact2, contact3, contact4, sessionname, customername, nextcalltime, sessioncalllistid, customercode } = previewData;
//     // const { contact1, contact2, contact3, contact4 } = previewData;
//     const { selectedProcess } = useSelector(state => state.globalreducer);
  
// console.log([previewData], "lmao")

//     const handleCrmAction = () => {
//         let obj = {
//             "processid" : selectedProcess, 
//             "customercode":customercode, 
//             "contactnumber":contact1,
//             "status": 71,
//             "sessioncalllistid": sessioncalllistid,
//             "command":"previewcrm"
//         }
//         let stringifiedObj = JSON.stringify(obj)
//         window.parent.postMessage(stringifiedObj)
//     }

//     const handleDialAction = () => {
//         let obj = {
//             "processid" :selectedProcess,
//             "customercode":customercode,
//             "contactnumber":contact1,
//             "sessioncalllistid": sessioncalllistid,
//             "status": 31,
//             "command":"dial"
//         }
//         let stringifiedObj = JSON.stringify(obj)
//         window.parent.postMessage(stringifiedObj)
//     }

//     return(
//         <CardLayout
//             width='190px'
//             // width='190px'
//             // height={'226px'}
//             height={'auto'}
//             cursor="default"
//         >
//             <Grid rowSpacing={9} className={classes.gridMargin}>
//                 <Grid container className={classes.gridIcon}>
//                     <Tooltip title="CRM" >
//                         <TextSnippetIcon 
//                             className={`${'icon-medium'} ${classes.iconColor}`}
                        
//                             onClick={handleCrmAction}
//                         />
//                     </Tooltip>
//                 </Grid>
//                 <div className={classes.custName}>
//                 <Tooltip title={customername}>
//                 <Typography variant='subHeading'>{(customername.length > 10 ? customername.slice(0, 13) + '...' : customername) ?? ""}</Typography>
//                 </Tooltip>
//                </div>

//             { (contact1 !=="") &&   <Grid className={classes.nocenter} container>
//                     <Tooltip title="Dial" placement='top'>
//                         <CallIcon
//                         className='icon-big'
//                             onClick={handleDialAction}
//                         />
//                     </Tooltip>
//                     <Typography variant="medium">{contact1}</Typography>
//                     {/* <Typography fontFamily={'Quicksand-Regular'} ml="8px">{sessionname}</Typography> */}
//                 </Grid>
// }
//                { (contact2 !=="") &&    <Grid className={classes.nocenter} container>
//                 <Tooltip title="Dial" placement='top'>
//                         <CallIcon
//                               className='icon-big'
//                             onClick={handleDialAction}
//                         />
//                     </Tooltip>
//                     <Typography  variant="medium">{contact2}</Typography>
//                 </Grid>}

//                 { (contact3 !=="") &&    <Grid className={classes.nocenter} container>
//                 <Tooltip title="Dial" placement='top'>
//                         <CallIcon
//                               className='icon-big'
//                             onClick={handleDialAction} 
//                         />
//                     </Tooltip>
//                     <Typography  variant="medium">{contact3}</Typography>
//                 </Grid>}

//                 { (contact4 !=="") &&    <Grid className={classes.nocenter} container>
//                     <Typography  variant="medium">{contact4}</Typography>
//                 <Tooltip title="Dial" placement='top'>
//                         <CallIcon
//                               className='icon-big'
//                             onClick={handleDialAction} 
//                         />
//                     </Tooltip>
//                 </Grid>}

//                 <Tooltip title="Next call time">
//                     <Typography textAlign={'center'} variant='small'>{nextcalltime}</Typography>
//                 </Tooltip>
              
//             </Grid>
//         </CardLayout>
//     )
// }

// export default UserCard;


// import BaseUrl from '../../../Api/BaseUrl';
// import { serviceUrl} from '../../../Api/Config';
// import { createSlice } from "@reduxjs/toolkit";
// import {setsnackBar} from '../../../Reducers/SnackBarReducer';
// import {fetchtimeList} from '../TimeList/TimeListReducer'
// import {HandleError} from "../../../Reducers/masterReducer";
// import { setchangesDetectedInModule } from '../../User/UserReducer/UserTemplateReducer';


// let apiUrlCall = serviceUrl();

// const initialState = {
//     payload: [],
//     inprogress: false,
//     hasErrors: false,
//     templateid: "",
//     templatename: "",
//     active: 1,
//     timetemp: false,
//     timetemplateId: "",
//     zoneid: "",
//     fromTime: "09:00:00",
//     toTime: "18:00:00",
//     timetemplatedetails: [],
//     selectedtemplate: [],
//     storeExistingDetail:[],
//     ndayArray: [],
//     setSaveTimeAlert: false
// }

// export const TimeTemplateReducer = createSlice({
//     name: 'timeTemplate',
//     initialState,
//     reducers: {
//         setStoreExistingDetail(state,{payload}){
//            state.storeExistingDetail = payload;
           
//         },
//         setSelectedTemplate (state, {payload}) {
//             state.selectedtemplate = payload;            
//         },
//         setTimeTemp (state, {payload}) {
//             state.timetemp = payload;
//         },
//         setTimeTemplateId (state, {payload}) {
//             state.timetemplateId = payload;
//         },
//         inProgress: (state) => {
//             state.inprogress = true;
//             state.hasErrors = false;
//         },
//         timeTemplateViewSuccess : (state, {payload}) => {
//             state.payload = payload;
//             state.hasErrors = false;
//             state.inprogress = false;
          
            
//         },
//         timeTemplateFailed :(state, {payload}) => {
//             state.payload = [];
//             state.inprogress = false;
//             state.hasErrors = true;
//         },
//         timeTemplateAddSuccess: (state, {payload}) => {
//             state.payload = payload;
//             state.hasErrors = false;
//             state.inprogress = false;
           
//         },
//         timeTemplateEditSuccess: (state, {payload}) => {
//             state.payload = payload;
//             state.hasErrors = false;
//             state.inprogress = false;
            
//         },
//         settemplateId (state, {payload}) {
//             state.templateid = payload;
//         },
//         settemplateName (state, {payload}) {
//             state.templatename = payload;
//         },
//         settimetemplatedetails (state, {payload}) {
//             state.timetemplatedetails = payload;
            
//         },
//         setfromTime (state, {payload}) {
//             state.fromTime = (payload);
//             console.log(payload, "payload")
//         }, 
//         settoTime (state, {payload}) {
//             state.toTime = (payload); 
//         },
//         setzoneId (state, {payload}) {
//             state.zoneid = payload;
//         },
//         setndayArray (state, {payload}) {
//             state.ndayArray = payload;
//         },
//         setSaveTimeAlert (state, {payload}) {
//             state.setSaveTimeAlert = payload;
//         }
//     }
// })

// export const {inProgress, timeTemplateViewSuccess, setTimeTemplateId, setTimeTemp,
//     timeTemplateAddSuccess, timeTemplateFailed, setSelectedTemplate,
//     timeTemplateEditSuccess, settemplateId, settemplateName, 
//     settimetemplatedetails, setfromTime, settoTime,
//     setzoneId, setndayArray, setSaveTimeAlert,setStoreExistingDetail} = TimeTemplateReducer.actions;
    
// export const timeTemplateSelector = state => state.timeTemplate;
// // export default TimeTemplateReducer

// export const fetchtimeTemplate = (id, token) => async dispatch =>{
//     // console.log(token,"dynamicId")
//     dispatch(inProgress())
//     let response = await BaseUrl.get(apiUrlCall.CRUD_API_TIME+`/`+id, {
//         headers: {
//             'ACS_SESSION_ID': token,
//         }
//     })
//     .catch(function (error) {
//           dispatch(HandleError(error))
//         // dispatch(setsnackBar({
//         //     message: "Failed to load Location Data",
//         //     open: true,
//         //     severity: 'error'
//         // }))
//         // dispatch(masterDataFetchedSuccess([]))
//         })
//    if(response &&  response.data && response.data.status === 1){
// dispatch(setfromTime(response.data.timetemplate[0].timetemplatedetails[0].fromtime))
// dispatch(settoTime(response.data.timetemplate[0].timetemplatedetails[0].totime))

//     //    let newList = response.data.timetemplate.slice();
//     console.log(response.data.timetemplate[0].timetemplatedetails[0].fromtime, "lmao")
//        dispatch(timeTemplateViewSuccess(response.data.timetemplate[0]));
//     //    console.log(response.data.timetemplate[0].timetemplatedetails,"1233");
//     //    if(timetemplatedetails.length==0){
//         dispatch(setStoreExistingDetail(response.data.timetemplate[0].timetemplatedetails));
//     //    }
       
//        dispatch({
//         type: 'master/setSavePage',
//         payload: ""  
//     })
//     } else {
//         dispatch(setsnackBar({
//             message: "Unable to process the request. Please try again later",
//             open: true,
//             severity: 'error'
//         }))
//         // dispatch(HandleError(error))
//     }
// }

// export const addtimeTemplate = (data, token) => async (dispatch, getState) => {
//     dispatch(inProgress());
//     let {timeList} = getState();
//     let response = await BaseUrl.post(apiUrlCall.CRUD_API_TIME, data, {
//         headers: {
//             'ACS_SESSION_ID': token,
//         }
//     })   
//     .catch(error=> dispatch(timeTemplateFailed("Unable to add the template please try again later")))
//     if(response.data.status===1){
//         dispatch(timeTemplateAddSuccess(response.data))
//               // let timeData = [];
//         let timeData = timeList!==null ? timeList.payload.slice() : [];
//         timeData.push(response.data.timetemplate[0]);
//         dispatch({
//             type: "timeList/timeListSuccess",
//             payload: timeData
//         })
//     }
//     else{
//         dispatch(timeTemplateFailed("Unable to add the template please try again later"))
//     }
// }

// export const saveEditedtimeTemplate = (data, token, processId, orgId, errorCodesTimeTemplate) => 
// async (dispatch, getState) => {
    
//     // dispatch(inProgress());
//     let {timeList} = getState();
    
//     // console.log(data, "datsssas")
//     let response = await BaseUrl.put(apiUrlCall.CRUD_API_TIME, data, {
//         headers: {
//             'ACS_SESSION_ID': token,
//         }
//     })   
//     .catch(error => {
        
//         dispatch(setsnackBar({
//             message: "Oops, their seems to be an issue here. Please contact our Helpdesk Support from the icon above",
//             open: true,
//             severity: 'error'
//         }))
//         dispatch(timeTemplateFailed("Unable to save the template please try again later"))
//     })
//     if(response && response.data &&  response.data.status===1) {
//         dispatch(setsnackBar({
//             message: response.data.statusdesc,
//             open: true,
//             severity: "success"
//         }))
//         dispatch({
//             type: 'master/setRenderpage',
//             payload: 'time'  
//         })
//         dispatch(setchangesDetectedInModule(false))
//         dispatch(fetchtimeList(token, orgId)) 
//     }
//     else{
//         dispatch(timeTemplateFailed(errorCodesTimeTemplate[response.data.status]))
//         dispatch(setsnackBar({
//             message: errorCodesTimeTemplate[response.data.status],
//             open: true,
//             severity: 'error'
//         }))
//     }
// }




// import { createSlice } from "@reduxjs/toolkit";

// export const masterSlice = createSlice({
//     name: 'master',
//      initialState : {
//         newsData: []
//     },
//     reducers: {
//         setNewsData: (state, action) => {
//           state.newsData = action.payload;
//         }
//       }
// })

// export const { setNewsData } = masterSlice.actions;
    
// export default masterSlice.reducer;

