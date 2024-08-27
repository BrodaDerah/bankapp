import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
<<<<<<< HEAD
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
=======
import Image from "next/image";

export default function RootLayout({
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
=======
  const loggedIn = { firstName: 'Chidera', lastName: 'Nnamani'}
  return (
   <main className="flex h-sceen w-full font-inter">
      <Sidebar user={loggedIn}/>
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
<<<<<<< HEAD
    </main>
=======
   </main>
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
  );
}
