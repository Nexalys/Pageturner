import { Sora } from "next/font/google";
import { Draggable } from "@/components/Draggable";
import { ThemeProvider } from "next-themes";
import { MainTab } from "@/components/navigation/MainTab";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarLink } from "@/components/dashboard/SidebarLink";
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
    <html lang="en" data-theme='light'>
    <body className={`${sora.className} text-text`}>
    <Draggable/>
    <ThemeProvider
        attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
      >
        <ThemeToggle />
        <main className='bg-primary h-[100vh] flex p-[1%]'>
          <section className='h-full w-[25%] flex'>
            <h1 className='text-3xl font-semibold py-[15%] text-accent'>
              Workspaces
            </h1>
          </section>
          <section className=' w-full h-full rounded-[20px] overflow-hidden'>
            <div className='h-[6%] w-fit bg-background main-navigator relative
            rounded-tr-[20px] flex items-center px-[1.5%] py-1.5 text-base gap-5'>
              <MainTab
                home={true}
                active={true}
              />
              <MainTab
                  workspaceName='School PDFs'
              />
              <MainTab
                  workspaceName='Volunteer Work'
              />
            </div>
            <div className='bg-background h-full w-full rounded-[20px] rounded-tl-none'>
              {children}
            </div>
          </section>
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
