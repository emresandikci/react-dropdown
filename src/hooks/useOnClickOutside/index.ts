import React, { useEffect } from 'react';

export default function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  onTriggerEvent: () => void
) {
  useEffect(() => {
    document.addEventListener('click', (event) => {
      const element = ref.current;
      if (element && element?.contains(event.target as Node)) return;
      onTriggerEvent();
    });
    return document.removeEventListener('click', () => {
      onTriggerEvent();
    });
  }, []);
}
