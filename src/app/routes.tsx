import { createBrowserRouter } from "react-router";

import { MarketingLayout } from "./components/layout/MarketingLayout";
import { Landing } from "./pages/marketing/Landing";
import { Features } from "./pages/marketing/Features";
import { Pricing } from "./pages/marketing/Pricing";
import { About } from "./pages/marketing/About";
import { Contact } from "./pages/marketing/Contact";

import { AuthLayout } from "./components/layout/AuthLayout";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { OTPVerification } from "./pages/auth/OTPVerification";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { ResetSuccess } from "./pages/auth/ResetSuccess";

import { CustomerLayout } from "./components/layout/CustomerLayout";
import { CustomerDashboard } from "./pages/customer/CustomerDashboard";
import { CustomerCalendar } from "./pages/customer/CustomerCalendar";
import { CustomerWallet } from "./pages/customer/CustomerWallet";
import { CustomerSupport } from "./pages/customer/CustomerSupport";
import { CustomerProfile } from "./pages/customer/CustomerProfile";
import { CustomerHistory } from "./pages/customer/CustomerHistory";

import { AdminLayout } from "./components/layout/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminKitchen } from "./pages/admin/AdminKitchen";
import { AdminRoutes } from "./pages/admin/AdminRoutes";
import { AdminFinance } from "./pages/admin/AdminFinance";
import { AdminSupport } from "./pages/admin/AdminSupport";
import { AdminCustomers } from "./pages/admin/AdminCustomers";
import { AdminMenu } from "./pages/admin/AdminMenu";
import { AdminFleet } from "./pages/admin/AdminFleet";
import { AdminOrders } from "./pages/admin/AdminOrders";
import { PlaceholderView } from "./pages/admin/PlaceholderView";

import { DeliveryLayout } from "./components/layout/DeliveryLayout";
import { DeliveryTasks } from "./pages/delivery/DeliveryTasks";
import { StandaloneAdminDashboard } from "./components/StandaloneAdminDashboard";
import { AdminLogin } from "./pages/auth/AdminLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MarketingLayout,
    children: [
      { index: true, Component: Landing },
      { path: "features", Component: Features },
      { path: "pricing", Component: Pricing },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "verify-otp", Component: OTPVerification },
      { path: "forgot-password", Component: ForgotPassword },
      { path: "reset-password", Component: ResetPassword },
      { path: "reset-success", Component: ResetSuccess },
    ],
  },
  {
    path: "/customer",
    Component: CustomerLayout,
    children: [
      { index: true, Component: CustomerDashboard },
      { path: "calendar", Component: CustomerCalendar },
      { path: "wallet", Component: CustomerWallet },
      { path: "support", Component: CustomerSupport },
      { path: "profile", Component: CustomerProfile },
      { path: "history", Component: CustomerHistory },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "kitchen", Component: AdminKitchen },
      { path: "routes", Component: AdminRoutes },
      { path: "customers", Component: AdminCustomers },
      { path: "menu", Component: AdminMenu },
      { path: "fleet", Component: AdminFleet },
      { path: "finance", Component: AdminFinance },
      { path: "orders", Component: AdminOrders },
      { path: "support", Component: AdminSupport },
      { path: "reports", Component: () => <PlaceholderView title="Reports" /> },
      { path: "settings", Component: () => <PlaceholderView title="Settings" /> },
    ],
  },
  {
    path: "/delivery",
    Component: DeliveryLayout,
    children: [
      { index: true, Component: DeliveryTasks },
      { path: "route", Component: () => <PlaceholderView title="Full Route Map" /> },
      { path: "earnings", Component: () => <PlaceholderView title="Earnings & Payouts" /> },
      { path: "profile", Component: () => <PlaceholderView title="Driver Profile" /> },
    ],
  },
  {
    path: "/standalone-admin",
    Component: StandaloneAdminDashboard,
  },
  {
    path: "/admin-login",
    Component: AdminLogin,
  },
]);
