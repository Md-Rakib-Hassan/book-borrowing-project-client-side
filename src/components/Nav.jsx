import { useState } from "react";
import Search from "./Search";

const Nav = () => {
    const [trigger, setTrigger] = useState(true);
    return (
        <div className="bg-[#18a0fb] h-20 relative ">
            <ul className=" md:flex text-white font-semibold justify-around items-center h-full hidden">
                <li>Home</li>
                <li>Browes</li>
                <li className="w-1/3"><Search></Search></li>
                <li>Feed</li>
                <li>Account</li>
                <li onClick={()=>setTrigger(!trigger)}>==</li>
            </ul>

            <ul className={`flex-col text-white font-semibold justify-center mx-auto text-center items-center right-0 absolute bg-[#18a0fbd2] min-w-[250px] ${trigger ? 'hidden':''}`}>
                <li>Login</li>
                <div className="">
                <li>Home</li>
                <li>Browes</li>
                <li>Feed</li>
                <li>Account</li>
                <li><Search ClassName={'rounded-none bg-gray-100'}></Search></li>
                </div>
                
            </ul>
            
        </div>
    );
};

export default Nav;