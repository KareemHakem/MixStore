import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  const handleToggle = (subValue) => {
    if (subValue === false) {
      setValue(false);
    } else {
      setValue(!value);
    }
  };
  return { value, handleToggle };
}
