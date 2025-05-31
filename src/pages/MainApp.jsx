import Dashboard from "@/components/layouts/dashboard/Dashboard";
import Whiteboard from "@/components/layouts/whiteboard/Whiteboard";

// import DB_Day from "../assets/day-db.jpg";
// import DB_Night from "../assets/night-db.jpg";

const MainApp = () => {
  return (
    <div className="mainapp-section min-h-screen ">
      <div className="mainapp-container p-3 lg:p-5">
        <Dashboard />
        <Whiteboard />
      </div>
    </div>
  );
};

export default MainApp;
