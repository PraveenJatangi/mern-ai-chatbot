import {Link} from 'react-router-dom';

export const NavigationLink=({to,className='',childern})=>{
    const defaultStyles='inline-block  px-3 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1  text-sm sm:text-base md:text-lg  rounded-md shadow-md transition ml-2';
    return(
        <Link to={to} className={`${defaultStyles} ${className}`}>
        {childern}
        </Link>
    )
}