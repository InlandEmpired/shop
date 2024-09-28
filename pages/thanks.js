import Link from "next/link";

export default function Thanks(){
    return <div className="grid h-screen place-items-center">
        <div className="grid gap-4 grid-cols-1">
        <h1 className="text-center text-2xl font-bold text-orange-500 ">Благодарим за приобретение!</h1>
        <Link href="/">
            <button  className="bg-orange-500 px-5 py-2 rounded-xl
        font-bold text-white w-full my-4 shadow-orange-300
        shadow-lg text-center">Вернуться на главную страницу</button></Link>
        </div>
    </div>
}