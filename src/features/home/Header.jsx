import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../app/cartSlice.js";


function Home() {
    const [openCart, setOpenCart] = useState(false);
    const count = useSelector((state) => state.cart.count);
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    return (
        <>
            <nav className="bg-white shadow-md h-17.5 px-10 flex items-center justify-between relative">

                <h1 className="text-3xl font-bold text-gray-800">
                    ShopX
                </h1>

                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li>
                        <a href="#" className="hover:text-blue-500 duration-300">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-blue-500 duration-300">
                            Products
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-blue-500 duration-300">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-blue-500 duration-300">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* CART */}
                <div className="relative">

                    <button
                        onClick={() => setOpenCart(!openCart)}
                        className="relative cursor-pointer"
                    >

                        <ShoppingCart className="w-7 h-7 text-gray-800" />

                        {/* CART COUNT */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                            {count}
                        </span>

                    </button>

                    {/* CART BOX */}
                    {openCart && (
                        <div className="absolute top-14 right-0 w-[320px] bg-white rounded-xl shadow-xl p-4 z-50">

                            <h2 className="text-xl font-bold mb-4">
                                Cart Items
                            </h2>

                            {/* ITEM 1 */}
                            {products.length === 0 ? (
                                <div className="text-gray-500 h-20 flex items-center justify-center">
                                    Your cart is empty.
                                </div>
                            ) : (
                                products.map((product) => {
                                    return (
                                        <div key={product.id} className="flex items-center gap-3 border-b pb-3 mb-3">

                                            <img
                                                src={product.images?.[0] || ""}
                                                alt=""
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />

                                            <div className="flex-1">
                                                <h3 className="font-semibold">
                                                    {product.title}
                                                </h3>

                                                <p className="text-gray-500 text-sm">
                                                    ${product.price}
                                                </p>
                                            </div>
                                            <div >
                                                quantity: <span className="text-gray-500">{product.quantity}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            )}

                            {/* BUTTON */}
                            <button className="w-full bg-blue-500 hover:bg-blue-600 duration-300 text-white py-3 rounded-lg font-medium"
                                onClick={() => dispatch(checkout())}
                            >
                                Checkout
                            </button>

                        </div>
                    )}

                </div>

            </nav>
        </>
    );
}

export default Home;