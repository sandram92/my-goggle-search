import React from "react";
import { Link } from "react-router-dom"
import Search from "./Search";

const Navbar = ({setDarkTheme, darkTheme}) => {
    return ( 
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-300">
            <div className="flex justify-between items-center space-x-5 w-screen mb-4">
                <Link to="/">
                    <p className="text-2xl bg-blue-500 dark:bg-gray-500 font-bold text-white py-1 px-2 rounded dar:bg-gray-500 dark:text-gray-900">
                        Goggle 🔎 
                    </p>
                </Link>
                <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-gray border rounded-full pl-4 pr-5 py-2 hover:shadow-lg">
                    {darkTheme ? '🌙 Dark' : '💡 Light'}
                </button>
            </div>
            <Search />
        </div>
     );
}
 
export default Navbar;