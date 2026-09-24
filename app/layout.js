export const metadata = {
  title: "Conroy’s Collective",
  description: "Wearable tech storefront"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
