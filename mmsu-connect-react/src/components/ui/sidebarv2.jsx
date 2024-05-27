import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Sidebarv2 = () => {
  return (
    <Disclosure as="nav" className="bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 shadow-lg z-50">
      {({ open }) => (
        <>
          <div className="px-4 py-2 flex items-center justify-between">
            <span className="text-xl font-bold">Sidebar</span>
            <Disclosure.Button className="text-white">
              {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="pt-2">
            <ul className="space-y-2">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  Settings
                </a>
              </li>
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Sidebarv2;
