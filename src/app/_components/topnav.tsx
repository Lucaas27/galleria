import { Container } from "@/app/_components/container";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const TopNav = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <Container>
      <nav className="flex items-center justify-between">
        <div className="logo-text text-xl font-bold">Galleria</div>
        <div className="flex space-x-4">
          {routes.map(route => (
            <Link key={route.path} href={route.path} className="cursor-pointer text-gray-300 hover:text-gray-300/50">
              {route.name}
            </Link>
          ))}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="cursor-pointer text-gray-300 hover:text-gray-300/50">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </Container>
  );
};
