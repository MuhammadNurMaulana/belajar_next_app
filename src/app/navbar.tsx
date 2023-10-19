import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center gap-12 p-4 bg-slate-800 text-white">
      <h1>Navbar</h1>
      <div className="flex items-center gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/about/profile"}>Profile</Link>
      </div>
    </div>
  );
}
