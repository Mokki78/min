import { Dispatch, SetStateAction } from "react";

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CustomHamburger = ({ isOpen, setIsOpen}: Props) => {
    const genericHamburgerLine = `h-0.5 w-8 my-0.5 rounded-full bg-black transition ease-in-out duration-300 cursor-pointer`;


    return (
        <>
        <button
        className="flex flex-col h-12 w-12 justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        >
            <div
            className={`${genericHamburgerLine} ${
                isOpen
                ? "rotate-45 translate-y-2.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
           />
           <div
           className={`${genericHamburgerLine} ${
               isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
           />
           <div
           className={`${genericHamburgerLine} ${
               isOpen 
               ? "-rotate-45 -translate-y-2.5 opacity-50 group-hover:opacity-100"
               : "opacity-50 group-hover:opacity-100"
             }`}
           />
           </button>
            </>
         );
        }


        export default CustomHamburger;