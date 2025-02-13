import { Card } from "@heroui/react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[calc(100vh-100px)] flex content-center items-center">
      <Card className="max-w-[600px] w-full mx-auto rounded-sm">
        {children}
      </Card>
    </div>
  );
}
