import { Button } from "../components/ui/Button.jsx";
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className='flex h-full w-full items-center justify-center'>
            <div className='flex flex-col gap-[100px] w-[800px] border-text
            rounded-c border-[0.5px] p-[100px] box-border bg-background'>
                <h1 className='text-6xl'>
                    Something went wrong!
                </h1>
                <div className='flex flex-col gap-4'>
                    <span className='text-error'>
                        {error.statusText || error.message}
                    </span>
                    <span>We sincerely apologise for the inconvenience</span>
                    <span>Click the button bellow to restart the app and/or to report the bug</span>
                </div>
                <div className='w-full justify-between flex text-[1.1rem]'>
                    <Button type='gray-ghost' onClick={() => window.history.back()}>
                        Go back!
                    </Button>
                    <Button type='destructive'>
                        Report!
                    </Button>
                </div>
            </div>
        </div>
    )
}