# UseCallback hook
-The useCallback is a react hook that restricts rerendering of cocmponents that do not need to be rendered.
-It is almost similar to the useMemo hook, the only difference being it catches the function instead of a value.
-The useCallback takes in two arguments, the callback function that performs the counter, and the dependacy array that will cause the useCallback to return a new function if its state changes.
-The useCallback is a hook that will return a memoized hook of a function that only changes if one of the dependencies changes.

-In the project, we used useCallback to prevent the rerendering of either the increment and decrement counter when either is clicked.
-The useCallback is used on both the increment and decrement functions



