// import "./App.css";
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import {
//   jobsAtom,
//   messagingAtom,
//   networkAtom,
//   notificationsAtom,
// } from "./store/atom/atoms";

// function App() {
//   return (
//     <>
//       <RecoilRoot>
//         <MainApp />
//       </RecoilRoot>
//     </>
//   );
// }

// function MainApp() {
//   const mynetworkNotificationCount = useRecoilValue(networkAtom);
//   const myjobsNotificationCount = useRecoilValue(jobsAtom);
//   const mymessageNotificationCount = useRecoilValue(messagingAtom);
//   const myownNotificationCount = useRecoilValue(notificationsAtom);
//   // const [myownNotificationCoun, setMyownNotification] =
//   //   useRecoilState(notificationsAtom);

//   return (
//     <div>
//       <button>Home</button>

//       <button>
//         My network (
//         {mynetworkNotificationCount >= 100 ? "99+" : mynetworkNotificationCount}
//         )
//       </button>
//       <button>Jobs ({myjobsNotificationCount})</button>
//       <button>Messaging ({mymessageNotificationCount})</button>
//       <button>Notification ({myownNotificationCount})</button>
//       <ButtonUpdate />
//     </div>
//   );
// }

// function ButtonUpdate() {
//   const   setMyownNotification  =
//      useSetRecoilState(notificationsAtom);
//   return (
//     <button
//       onClick={() => {
//         setMyownNotification((c) => c + 1);
//       }}
//     >
//       Profile
//     </button>
//   );
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------------------

// import "./App.css";
// import {
  
//   RecoilRoot,
//   useRecoilValue,
 
// } from "recoil";
// import {
//   jobsAtom,
//   messagingAtom,
//   networkAtom,
//   notificationsAtom,
//   totalNotificationSelector,
// } from "./store/atom/atoms";
// import { useMemo } from "react";


// function App(){
//   return <div>
//     <RecoilRoot>
//       <MainApp/>
//     </RecoilRoot>
//   </div>
// }
// function MainApp() {
//   const mynetworkNotificationCount = useRecoilValue(networkAtom);
//   const myjobsNotificationCount = useRecoilValue(jobsAtom);
//   const mymessageNotificationCount = useRecoilValue(messagingAtom);
//   const myownNotificationCount = useRecoilValue(notificationsAtom);

//   // step : 1
//   // const totalNotificationCount = useMemo(()=> {
//   //   return  mynetworkNotificationCount + myjobsNotificationCount + mymessageNotificationCount + myownNotificationCount;

//   // },[mynetworkNotificationCount,myjobsNotificationCount, mymessageNotificationCount, myownNotificationCount])


//  // step : 2
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector)




//   return (
//     <>
//       <button>Home</button>

//       <button>
//         My network (
//         {mynetworkNotificationCount >= 100 ? "99+" : mynetworkNotificationCount}
//         )
//       </button>
//       <button>Jobs ({myjobsNotificationCount})</button>
//       <button>Messaging ({mymessageNotificationCount})</button>
//       <button>Notification ({myownNotificationCount})</button>
//       <button>Me ({totalNotificationCount})</button>
//     </>
//   );
// }

 
// export default App;


//-------------------------------------------------------------------------------------------------------------------

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './store/atom/atoms'
import { useEffect } from 'react' 
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);


  // a flash of zero would seen there this is not right approach
  // useEffect(() => {
  //   // fetch
  //   axios.get("http://localhost:8080/notifications/")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App