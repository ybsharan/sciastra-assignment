import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-white flex h-20 w-full items-center justify-between p-3 px-12 shadow-md'>
      <a href='/' className='ml-7'>
        <h1 className=' text-2xl font-semibold font-serif cursor-pointer'>
          SciAstra
        </h1>
      </a>
      <ul className='flex p-3 mr-28'>
        <li className='cursor-pointer p-2 mx-2 text-base font-medium hover:bg-slate-100 hover:rounded-md '>
          <Link to='/'>Home</Link>
        </li>
        <li className='cursor-pointer p-2 mx-2 text-base font-medium hover:bg-slate-100 hover:rounded-md '>
          <Link to='/about'>About</Link>
        </li>
        <li className='cursor-pointer p-2 mx-2 text-base font-medium hover:bg-slate-100 hover:rounded-md'>
          <Link to='/team'>Team</Link>
        </li>
        <li className='cursor-pointer p-2 mx-2 text-base font-medium hover:bg-slate-100 hover:rounded-md'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
