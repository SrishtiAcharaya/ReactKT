import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Router',
    path: '/router',
    icon: <AiIcons.AiFillSetting />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Hooks',
    path: '/hooks',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'useEffect',
        path: '/hooks/useEffect',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'useState',
        path: '/hooks/usestate',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'useContext',
        path: '/hooks/usecontext',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'useReducer',
        path: '/hooks/usereducer',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  // {
  //   title: 'Rules',
  //   path: '/rules',
  //   icon: <IoIcons.IoIosPaper />,
  // },
  // {
  //   title: 'CustomHooks',
  //   path: '/customhooks',
  //   icon: <IoIcons.IoMdHelpCircle />
  // }
];