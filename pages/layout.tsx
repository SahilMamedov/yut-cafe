import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import StyledComponentsRegistry from "@/lib/registry";
import Dashboard from "./dashboard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </StyledComponentsRegistry>
  );
}
