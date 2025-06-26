import { useState, useEffect } from 'react';

const useWindowProperty = <T>(propertyName: keyof Window): T | undefined => {
  const [propertyValue, setPropertyValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    const val = (window as Window)[propertyName];
    setPropertyValue(val);
  }, [propertyName])

  return propertyValue;
}

export default useWindowProperty;