export interface ToastContainerProps {
    variant: "plain" | "soft" | "solid" | "outlined";
    color: string;
    size: "sm" | "md" | "lg";
 }
 export interface ToastProps extends ToastContainerProps {
    autoHideDuration:number;
    onClose:()=>void;
 }
 export type colorType="solid"|"soft"|"text"|"border"|"plain";