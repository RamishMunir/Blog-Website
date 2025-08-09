import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeToggle from "./themetoggle";


export default function Navbar(){
    return(
        <nav className=" sticky top-0 z-50 bg-background/80 backdrop-blur-md border border-border/50">
            <div className=" mx-auto px-4 ">

                <div className="flex justify-between items-center h-16">

                    <div className=" flex-shrink-0">
                        <h1 className="text-xl font-bold font-serif text-foreground">Blog</h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link href={item.href} key={item.name} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-1000">
                                {item.name}
                            </Link>
                        ))}
                        <ThemeToggle/>
                    </div>

                </div>
            </div>
        </nav>
    );
}