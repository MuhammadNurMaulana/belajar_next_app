import Link from "next/link";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="h-screen fixed top-10 right-0 bg-slate-800 text-white w-72 flex flex-col items-center py-10 gap-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/profile">Profile</Link>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
