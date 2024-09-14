import Homepage from './Home';
import DashboardsWSP from "./Dashboards-WSP";
import ErrorPage from "./Error";
import Open from "./Open";
import Workspace, { workspaceLoader } from './Workspace';

const pages = {
    home: <Homepage/>,
    dashboard: <DashboardsWSP/>,
    error: <ErrorPage/>,
    open: <Open/>,
    workspace: {
        element: <Workspace/>,
        errorElement: <ErrorPage/>,
        loader: workspaceLoader
    }
}

export default pages;