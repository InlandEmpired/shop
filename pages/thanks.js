import Link from "next/link";

export default function Thanks(){
    return <div className="grid h-screen place-items-center">
        <div className="grid gap-4 grid-cols-1">
        <h1 className="text-center text-2xl font-bold text-emerald-500 ">Multumesc pentru cumparare</h1>
        <Link href="/">
            <button  className="bg-emerald-500 px-5 py-2 rounded-xl
        font-bold text-white w-full my-4 shadow-emerald-300 
        shadow-lg text-center">Reveniti acasa</button></Link>
        </div>
    </div>
}