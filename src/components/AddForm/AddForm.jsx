import React, { useState } from "react";

const AddItemForm = ({ isOpen, closeModal }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [toolCategory, setToolCategory] = useState("");
    const [rentOrSale, setRentOrSale] = useState("");
    const [date, setDatePay] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [description, setDescription] = useState("");
    const [condition, setCondition] = useState("");
    const [images, setImages] = useState([]);

    const toolData = {
        toolName: name,
        category: toolCategory,
        image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        rentalPrice: price,
        description: description,
        email: localStorage.getItem("email"),
        location: 'Seattle'
    };
    const createTool = async (toolData) => {
        console.log("toolData >> " + toolData);

        console.log("JSON.stringify(toolData)   >> " + JSON.stringify(toolData));

        try {
            const response = await fetch('http://localhost:8080/api/v1/tools/createTool', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toolData)
            });
            const data = await response.json();
            console.log("response>> " + data);
            // Display confirmation popup
            if (response.status === 201) { // Check if the response status code is 200
                // Display confirmation popup
                const confirmation = window.confirm('Tool created successfully! Do you want to continue creating tools?');
                if (confirmation) {
                    closeModal();
                    window.location.reload();

                }
            } return data;
        } catch (error) {
            console.error(error);
        }
    };

    function handleImageUpload(event) {
        const files = event.target.files;
        const newImages = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (file.type === "image/jpeg" || file.type === "image/png") {
                const imageUrl = URL.createObjectURL(file);
                newImages.push(imageUrl);
            }
        }

        setImages([...images, ...newImages]);
    }

    function handleImageDelete(index) {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSubmit = () => {
        // Handle form submission, e.g. send data to backend
        console.log("Form submitted!");
        console.log("Tool Category:", toolCategory);
        console.log("Rent or Sale:", rentOrSale);
        console.log("Price:", price);
        console.log("Name:", name);
        console.log("Delivery Method:", deliveryMethod);
        console.log("Description:", description);
        console.log("Condition:", condition);
        console.log("images: ", images)
        createTool(toolData);

    };

    return (
        <div className={`AddItemForm ${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center`}>
            <div className="m-auto max-h-screen overflow-scroll hover:overflow-scroll h-auto bg-white p-10 w-[50%] relative">
                {currentPage === 1 && (
                    <div className="my-8 min-h-screen">
                        <h1 className="text-2xl font-bold mb-10 text-[2em]">Instructions</h1>

                        <div className="space-y-10 mb-10 text-[1.3em]">
                            <p>Let's get ready to showcase your rental. In order for you to get as many rentals a possible, all listings are required to have a few things in order to ensure the best experience for potential renters.</p>

                            <ol className="ml-10 space-y-10">
                                <li> 1. Please ensure that you have at least 3 photos (minimum required amount) but 7 is optimal of your item.</li>

                                <li> 2. Your equipment should be cleaned, properly maintained and in prime condition prior to renting out and taking your photos.</li>

                                <li> 3. For the photos, the higher quality image, the more rentals you will get.</li>

                                <li> 4. Please take your photos with a bright background and so you can see the contrast of your item.</li>

                                <li> 5. Take your photos with a landscape/horizontal format rather than vertical. Photos of your listing page and search results are display in landscape format.</li>
                            </ol>

                            <p>For more tips of taking high quality images, please read this. After you have listed your item, a member from FriendWithA will review your item before it goes live.</p>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded text-[1.3em]"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {currentPage === 2 && (
                    <div className="my-8 min-h-screen">
                        <h1 className="text-2xl font-bold mb-10 text-[2em]">Step 1: Select Tool Category & Location</h1>
                        <select
                            className="w-full border border-gray-300 rounded-md py-3 px-4 text-[1.5em] mb-10"
                            value={toolCategory}
                            onChange={(e) => setToolCategory(e.target.value)}
                        >
                            <option className="bg-gray-100 hover:bg-gray-200" value="">Select Category</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Power Tools">Power Tools</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Hand Tools">Hand Tools</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Gardening Tools">Gardening Tools</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Electronics & Phtotography">Electronics & Phtotography</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Gaming Equipments">Gaming Equipments</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Art & Crafts">Art and Crafts</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Toy & Model">Toy & Model</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Others">Others</option>
                        </select>
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[1.3em]"
                                onClick={handlePrevious}
                            >
                                Previous
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[1.3em]" onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )}

                {currentPage === 3 && (
                    <div className="my-8">
                        <h1 className="text-2xl font-bold mb-10 text-[2em]">Step 2: Fill in Information</h1>
                        <label className="my-[1em] text-[1.2em] font-bold">
                            Listing title*
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-8"
                            type="text"
                            placeholder="Name of the tool"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className="my-[1em] text-[1.2em] font-bold">
                            Select listing type*
                        </label>
                        <div className="flex justify-start mb-8">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    value="Perweek"
                                    checked={date === "Perweek"}
                                    onChange={(e) => setDatePay(e.target.value)}
                                    className="mr-2"
                                />
                                Price Per Week
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="PerDay"
                                    checked={date === "PerDay"}
                                    onChange={(e) => setDatePay(e.target.value)}
                                    className="mr-2"
                                />
                                Price Per Day
                            </label>
                        </div>
                        <label className="my-[1em] text-[1.2em] font-bold">
                            Set Price*
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-8"
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <label className="my-[1em] text-[1.2em] font-bold">
                            Delivery Method
                        </label>
                        <select
                            className="w-full border border-gray-300 rounded-md py-3 px-4 mb-8"
                            value={deliveryMethod}
                            onChange={(e) => setDeliveryMethod(e.target.value)}
                        >
                            <option className="bg-gray-100 hover:bg-gray-200" value="">Select Delivery Method</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Pickup">Pickup</option>
                            <option className="bg-gray-100 hover:bg-gray-200" value="Delivery">Delivery</option>
                        </select>
                        <label className="my-[1em] text-[1.2em] font-bold">
                            Description*
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-8 resize-none"
                            rows="4"
                            placeholder="Detail description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label className="my-[1em] text-[1.2em] font-bold">
                            Listing Method
                        </label>
                        <div className="flex justify-start mb-8">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    value="Rent"
                                    checked={rentOrSale === "Rent"}
                                    onChange={(e) => setRentOrSale(e.target.value)}
                                    className="mr-2"
                                />
                                Rent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Sale"
                                    checked={rentOrSale === "Sale"}
                                    onChange={(e) => setRentOrSale(e.target.value)}
                                    className="mr-2"
                                />
                                Sale
                            </label>
                        </div>
                        <label className="my-[1em] text-[1.2em] font-bold">
                            Condition
                        </label>
                        <select
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-8"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        >
                            <option value="">Select Condition</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                            <option value="Refurbished">Refurbished</option>
                        </select>

                        <label className="my-[1em] text-[1.2em] font-bold">
                            input Images
                        </label>
                        <div className="mb-8">
                            {images.length < 4 && (
                                <input type="file" accept=".jpg,.jpeg,.png" onChange={handleImageUpload} />
                            )}
                            <div className="flex justify-center bg-gray-300 p-10 mt-10">
                                {images.map((image, index) => (
                                    <div key={image}>
                                        <img className="h-[20em] mr-10" src={image} alt="preview" />
                                        <button onClick={() => handleImageDelete(index)} className="text-red-500">Remove</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[1.3em]"
                                onClick={handlePrevious}
                            >
                                Previous
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[1.3em]"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
                <button className="absolute top-0 right-0 bg-red-500 text-white py-2 px-4 mt-4 mr-10 rounded-md hover:bg-red-600" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

        </div>
    )
};

export default AddItemForm;