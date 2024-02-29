import React from "react";
// import { useClient } from "next-use-client";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Shortcut from "../../components/Shortcut";
import ProductTile from "../../components/ProductTile";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./Navbar.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Valley UI",
  description: "Test Valley UI",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mark the layout as a client-side layout
  // useClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Example usage of imported components */}
        <Navbar />
        <Banner />
        <Shortcut title="Shortcut Title" url="shortcut-url" />
        <ProductTile
          imageUrl="product-image-url"
          title="Product Title"
          discount={20}
          price="$80"
          rating={4.7}
          details="Product details"
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

