import { Zap } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
      {/* HEADER */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Nexus
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* NAV (MENU AREA) */}
      <nav className="flex-1 p-4 overflow-y-auto">
        {/* menu items go here */}
      </nav>

      {/* USER PROFILE (BOTTOM) */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50 mt-auto">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-white">
              Alex Johnson
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
