import MainSidebar from '@/components/sidebar/MainSidebar';

export default function tribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainSidebar />
      {children}
    </div>
  );
}
