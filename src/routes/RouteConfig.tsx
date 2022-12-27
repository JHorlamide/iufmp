import { Route, Routes } from "react-router-dom";
import {
  HOME,
  MEDIA,
  ABOUT_US,
  OUR_PARTNERS,
  REGISTER,
  MEDIA_NEWS_DETAILS,
  MEDIA_EVENT_DETAILS,
  BANKS,
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  REGULATORS,
  SUPER_AGENT,
  GOVERNMENTS,
  AGENTS,
  STRATEGIC_PARTNERS,
  ADMIN_SETTINGS,
  ADD_BANK,
  EDIT_BANK,
  ADD_SUPER_AGENT,
  EDIT_SUPER_AGENT,
  ADD_REGULATOR,
  EDIT_REGULATOR,
  ADD_STRATEGIC_PARTNERS,
  EDIT_STRATEGIC_PARTNERS,
  ADD_GOVERNMENT,
  EDIT_GOVERNMENT,
  ADD_AGENT,
  EDIT_AGENT
} from "./ROUTES_CONSTANTS";
import Home from "website/Home";
import About from "website/About";
import OurPartners from "website/OurPartners";
import Media from "website/Media";
import BecomeAnAgent from "website/BecomeAnAgent";
import NewsDetails from "website/Media/components/NewsDetails";
import EventDetails from "website/Media/components/EventDetails";
import Login from "website/Auth/Login";
import ForgotPassword from "website/Auth/ForgotPassword";
import ResetPassword from "website/Auth/ResetPassword";
import AuthLayoutAuth from "app/components/AuthLayout";
import PersistLogin from "app/components/PersistLogin";
import NotFound from "website/NotFound";

// Dashboard
import AdminSettings from "app/pages/AdminSettings";

// BANKS
import Banks from "app/pages/Banks/index";
import CreateBank from "app/pages/Banks/components/AddBank";
import EditBank from "app/pages/Banks/components/EditBank";

// SUPER AGENTS
import SuperAgents from "app/pages/SuperAgents/index";
import AddSuperAgent from "app/pages/SuperAgents/components/AddSuperAgent";
import EditSuperAgent from "app/pages/SuperAgents/components/EditSuperAgent";

// REGULATORS
import Regulators from "app/pages/Regulators/index";
import AddRegulator from "app/pages/Regulators/components/AddRegulator";
import EditRegulator from "app/pages/Regulators/components/EditRegulators";

// STRATEGIC PARTNER
import StrategicPartners from "app/pages/StrategicPartners/index";
import AddPartner from "app/pages/StrategicPartners/components/AddPartner";
import EditPartner from "app/pages/StrategicPartners/components/EditPartner";

// GOVERNMENT/MDA
import Governments from "app/pages/Governments/index";
import AddGovernment from "app/pages/Governments/components/AddGovernment";
import EditGovernment from "app/pages/Governments/components/EditGovernment";

// AGENTS
import Agents from "app/pages/Agents/index";
import AddAgents from "app/pages/Agents/components/AddAgents";
import EditAgents from "app/pages/Agents/components/EditAgents";

const RouteConfig = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={HOME} element={<Home />} />
      <Route path={MEDIA} element={<Media />} />
      <Route path={ABOUT_US} element={<About />} />
      <Route path={OUR_PARTNERS} element={<OurPartners />} />
      <Route path={REGISTER} element={<BecomeAnAgent />} />
      <Route path={MEDIA_NEWS_DETAILS} element={<NewsDetails />} />
      <Route path={MEDIA_EVENT_DETAILS} element={<EventDetails />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />

      {/* Protected Routes */}
      <Route element={<PersistLogin />}>
        <Route element={<AuthLayoutAuth />}>
          {/* Banks */}
          <Route path={BANKS} element={<Banks />} />
          <Route path={ADD_BANK} element={<CreateBank />} />
          <Route path={EDIT_BANK} element={<EditBank />} />

          {/* Agents */}
          <Route path={AGENTS} element={<Agents />} />
          <Route path={ADD_AGENT} element={<AddAgents />} />
          <Route path={EDIT_AGENT} element={<EditAgents />} />

          {/* Strategic Partners */}
          <Route path={STRATEGIC_PARTNERS} element={<StrategicPartners />} />
          <Route path={ADD_STRATEGIC_PARTNERS} element={<AddPartner />} />
          <Route path={EDIT_STRATEGIC_PARTNERS} element={<EditPartner />} />

          {/* Admin Settings */}
          <Route path={ADMIN_SETTINGS} element={<AdminSettings />} />

          {/* Governments */}
          <Route path={GOVERNMENTS} element={<Governments />} />
          <Route path={ADD_GOVERNMENT} element={<AddGovernment />} />
          <Route path={EDIT_GOVERNMENT} element={<EditGovernment />} />

          {/* Super Agents */}
          <Route path={SUPER_AGENT} element={<SuperAgents />} />
          <Route path={ADD_SUPER_AGENT} element={<AddSuperAgent />} />
          <Route path={EDIT_SUPER_AGENT} element={<EditSuperAgent />} />

          {/* Regulators */}
          <Route path={REGULATORS} element={<Regulators />} />
          <Route path={ADD_REGULATOR} element={<AddRegulator />} />
          <Route path={EDIT_REGULATOR} element={<EditRegulator />} />
        </Route>
      </Route>

      {/* Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteConfig;
