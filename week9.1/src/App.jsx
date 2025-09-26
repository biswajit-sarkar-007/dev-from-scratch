import { CountSecond } from "./Hooks/CountSecond";
import { Debounce } from "./Hooks/Debounce";
import Hooks from "./Hooks/Hooks";
import { MousePointer } from "./Hooks/MousePointer";
import { ScreenSize } from "./Hooks/ScreenSize";
import { useIsOnline } from "./Hooks/useIsOnline";

function App() {
  // const isOnline = useIsOnline();
  // if(isOnline){
  //   return "You are online"
  // }

  return (
    <div>
      {/* <p>You are ofline</p> */}
      {/* <Hooks/> */}

      {/* <MousePointer/> */}
      {/* <ScreenSize/> */}
      {/* <CountSecond/> */}
      <Debounce />
    </div>
  );
}

export default App;
