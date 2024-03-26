import AdminRegForm from "../components/admin_form/adminRegform";
import Navbar from "../components/navbar/navbar";

export default function Admin() {
  return (
    <div>
      <Navbar />
      <div className="heroImg"></div>
      <AdminRegForm />
    </div>
  );
}
