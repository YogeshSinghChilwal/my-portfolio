export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="overflow-y-hidden">{children}</div>; 
}
