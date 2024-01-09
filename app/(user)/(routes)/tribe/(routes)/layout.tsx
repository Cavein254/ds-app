export default function tribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <MainSidebar /> */}
      <body>{children}</body>
    </div>
  );
}
