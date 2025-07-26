import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const DetailsCampaign = () => {
    const { user } = useContext(AuthContext)

    const [raisedAmount, setRaisedAmount] = useState(null)
    const [showModal, setShowModal] = useState(false);

    const data = useLoaderData()
    // console.log(user.email)
    // console.log(data)

    let { title, description, goalAmount, image, createdBy } = data;
    const progress = Math.min((raisedAmount / goalAmount) * 100, 100).toFixed(2);


    const handleDonateSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const amount = form.amount.value;

        const finalAmount = parseInt(amount)

        console.log(amount, name, email)

        setRaisedAmount(raisedAmount + finalAmount)
        console.log(raisedAmount)

        // console.log("Donation info:", donationInfo);
        alert(`Thank you for donating ৳!`);
        setShowModal(false);

    };

    console.log(raisedAmount)

    return (
        <div>
            <div><div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-xl">
                <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl mb-6" />
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-sm text-gray-500 mb-4">
                    Created by: <span className="font-medium">{createdBy?.name || 'Unknown'}</span>
                </p>
                <p className="text-gray-700 mb-6">{description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                        <span>Raised: ৳{raisedAmount}</span>
                        <span>Goal: ৳{goalAmount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                            className="bg-green-500 h-4 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1 ">  {progress}% funded</p>
                </div>

                <button onClick={() => setShowModal(true)} className="mt-4 w-full bg-blue-600    text-white py-2 rounded-lg hover:bg-blue-700     transition">
                    Donate Now
                </button>
            </div>
            </div>


            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Donate to "{title}"</h2>
                        <form onSubmit={handleDonateSubmit} className="space-y-4">
                            <input
                                name="name"
                                type="text"
                                defaultValue={user?.displayName}
                                unselectable=''
                                required
                                readOnly
                                className="w-full border p-2 rounded"
                            // onChange={handleChange}
                            />
                            <input
                                name="email"
                                type="email"
                                defaultValue={user?.email}
                                required
                                readOnly
                                className="w-full border p-2 rounded"
                            // onChange={handleChange}
                            />
                            <input
                                name="amount"
                                type="number"
                                placeholder="Amount in ৳"
                                min="10"
                                required
                                className="w-full border p-2 rounded"
                            // onChange={handleChange}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Donate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsCampaign;