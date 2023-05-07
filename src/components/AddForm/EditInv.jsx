import React, { useState } from 'react';


export default function Edit({isOpen, closeEdit}) {

    const [images, setImages] = useState([]);

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

   return(
    <>
    <div className={`Edit ${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center`}>
        <div className="m-auto max-h-screen overflow-scroll hover:overflow-scroll h-auto bg-white p-10 w-[50%] relative">
            <button onClick={closeEdit} className="absolute top-0 right-0 bg-red-500 text-white py-2 px-4 mt-4 mr-10 rounded-md hover:bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="my-8 min-h-screen text-left">
                <h1 className="text-2xl font-bold mb-10 text-[2em]">Edit</h1>

                <label className="my-[1em] text-[1.2em] font-bold">
                    Category*
                </label>
                <select
                    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-8"
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

                <label className="my-[1em] text-[1.2em] font-bold">
                    Listing title*
                </label>
                <input
                    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-8"
                    type="text"
                    placeholder="Name of the tool"
                />
                <label className="my-[1em] text-[1.2em] font-bold">
                    Select listing type*
                </label>
                <div className="flex justify-start mb-8">
                    <label className="mr-4">
                        <input
                            type="radio"
                            value="Perweek"
                            className="mr-2"
                        />
                        Price Per Week
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="PerDay"
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
                />

                <label className="my-[1em] text-[1.2em] font-bold">
                    Delivery Method
                </label>
                <select
                    className="w-full border border-gray-300 rounded-md py-3 px-4 mb-8"
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
                ></textarea>
                <label className="my-[1em] text-[1.2em] font-bold">
                    Listing Method
                </label>
                <div className="flex justify-start mb-8">
                    <label className="mr-4">
                        <input
                            type="radio"
                            value="Rent"
                            className="mr-2"
                        />
                        Rent
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Sale"
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

                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[1.3em]"
                >
                    Change
                </button>


            </div>

        </div>
    </div>
    </>
)}

