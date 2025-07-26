
const AddCampaign = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const newCampaign = {
            title: form.title.value,
            description: form.description.value,
            goalAmount: form.goalAmount.value,
            image: form.image.value,
        };

        fetch('http://localhost:1000/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        // form.reset()
    };
    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Add New Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" type="text" placeholder="Campaign Title" className="input input-bordered w-full" required />
                <input name="goalAmount" type="number" placeholder="Goal Amount" className="input input-bordered w-full" required />
                <input name="image" type="text" placeholder="Image URL" className="input input-bordered w-full" required />
                <textarea name="description" placeholder="Campaign Description" className="textarea textarea-bordered w-full" required></textarea>
                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    );
};

export default AddCampaign;