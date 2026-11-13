
import "./globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "Explore Mundo",
  description: "Descubra destinos incríveis para sua próxima viagem."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
