import { TopNav } from "@/app/_components/topnav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-inherit py-4 shadow-xl">
      <TopNav />
    </header>
  );
};
