import GuestHeader from "../components/GuestHeader";
import GuestFooter from "../components/GuestFooter";
import GuestDashboard from "../pages/Guest/GuestDashboard";
import GuestNavbar from "../components/GuestNavbar";


export default function GuestLayouts(){
    return(
    <div className="flex flex-col min-h-screen">
      <GuestHeader />
      <GuestNavbar/>
     <GuestDashboard/>
      <GuestFooter />
    </div>
  );
};
   