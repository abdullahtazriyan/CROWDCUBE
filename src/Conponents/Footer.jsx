const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold text-primary">Crowdcube</h2>
          <p className="mt-2 text-sm text-gray-500">
            Empowering dreams through crowdfunding. A place where ideas meet support.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="link link-hover">Home</a></li>
            <li><a href="/campaigns" className="link link-hover">All Campaigns</a></li>
            <li><a href="/addCampaign" className="link link-hover">Add Campaign</a></li>
            <li><a href="/myDonations" className="link link-hover">My Donations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2">Contact Us</h3>
          <p>Email: support@crowdcube.com</p>
          <p>Phone: +880-1234-567890</p>
          <p>Address: Chittagoan, Bangladesh</p>
        </div>

      </div>

      <div className="text-center py-4 bg-base-300 text-sm text-gray-500">
        © {new Date().getFullYear()} Crowdcube. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;