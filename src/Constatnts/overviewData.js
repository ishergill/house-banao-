import {totalrevenue,user} from '../assets/Dashboard';
import {projects, timelog} from '../assets/Sidebar';

const overviewData = [
    {
        id : 1,
        icon : totalrevenue,
        title : `Total revenue`,
        value : `$5300498`,
        info : `12% increase from last month `,
    },
    {
        id : 2,
        icon : projects,
        title : `Projects`,
        value : `95/100`,
        info : `10% decrease from last month`,
    },
    {
        id : 3,
        icon : timelog,
        title : `Time spent`,
        value : `1022/1300 Hrs`,
        info : `8% increase from last month`,
    },
    {
        id : 4,
        icon : user,
        title : `Resources`,
        value : `101/120`,
        info : `2% increase from last month`,
    },
]

export default overviewData;