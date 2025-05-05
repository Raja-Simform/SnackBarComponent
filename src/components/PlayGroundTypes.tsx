export  interface ToastData{
    variant: "plain" | "outlined" | "soft" | "solid";
    color: "blue" | "gray" | "red" | "green" | "yellow" | "white";
    size: "sm" | "md" | "lg";
    autoHideDuration: number;
}
export  interface PlayGroundProps{
    toastData:ToastData;
    setToastData:React.Dispatch<React.SetStateAction<ToastData>>
}  