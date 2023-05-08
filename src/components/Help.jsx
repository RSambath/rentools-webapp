import React from 'react'
import 'react-datepicker/dist/react-datepicker.css';


function ItemInfo() {

    return (
        <div className='h-auto'>
            <h1 className='font-bold text-red-500 text-4xl w-[40%]'>Contact Us</h1>

            <div className=' m-auto mt-10 p-10 bg-gray-200 rounded-md'>
                <label className='font-bold'>Message to RenTool teams</label>
                <textarea
                    className="w-full border border-red-300 rounded-md py-2 px-4 resize-none"
                    rows="4"
                    placeholder="Detail description"
                ></textarea>
                <div className='flex justify-end'>
                    <button
                        className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[1.3em]"
                    >
                        Send
                    </button>
                </div>
            </div>

            <div className='w-[90%] m-auto mt-10'>
                <h2 className='text-red-400 text-[1.5em] mb-5'>Community Guidelines:</h2>
                <ol className='ml-10 text-[1.2em] [&>li]:mb-5'>
                    <li>1. Respect all other members and do not send spam, offensive, or threatening messages, leave comments, or engage in any other form of offensive communication.</li>
                    <li>2. Only create listings for goods you own, are authorized to rent, and are in safe condition to use. (It is not permitted to list any Dangerous Goods, such as Chemicals, Alcohols, Tobacco or Weapons)</li>
                    <li>3. Try to answer all messages in a timely fashion.</li>
                    <li>4. The RenTool is a third-party marketplace and by using it, you must also comply with country laws, regulations, safety measures, and/or booking agreement(s) by listing owners that are applicable.</li>
                    <li>5. We do not allow contact information or external links (URL's) on listings and/or in images that are added to listings. This includes emails, websites, and phone numbers.</li>
                    <li>6. For the safety and security of our community, we do not allow contact information to be sent through our messaging prior to a confirmed booking. Sending messages containing your personal information, contact information, or taking transactions off our platform is against our policies and can result in being removed from our community.</li>
                </ol>
            </div>

        </div>
    );
}

export default ItemInfo;