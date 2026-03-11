import { Menu, X } from "lucide-react";
import { useState ,useEffect} from 'react'
const navlink = [
    { href: "#", lable: "About" },
    { href: "#projects", lable: "Project" },
    { href: "#", lable: "Testimonials" },
    {
        href: "#contact", lable: "Contact"
    }
]
export const Navbar = () => {
    const [mobopen, mobset] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            }  z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary ">
                    AS <span className="text-primary">.</span>
                </a>
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 items-center gap-1">
                        {navlink.map((link, index) => {
                            return (<a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.lable}
                            </a>)
                        })}
                    </div>
                </div>
                <button className="md:hidden p-2 text-foreground" onClick={() => mobset((prev) => !prev)}>
                    {mobopen ? <X size={24} /> : <Menu size={24} />}

                </button>
            </nav>
            {/*mobile menu */}
            {mobopen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navlink.map((link, index) => {
                            return (<a href={link.href} key={index} onClick={()=>mobset(false)} className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.lable}
                            </a>)
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}