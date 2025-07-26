import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
    const { title, description, goalAmount, image, createdBy, _id } = campaign;
    console.log(_id)
    return (
        <div className="rounded-2xl shadow-md  bg-white p-4 max-w-sm hover:shadow-lg transition-all mt-12">
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>
            <p className="text-gray-800 font-semibold">Goal: ৳{goalAmount}</p>
            {createdBy && (
                <p className="text-xs text-gray-400 mt-1">Created by: {createdBy.name}</p>
            )}
            <div className=" flex gap-4">
                <button className="mt-4 w-full border py-2 rounded-lg  transition">
                     <Link to={`pages/campaign/${_id}`}>Details</Link>
                </button>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Donate Now
                </button>
            </div>
        </div>
    );
};


export default CampaignCard;