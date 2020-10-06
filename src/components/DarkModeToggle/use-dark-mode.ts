import { useEffect } from 'react';
import useLocalStorage from '../../hooks/use-local-storage';

function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode',false);

  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = getPrefColorScheme();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled:boolean =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      console.log(enabledState);
      console.log(enabled);
      const dmClassName = 'dark-mode';
      const lmClassName = 'light-mode';
      const element = window.document.body;
      if (enabled) {
        element.classList.remove(lmClassName) 
        element.classList.add(dmClassName) 
      } else {
        element.classList.remove(dmClassName) 
        element.classList.add(lmClassName) 
      }
    },
    [enabled, enabledState] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabled, setEnabledState];
}

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function getPrefColorScheme() {
  if (!window.matchMedia) return;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default useDarkMode;
