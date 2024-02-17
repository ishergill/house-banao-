import dashboard from '../assets/Sidebar/dashboard.svg'
import  projects from '../assets/Sidebar/projects.svg'
import  projecttemplates from '../assets/Sidebar/projecttemplates.svg'
import  resourcemgt from '../assets/Sidebar/resourcemgt.svg'
import  tasks from '../assets/Sidebar/tasks.svg'
import  timelog from '../assets/Sidebar/timelog.svg'
import users from '../assets/Sidebar/timelog.svg'

const sidebarData = [
  {
    id: 1,
    icon: dashboard,
    title: `Dashboard`,
  },
  {
    id: 2,
    icon: projects,
    title: `Projects`,
  },
  {
    id: 3,
    icon: tasks,
    title: `Tasks`,
  },
  {
    id: 4,
    icon: timelog,
    title: `Time log`,
  },
  {
    id: 5,
    icon: resourcemgt,
    title: `Resource mgnt`,
  },
  {
    id: 6,
    icon: users,
    title: `Users`,
  },
  {
    id: 7,
    icon: projecttemplates,
    title: `Project template`,
  },
];

export default sidebarData;