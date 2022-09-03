import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
        { url: '/search', text: '🔎 All'},
        { url: '/news', text: '📰 News'},
        { url: '/image', text: '📸 Image'}, 
        { url: '/video', text: '📺 Video'},
    ]

const Links = () => {
    return   ( 
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({url, text}) => (
                    <NavLink to={url} activeclassname="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"className="m-2 hover:underline decoration-blue-500 pb-4 dark:decoration-gray-500" >
                        {text}
                    </NavLink>
            ))}
        </div>

     );
}
 
export default Links;