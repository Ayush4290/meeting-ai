import { Children } from "react";

interface Props{
    children:React.ReactNode;
}


const layout=({children}:Props)=>{
    return(
        <>
        <div className="h-screen bg-black">
            {children}
        </div>
        </>
    )
}