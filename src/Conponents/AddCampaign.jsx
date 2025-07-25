
const AddCampaign = () => {

    const handleSubmit = e => {
        e.preventDefault();

    };
    return (
        <div className="max-w-xl mx-auto mb-8 mt-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-5 text-center">Add New Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Campaign Title"
                    className="input input-bordered w-full"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Short Description"
                    className="textarea textarea-bordered w-full"
                    required
                />
                <input
                    type="number"
                    name="goalAmount"
                    placeholder="Goal Amount (৳)"
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    required
                />
                <button type="submit" className="btn btn-primary w-full">
                    Add Campaign
                </button>
            </form>
        </div>
    );
};

export default AddCampaign;