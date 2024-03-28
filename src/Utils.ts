export const isEmpty = (arg:any) => {
   return (
    arg === undefined ||
    arg === null ||
    (typeof arg === "object" && Object.keys(arg).length === 0) ||
    (typeof arg === "string" && arg.trim().length === 0)
   );
}

