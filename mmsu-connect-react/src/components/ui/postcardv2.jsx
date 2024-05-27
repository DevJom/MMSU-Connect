import { Ellipsis, Heart, Text } from "lucide-react";
import { useState } from "react";

const Postcardv2 = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="w-96 bg-white shadow-xl rounded-lg overflow-hidden mb-4 w-[470px]">
      <div className="pt-4 pb-2 pl-4 pr-4 flex items-center">
        <div>
          <p className="font-bold text-lg">UserName</p>
          <p className="text-sm text-gray-500 ml-auto -mt-1">Date post</p>
        </div>

        <button className="focus:outline-none ml-auto mb-auto">
          <Ellipsis size={20} />
        </button>
      </div>

      <hr />

      <div
        className={`p-4 overflow-hidden relative ${
          expanded ? "h-auto pb-8" : "h-[190px] pb-0"
        }`}
      >
        <span className="text-base text-sm">
          Aktres na si Kathryn Bernardo, nag-share sa Instagram ng ilang photos
          mula sa 72nd FAMAS Awards. AVGG — our baby and a project so close to
          my heart, saad ni Kathryn sa post. Philo/Mercy, thank you for letting
          me step into your shoes! TEAM AVGG, this one’s for you! Maraming
          Salamat, Famas. Aktres na si Kathryn Bernardo, nag-share sa Instagram
          ng ilang photos mula sa 72nd FAMAS Awards. AVGG — our baby and a
          project so close to my heart, saad ni Kathryn sa post. Philo/Mercy,
          thank you for letting me step into your shoes! TEAM AVGG, this one’s
          for you! Maraming Salamat, Famas. Aktres na si Kathryn Bernardo,
          nag-share sa Instagram ng ilang photos mula sa 72nd FAMAS Awards. AVGG
          — our baby and a project so close to my heart, saad ni Kathryn sa
          post. Philo/Mercy, thank you for letting me step into your shoes! TEAM
          AVGG, this one’s for you! Maraming Salamat, Famas.
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-white to-white flex items-center justify-end">
          <button
            className="mr-4 hover:bg-gray-200 focus:outline-none text-gray-500"
            onClick={toggleExpand}
          >
            {expanded ? "see less" : "see more"}
          </button>
        </div>
      </div>

      <hr />

      <div className="flex justify-center p-4">
        <button className="w-1/2 mr-2 flex justify-center items-center hover:bg-gray-200 focus:outline-none">
          <Heart size={24} />
        </button>
        <button className="w-1/2 ml-2 flex justify-center items-center hover:bg-gray-200 focus:outline-none">
          <Text size={24} />
        </button>
      </div>
    </div>
  );
};

export default Postcardv2;
