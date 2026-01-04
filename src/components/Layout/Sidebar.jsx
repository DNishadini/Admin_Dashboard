import React, { useState } from "react";
import {
  LayoutDashboard,
  Zap,
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", badge: "New" },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  { id: "inventory", icon: Package, label: "Inventory", count: "847" },
  { id: "transactions", icon: CreditCard, label: "Transactions" },
  { id: "messages", icon: MessageSquare, label: "Messages", badge: "12" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "reports", icon: FileText, label: "Reports" },
  { id: "settings", icon: Settings, label: "Settings" },
];

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (item) => {
    if (item.submenu) {
      // open / close submenu only
      setOpenMenu(openMenu === item.id ? null : item.id);
    } else {
      // navigate + collapse sidebar
      onPageChange(item.id);
      onToggle(); // ✅ COLLAPSE SIDEBAR
      setOpenMenu(null);
    }
  };

  const handleSubmenuClick = (subId) => {
    onPageChange(subId);
    onToggle(); // ✅ COLLAPSE SIDEBAR
    setOpenMenu(null);
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300 ease-in-out
      bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
      border-r border-slate-200/50 dark:border-slate-700/50
      flex flex-col`}
    >
      {/* HEADER */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* NAV */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive =
              currentPage === item.id ||
              (item.submenu && item.submenu.some((s) => s.id === currentPage));

            const isOpen = openMenu === item.id;

            return (
              <div key={item.id}>
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    {!collapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </div>

                  {!collapsed && item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* SUBMENU */}
                {!collapsed && item.submenu && isOpen && (
                  <div className="ml-10 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubmenuClick(sub.id)}
                        className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition
                          ${
                            currentPage === sub.id
                              ? "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white"
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* USER PROFILE */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />
          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                Alex Johnson
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
