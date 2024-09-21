import Homepage from './Home';
import DashboardsWSP from "./Dashboards-WSP";
import ErrorPage from "./Error";
import Open, {OpenChildren} from "./open/Open.jsx";
import Workspace, { workspaceLoader } from './Workspace';
import { PDFViewer } from "../components/pdf/pdf-viewer/PDFViewer.jsx";

const pages = {
    home: <Homepage/>,
    dashboard: <DashboardsWSP/>,
    error: <ErrorPage/>,
    open: <Open/>,
    OpenChildren,
    workspace: {
        element: <Workspace/>,
        errorElement: <ErrorPage/>,
        loader: workspaceLoader,
        children : [
            {
                path: '/workspaces/:id',
                element: <PDFViewer/>,
                loader: workspaceLoader
            }
        ]
    }
}

export default pages;