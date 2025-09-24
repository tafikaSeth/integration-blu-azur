import React, { Suspense } from "react";
import Loader from "./loader";

const LazySection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default LazySection;
