import { Link } from "react-router-dom";
import { RiApps2AddLine, RiEdit2Line } from "react-icons/ri";
import { VscSymbolColor } from "react-icons/vsc";
const Navbar = () => {
  return (
    <div className="w-64 bg-[#427DC0] text-white p-4 flex-shrink-0">
      <h1 className="text-xl pl-5 font-bold mb-6">LOGOO</h1>
      <nav className="space-y-2">
        <Link to="/create-phone">
          <div className="flex pl-5">
            <div className="flex items-center">
              <RiApps2AddLine />
            </div>
            <p className="w-full text-left px-2 rounded">Create Phone</p>
          </div>
        </Link>
        <Link to="/manage-phone">
          <div className="flex mt-3 pl-5">
            <div className="flex items-center">
              <RiEdit2Line />
            </div>
            <p className="w-full text-left px-2 rounded">Manage Phone</p>
          </div>
        </Link>
        <Link to="/create-color">
          <div className="flex mt-3 pl-5">
            <div className="flex items-center">
          <VscSymbolColor />
            </div>
            <p className="w-full text-left px-2 rounded">Create Color</p>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
