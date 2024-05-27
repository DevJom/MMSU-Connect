import { EllipsisVertical, Heart, Text } from "lucide-react";

const Postcardv2 = () => {
  return (
    <div className=" bg-white shadow-xl rounded-lg overflow-hidden mb-4 w-[470px]">
      <div className="p-4 flex items-center">
        <p className="font-bold text-lg">UserName</p>
        <p className="text-sm text-gray-500 ml-auto">Date post</p>
        <button className="ml-2 focus:outline-none">
          <EllipsisVertical size={20} />
        </button>
      </div>

      <hr />

      <div className="p-4">
        <p className="text-base">
          Aktres na si Kathryn Bernardo, nag-share sa Instagram ng ilang photos
          mula sa 72nd FAMAS Awards. AVGG — our baby and a project so close to
          my heart, saad ni Kathryn sa post. Philo/Mercy, thank you for letting
          me step into your shoes! TEAM AVGG, this one’s for you! Maraming
          Salamat, Famas.
        </p>
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
