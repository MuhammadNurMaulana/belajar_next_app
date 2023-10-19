import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-12 p-4 bg-slate-800 text-white">
      <h1>Navbar</h1>
      <div className="flex items-center gap-8">
        <Link href={"/"} className={`${pathname === "/" ? "text-yellow-500" : ""}`}>
          Home
        </Link>
        <Link href={"/about"} className={`${pathname === "/about" ? "text-yellow-500" : ""}`}>
          About
        </Link>
        <Link href={"/product"} className={`${pathname === "/product" ? "text-yellow-500" : ""}`}>
          Product
        </Link>
        <Link href={"/about/profile"} className={`${pathname === "/about/profile" ? "text-yellow-500" : ""}`}>
          Profile
        </Link>
        <Link href={"/about/profile/login"} className={`${pathname === "/about/profile/login" ? "text-yellow-500" : ""}`}>
          Login
        </Link>
        <Link href={"/about/profile/register"} className={`${pathname === "/about/profile/register" ? "text-yellow-500" : ""}`}>
          Register
        </Link>
      </div>
    </div>
  );
}
