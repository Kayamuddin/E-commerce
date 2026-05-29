import { useDispatch } from "react-redux";
import { addItem } from "../../app/slice.js";

function Body() {
    const dispatch = useDispatch();

    const products = [
        {
            id: 1,
            name: "Headphones",
            price: 59,
            image: "https://picsum.photos/300?1",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 99,
            image: "https://picsum.photos/300?2",
        },
        {
            id: 3,
            name: "Laptop",
            price: 799,
            image: "https://picsum.photos/300?3",
        },
        {
            id: 4,
            name: "Gaming Mouse",
            price: 49,
            image: "https://picsum.photos/300?4",
        },
        {
            id: 5,
            name: "Keyboard",
            price: 69,
            image: "https://picsum.photos/300?5",
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            price: 39,
            image: "https://picsum.photos/300?6",
        },
    ];

    return (
        <div className="min-h-full bg-gray-100 p-10">

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-gray-800 mb-10">
                Featured Products
            </h1>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {products.map((product) => (

                    <div
                        key={product.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl duration-300"
                    >

                        {/* IMAGE */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-62.5 object-cover"
                        />

                        {/* CONTENT */}
                        <div className="p-5">

                            <h2 className="text-2xl font-bold text-gray-800">
                                {product.name}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Premium quality product for daily use.
                            </p>

                            {/* PRICE + BUTTON */}
                            <div className="flex items-center justify-between mt-5">

                                <span className="text-2xl font-bold text-blue-600">
                                    ${product.price}
                                </span>

                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg duration-300"
                                    onClick={() => dispatch(addItem(product))}
                                >
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>
        </div>
    );
}

export default Body;