import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar pb-8">
        <div className="pt-4">
            <ul className="flex justify-between align-middle">
                <h1 className="flex-1 text-2xl italic font-bold ml-8">Bien Blogs</h1>
                <li className="">Home</li>
                <li className="">Blogs</li>
                <li className="">About</li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
