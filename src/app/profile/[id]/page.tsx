
export default function dynamicRoute({params}:any) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <h1>Profile page</h1>
            <h2 className="p-3 bg-green-300 border-rounded text-black">{params.id}</h2>
        </div>

    )
}