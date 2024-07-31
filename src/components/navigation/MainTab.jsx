export function MainTab({ workspaceName, home=false, active=false }) {
    return (
        <div className={`hover:text-accent ${active && "bg-accent/20 text-accent"} 
        ${home && "text-[1.2rem] aspect-square"} transition duration-[0.4s] ease-in-out
        rounded-sm h-[80%] flex items-center justify-center px-3`}>
            {home ?
                <i className="fa-solid fa-house"></i> :
                workspaceName
            }
        </div>
    )
}