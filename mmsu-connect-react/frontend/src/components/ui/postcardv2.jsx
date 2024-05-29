import { Delete, Edit, Ellipsis, Heart, Text } from "lucide-react"; 
import { useState } from "react";

const Postcardv2 = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="w-96 bg-white shadow-xl rounded-lg overflow-visible mb-4 w-[470px] relative">
        <div className="pt-4 pb-2 pl-4 pr-4 flex items-start justify-between">
          <div>
            <p className="font-bold text-lg">UserName</p>
            <p className="text-sm text-gray-500 -mt-1">Date post</p>
          </div>

          <div className="flex flex-col items-end">
            <details className="dropdown dropdown-top dropdown-end relative">
              <summary
                tabIndex={0}
                role="button"
                className="btn bg-transparent -pt-5 border-none focus:outline-none marker:hidden"
              >
                <Ellipsis size={20} />
              </summary>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute right-0"
              >
                <li>
                  <a>
                    <Edit size={15} /> <span className="text-sm">Edit</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Delete size={15} /> <span className="text-sm">Delete</span>
                  </a>
                </li>
              </ul>
            </details>
          </div>
        </div>

        <hr />

        <div
          className={`p-4 overflow-hidden relative ${
            expanded ? "h-auto pb-8" : "h-[190px] pb-0"
          }`}
        >
          <span className="text-base text-sm">
            <div className="flex justify-between">
              <p className="font-bold text-lg">Title</p>
              <p className="text-sm text-gray-500 mt-auto">Category</p>
            </div>
            Aktres na si Kathryn Bernardo, nag-share sa Instagram ng ilang
            photos mula sa 72nd FAMAS Awards. AVGG — our baby and a project so
            close to my heart, saad ni Kathryn sa post. Philo/Mercy, thank you
            for letting me step into your shoes! TEAM AVGG, this one’s for you!
            Maraming Salamat, Famas. Aktres na si Kathryn Bernardo, nag-share sa
            Instagram ng ilang photos mula sa 72nd FAMAS Awards. AVGG — our baby
            and a project so close to my heart, saad ni Kathryn sa post.
            Philo/Mercy, thank you for letting me step into your shoes! TEAM
            AVGG, this one’s for you! Maraming Salamat, Famas. Aktres na si
            Kathryn Bernardo, nag-share sa Instagram ng ilang photos mula sa
            72nd FAMAS Awards. AVGG — our baby and a project so close to my
            heart, saad ni Kathryn sa post. Philo/Mercy, thank you for letting
            me step into your shoes! TEAM AVGG, this one’s for you! Maraming
            Salamat, Famas.
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-white to-white flex items-center justify-end">
            <button
              className="mr-4 bg-transparent hover:bg-gray-200 focus:outline-none text-gray-500"
              onClick={toggleExpand}
            >
              {expanded ? "see less" : "see more"}
            </button>
          </div>
        </div>

        <hr />

        <div className="flex justify-center p-4">
          <button className="w-1/2 mr-2 flex justify-center items-center bg-transparent hover:bg-gray-200 focus:outline-none">
            <Heart size={24} /> <span className="text-lg ml-2">2</span>
          </button>
          <label
            htmlFor="my_modal_8"
            className="w-1/2 ml-2 flex justify-center items-center bg-transparent hover:bg-gray-200 focus:outline-none cursor-pointer"
          >
            <Text size={24} />
          </label>
        </div>
      </div>

      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between p-2">
            <p className="font-bold text-lg">USERNAME</p>
            <p className="text-sm text-gray-500 mt-auto">DATEPOST</p>
          </div>

          <hr />

          <div className="p-2">
            <span className="text-base text-sm">
              <div className="flex justify-between">
                <p className="font-bold text-lg">Title</p>
                <p className="text-sm text-gray-500 mt-auto">Category</p>
              </div>
              Aktres na si Kathryn Bernardo, nag-share sa Instagram ng ilang
              photos mula sa 72nd FAMAS Awards. AVGG — our baby and a project so
              close to my heart, saad ni Kathryn sa post. Philo/Mercy, thank you
              for letting me step into your shoes! TEAM AVGG, this one’s for
              you! Maraming Salamat, Famas. Aktres na si Kathryn Bernardo,
              nag-share sa Instagram ng ilang photos mula sa 72nd FAMAS Awards.
              AVGG — our baby and a project so close to my heart, saad ni
              Kathryn sa post. Philo/Mercy, thank you for letting me step into
              your shoes! TEAM AVGG, this one’s for you! Maraming Salamat,
              Famas. Aktres na si Kathryn Bernardo, nag-share sa Instagram ng
              ilang photos mula sa 72nd FAMAS Awards. AVGG — our baby and a
              project so close to my heart, saad ni Kathryn sa post.
              Philo/Mercy, thank you for letting me step into your shoes! TEAM
              AVGG, this one’s for you! Maraming Salamat, Famas.
            </span>
          </div>

          <hr />

          <div className="p-2">
            <p>commets</p>
          </div>
        </div>

        {/* Close outside */}
        <label className="modal-backdrop" htmlFor="my_modal_8"></label>
      </div>
    </>
  );
};

export default Postcardv2;
