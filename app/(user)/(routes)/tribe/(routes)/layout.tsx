import MainSidebar from '@/components/sidebar/MainSidebar';

export default function tribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <MainSidebar />

          {children}
        </main>
      </body>
    </html>
  );
}
