import { Link } from "react-router-dom";
import { BiHomeAlt, BiSolidZap } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegCommentAlt,FaRegSun,FaRegBell } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {

  const navbar = <>
    <li className="text-2xl"><Link to='/login'><BiHomeAlt></BiHomeAlt></Link></li>
    <li className="text-2xl"><Link><BiSolidZap></BiSolidZap></Link></li>
    <li className="text-2xl"><Link><GoVideo></GoVideo></Link></li>
    <li className="text-2xl"><Link><FaRegUser></FaRegUser></Link></li>
    <li className="text-2xl"><Link><BiShoppingBag></BiShoppingBag></Link></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navbar}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold me-4">Social <span className="text-blue-700">Platforms</span></Link>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          {navbar}
        </ul>
      </div>
      <div className="navbar-end">
       <div className="flex gap-6 text-2xl me-4 text-blue-600">
       <FaRegBell className="cursor-pointer"></FaRegBell>
        <FaRegCommentAlt className="cursor-pointer"></FaRegCommentAlt>
        <FaRegSun className="cursor-pointer"></FaRegSun>
       </div>
        <Link to='/login' className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;