import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function Header () {
    const { status } = useSession();

    let bool ;
    if(status === "authenticated"){
        bool = true;
    }else{
        bool = false
    }
  console.log(bool)


        return (<header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div class="flex items-center lg:order-2">
                    <Link href="/auth/login" className={`text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ${bool && "hidden"}`} >Log in</Link>
                    <button className={`text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ${bool || "hidden"}`} onClick={signOut}>Log out</button>
                    <Link href="/profile" className={`text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ${bool || "hidden"}`}>Profile</Link>
                    <Link href="/update" className={`text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ${bool || "hidden"}`}>setting</Link>
                </div>
            </div>
        </nav>
    </header>);
}