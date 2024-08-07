import { useAppState } from "@/providers/AppStateProvider";


export function generateStaticParams() {
    let params = [];

    for (let num = 1000; num < 4000; num++) {
        params.push(num);
    }

    return params.map((param) => ({
        id: param.toString()
    }));
}

export default function Page({ params }) {
    const state = useAppState((state) => state);
    console.log(state);

    return (
      <div className=''>
          {params.id}
      </div>
    )
}