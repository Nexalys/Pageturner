import { useLocation, Link } from "react-router-dom";
import { Icon } from '../ui/Icon';
import { useAppState } from "../../providers/AppStateProvider";

export function MainTab({ workspaceName, to }) {
    const { removePath } = useAppState((state) => state);

    const handleClose = (to) => {
        removePath(to.split('/').pop());
    }
    const path = useLocation().pathname;

    const active = path === to;
    return (
        <Link to={to}>
            <div className={`hover:text-accent relative ${active && "bg-trans-gray text-accent"}
            h-fit w-fit px-5 py-3 rounded-full flex items-center justify-center gap-4 group`}>
                {workspaceName}
                <div className='text-trans-gray hover:text-text-sc'>
                    <Icon onClick={() => handleClose(to)} name='X'/>
                </div>
            </div>
        </Link>
    )
}