import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const TreeViewComponent = lazy(() => import("./components/TreeViewComponent"));
export const RoutesMain = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<TreeViewComponent />} />
        </Routes>
      </Suspense>
    </div>
  );
};
