// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

/**
 * Layout wraps every routed page so they share the same container,
 * spacing and centering. Put any page-level common UI here.
 */
export default function Layout() {
  return (
    <div className="page-container">
      <div className="page-inner">
        {/* outlet renders the matched route's element */}
        <Outlet />
      </div>
    </div>
  );
}
