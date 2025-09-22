import axios from "axios";
import {atom, selector} from "recoil"

// export const networkAtom = atom({
//     key: "networkAtom",
//     default:102
// });

// export const jobsAtom = atom({
//     key:"jobkAtom",
//     default: 0
// });

// export const messagingAtom = atom({
//     key:"messageAtom",
//     default:0
// });

// export const  notificationsAtom = atom({
//     key:"notificationAtom",
//     default:12
// });

 

// export const totalNotificationSelector = selector({
//     key: "totoalNotificationSelector",
//     get: ({get}) => {
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const messageAtomCount = get(messagingAtom);
//         const notificationAtomCount = get(notificationsAtom);

//         return networkAtomCount + jobsAtomCount + messageAtomCount + notificationAtomCount;
//     }
// })

 

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });




// asynchronous data queries
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
         get : async () => {
            const res = await axios.get("http://localhost:8080/notifications/")
            return res.data;
        }
    })
});



export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})