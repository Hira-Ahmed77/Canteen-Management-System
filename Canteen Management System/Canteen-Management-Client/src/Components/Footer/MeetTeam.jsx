import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";

const MeetTeam = () => {
  const Teams = [
    {
      name: "Mushfiqur Rahman",
      designation: "Team Leader",
      image:
        "https://i.ibb.co/NCVQm6w/309200086-180208587837290-7034263439352588256-n.jpg",
    },
    {
      name: "Fuyaduz Shihab",
      designation: "Team Member",
      image:
        "https://i.ibb.co/HHQRdTG/f03188c9-b21a-4ec2-a17f-562a4ac28988.jpg",
    },
    {
      name: "Aliful Hoque Naeem",
      designation: "Team Member",
      image:
        "https://i.ibb.co/GtZ7YDr/Profile.png",
    },
  ];

  return (
    <div>
      <div className="lg:px-24 md:px-8 px-5 ">
        <h3 className="mt-20 text-center text-5xl font-bold py-10 ">
          <span className="text-[#ff9f0d]">Ou</span>r Amazing People
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-10 mx-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {Teams.map((Team, index) => (
            <div
              key={index}
              className="w-80 p-6 rounded-lg bg-base-200 hover:bg-[#81d4fa]"
            >
              <div className="flex justify-center">
                <h2>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={Team.image} />
                    </div>
                  </div>
                </h2>
              </div>
              <div className="">
                <h2 className="mb-2 mt-2 text-xl font-semibold flex justify-center">
                  {Team.name}
                </h2>
                <p className="text-base dark:text-gray-400 flex justify-center text-center">
                  {Team.designation}
                </p>
                <p className="text-base mt-6 dark:text-gray-400 flex justify-center text-center italic">
                  {Team.description}
                </p>
                <div className="text-base mt-6 dark:text-gray-400 flex justify-center text-center italic">
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-2xl hover:scale-150"></FaTwitter>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://youtube.com/"
                      target="_blank"
                    >
                      <FaYoutube className="text-2xl hover:scale-150"></FaYoutube>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://facebook.com/"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl hover:scale-150"></FaFacebook>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl hover:scale-150"></FaInstagramSquare>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
