import { Outlet } from "react-router-dom";

import NavBar from "../pages/navbar";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <main className="flex flex-col bg-background min-h-screen h-full w-full">
      <NavBar />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}

export default MainLayout;
