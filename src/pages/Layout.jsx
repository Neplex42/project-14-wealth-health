import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
      <>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
  );
};

export default Layout;