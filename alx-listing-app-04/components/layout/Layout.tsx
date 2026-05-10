import React, {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";
interface LayoutProps {
  children: ReactNode;
  onSearch: (data: { location: string; checkIn: string; checkOut: string; guests: number }) => void; 
}
const Layout: React.FC<LayoutProps> = ({children , onSearch}) => {
  return (
    <>
      <Header onSearch={onSearch}/>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
