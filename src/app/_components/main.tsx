import { Container } from "@/app/_components/container";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 py-12">
      <Container>{children}</Container>
    </main>
  );
};
