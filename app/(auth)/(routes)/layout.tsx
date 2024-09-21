import React from "react";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8">
      <p>Dashboard</p>
      <h1 className="text-3xl my-2">Welcome to my dashboard</h1>
      <h2 className="text-2xl mb-3">Dash</h2>
      {children}
    </div>
  );
}
