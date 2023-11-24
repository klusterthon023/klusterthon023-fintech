function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="fixed inset-0 bg-gray-900 opacity-30 top-0 z-80 backdrop-blur-sm"></div>
      <div className="w-[200px] flex justify-center items-center rounded h-1 bg-color-gray relative overflow-hidden z-50">
        <div
          className="h-full w-[50px] rounded bg-primary-400 absolute left-0 animate-loading-bar"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Loader;
