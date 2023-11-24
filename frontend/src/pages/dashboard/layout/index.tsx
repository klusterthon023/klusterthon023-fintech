import Header from "../components/Header";

function Layout({ children }: any) {
  return (
    <div className="flex-1">
      <Header />
      <div className="h-[calc(100vh-90px)] overflow-y-scroll">{children}</div>
    </div>
  );
}

export default Layout;
