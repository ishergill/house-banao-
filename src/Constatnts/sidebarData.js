import {
  dashboard,
  projects,
  projecttemplates,
  resourcemgt,
  tasks,
  timelog,
  users,
} from "../assets/Dashboard";

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