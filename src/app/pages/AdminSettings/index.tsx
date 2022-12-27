import DashboardLayout from "../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import AdminHeader from "./Header";
import Setting from "./Settings";

const index = () => {
  return (
    <DashboardLayout>
      <AdminHeader />

      <DashboardMainView className="h-screen py-5 pl-10">
        <Setting />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
