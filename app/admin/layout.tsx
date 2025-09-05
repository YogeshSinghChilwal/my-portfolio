import { BodyClassController } from "@/components/BodyClassSetter";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div> <BodyClassController enableOverflowHidden={false} />{children}</div>; 
}
