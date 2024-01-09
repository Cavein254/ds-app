export default function tribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* <MainSidebar /> */}
      <body>{children}</body>
    </html>
  );
}
