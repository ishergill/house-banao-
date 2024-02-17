import {totalrevenue,user} from '../assets/Dashboard';
import {projects, timelog} from '../assets/Sidebar';

const overviewData = [
    {
        id : 1,
        icon : totalrevenue,
        iconBg : `#D399E7`,
        title : `Total revenue`,
        value : `$5300498`,
        info : `12% increase from last month `,
    },
    {
        id : 2,
        icon : projects,
        iconBg : `#E89271`,
        title : `Projects`,
        value : `95/100`,
        info : `10% decrease from last month`,
    },
    {
        id : 3,
        icon : timelog,
        iconBg : `#71A0E4`,
        title : `Time spent`,
        value : `1022/1300 Hrs`,
        info : `8% increase from last month`,
    },
    {
        id : 4,
        icon : user,
        iconBg : `#F0C274`,
        title : `Resources`,
        value : `101/120`,
        info : `2% increase from last month`,
    },
]

export default overviewData;