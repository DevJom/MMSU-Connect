import {
  Bell,
  CalendarSearch,
  CircleHelp,
  Flame,
  HandHeart,
  LayoutList,
  Lightbulb,
  LogOut,
  Settings2,
  Target,
  User2,
} from "lucide-react";
import Avatar from "./avatar";

const Sidebarv2 = () => {
  return (
    <div className="menu w-80 min-h-full bg-base-200">
      <div className="p-4">
        <a href="/profile" className="flex w-auto items-center space-x-2">
          {" "}
          <Avatar />
          <span className="font-bold">UsernameSession</span>
        </a>
      </div>

      <hr className="my-2" />

      <div className="p-4">
        <div className="flex w-auto items-center -ml-4">
          <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
            <li>
              <details open>
                <summary className="text-base">
                  <LayoutList size={20} /> Cathegory
                </summary>
                
                <ul>

                  <li>
                    <a
                      href="/about"
                      className="flex w-auto items-center pb-2 space-x-2"
                    >
                      <CircleHelp size={15} />{" "}
                      <span className="text-small">Suggestions</span>
                    </a>{" "}
                  </li>

                  <li>
                    <a
                      href="/about"
                      className="flex w-auto items-center pb-2 space-x-2"
                    >
                      <CircleHelp size={15} />{" "}
                      <span className="text-small">Concerns</span>
                    </a>{" "}
                  </li>

                  <li>
                    <a
                      href="/about"
                      className="flex w-auto items-center pb-2 space-x-2"
                    >
                      <CircleHelp size={15} />{" "}
                      <span className="text-small">Ideas</span>
                    </a>{" "}
                  </li>


                  <li>
                    <a
                      href="/about"
                      className="flex w-auto items-center pb-2 space-x-2"
                    >
                      <CircleHelp size={15} />{" "}
                      <span className="text-small">Important</span>
                    </a>{" "}
                  </li>

                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="hover:bg-gray-200">
          <a href="/topics" className="flex items-center pb-2 space-x-2">
            <Lightbulb size={20} /> <span className="text-base">Topics</span>
          </a>
        </div>
        <div className="hover:bg-gray-200">
          <a
            href="/trending"
            className="flex w-auto items-center pb-2 space-x-2 "
          >
            <Flame size={20} /> <span className="text-base">Trending</span>
          </a>{" "}
        </div>

        <div className="hover:bg-gray-200">
          {" "}
          <a
            href="/mostheart"
            className="flex w-auto items-center pb-2 space-x-2 "
          >
            <HandHeart size={20} />{" "}
            <span className="text-base">Most Heart</span>
          </a>
        </div>
      </div>

      <hr className="my-2" />
      <div className="p-4">
        <div className="hover:bg-gray-200">
          <a
            href="/anouncement"
            className="flex w-auto items-center pb-2 space-x-2 "
          >
            <Bell size={20} /> <span className="text-base">Announcements</span>
          </a>{" "}
        </div>

        <div className="hover:bg-gray-200">
          {" "}
          <a
            href="/events"
            className="flex w-auto items-center pb-2 space-x-2 "
          >
            <CalendarSearch size={20} />{" "}
            <span className="text-base">Events</span>
          </a>
        </div>

        <div className="hover:bg-gray-200">
          {" "}
          <a
            href="/challenges"
            className="flex w-auto items-center pb-2 space-x-2 "
          >
            <Target size={20} /> <span className="text-base">Challenges</span>
          </a>
        </div>
      </div>

      <hr className="my-2" />

      <div className="p-4">
        <div className="hover:bg-gray-200">
          <a href="/about" className="flex w-auto items-center pb-2 space-x-2">
            <CircleHelp size={20} /> <span className="text-base">About</span>
          </a>{" "}
        </div>

        <div className="hover:bg-gray-200">
          {" "}
          <a
            href="/developers"
            className="flex w-auto items-center pb-2 space-x-2 "
          >
            <User2 size={20} /> <span className="text-base">Developers</span>
          </a>
        </div>
      </div>

      <hr className="my-2" />

      <div className="p-4">
        <div className="hover:bg-gray-200">
          <a
            href="/setting"
            className="flex w-auto items-center pb-2 space-x-2"
          >
            <Settings2 size={20} /> <span className="text-base">Setting</span>
          </a>{" "}
        </div>

        <div className="hover:bg-gray-200">
          {" "}
          <a
            href="/logout"
            className="flex w-auto items-center pb-2 space-x-2 "
          >
            <LogOut size={20} /> <span className="text-base">Log-out</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebarv2;
