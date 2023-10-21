import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";

export const SuspenseLoading = React.memo(({ children }) => {
  return (
    <Suspense fallback={
      <Spinner style={{ zIndex: "30000"}} animation="grow" role="status">
      </Spinner>
    }>
      {children}
    </Suspense>
  );
})