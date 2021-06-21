import React from "react";
import { CoffeesContainer, Sidebar } from "../containers";
import { AppContextProvider } from "../context";
import { Coffees } from "../models";
import "../styles/app.css";

export const App: React.FC<{ coffees?: Coffees }> = ({ coffees }) => {
  return (
    <AppContextProvider data={coffees}>
      <div className="app-wrapper">
        <Sidebar />
        <div className="content">
          <CoffeesContainer />
        </div>
      </div>
    </AppContextProvider>
  );
};
