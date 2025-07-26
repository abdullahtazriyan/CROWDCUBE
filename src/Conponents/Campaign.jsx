import { useState } from "react";
import CampaignCard from "./CampaignCard";

const Campaign = () => {

    const [campaigns, setCampaigns] = useState([])

    fetch('http://localhost:1000/campaigns')
    .then(res=> res.json())
    .then(data => {
        setCampaigns(data)
    })

    console.log(campaigns)
    return (
        <div className="grid-cols-3 grid">
            {
                campaigns.map(campaign => <CampaignCard campaign={campaign}></CampaignCard>)
            }
        </div >
    );
};

export default Campaign;