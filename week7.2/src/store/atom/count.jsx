import {atom, selector} from "recoil"

// for count 
export const countAtom = atom({
    key:"countAtom",
    default:0
});


// for even used slector

export const evenSelector = selector({
    key:"evenSelector",
    get:({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})
