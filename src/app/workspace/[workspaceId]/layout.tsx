"use client";
import { Toolbar } from "./toolbar";

interface WorkspaceidLayout {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceidLayout) => {
  return (
    <div className="h-full ">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceLayout;
