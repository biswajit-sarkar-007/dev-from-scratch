import { useEffect, useState } from "react";

function useDebounced(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
   let  timeOutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () =>{
        clearTimeout(timeOutNumber)
    }
  }, [value]);


  return debouncedValue;
}

export function Debounce() {
  const [ value, setValue] = useState(0);
  const debouncedValue = useDebounced(value, 500);
  return (
    <div>
      Debounce value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
