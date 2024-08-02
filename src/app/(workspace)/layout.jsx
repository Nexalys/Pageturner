import { Sora } from "next/font/google";

import { Draggable } from "@/components/Draggable";
import { ThemeProvider } from "next-themes";
import { MainNavbar } from "@/components/navigation/MainNavbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HomeSidebar } from "@/components/dashboard/Sidebar";

import '../globals.css';
import "../../../public/fontawesome/css/fontawesome.css";
import "../../../public/fontawesome/css/brands.css";
import "../../../public/fontawesome/css/solid.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Pageturner",
  description: "PDF App",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${sora.className} text-text m-0`}>
      <Draggable/>
      <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
      >
        <ThemeToggle />
        <main className='bg-primary h-[100vh] flex py-[1%] pr-[1%]'>
          <HomeSidebar />
          <section className=' w-full h-full rounded-c overflow-hidden'>
            <MainNavbar />
            <div className='bg-background h-full w-full rounded-c rounded-tl-none flex flex-col py-[5%] overflow-auto'>
              {children}
            </div>
          </section>
        </main>
      </ThemeProvider>
      </body>
      </html>
  );
}
