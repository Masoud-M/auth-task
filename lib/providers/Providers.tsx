"use client";

import TanstackProvider from "./TanstackProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return <TanstackProvider>{children}</TanstackProvider>;
}

export default Providers;
