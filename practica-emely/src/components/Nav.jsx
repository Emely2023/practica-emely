import React from "react";

const Nav = () => {
    return (
        <nav className="bg-black text-white shadow-md p-4">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-semibold">My Hook UseState</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/Card" className="hover:text-gray-300">
                            Card
                        </a>
                    </li>
                    <li>
                        <a href="/Calculadora" className="hover:text-gray-300">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/Registro" className="hover:text-gray-300">
                            Registro de estudiantes
                        </a>
                    </li>
                    <li>
                        <a href="/ToDoList" className="hover:text-gray-300">
                            ToDoList
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;