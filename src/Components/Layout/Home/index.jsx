import React from "react"

import MainLayout from "../Main"
import Bio from "../../Bio"

import "./index.scss"

const HomeLayout = ({ children }) => (
  <MainLayout>
    <div className="home-layout">
      <Bio />
      {children}
    </div>
  </MainLayout>
)

export default HomeLayout
