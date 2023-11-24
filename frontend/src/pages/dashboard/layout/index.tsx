import Header from "../components/Header";

function Layout({ children }: any) {
  return (
    <div className="flex-1">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
