function RightSideContext() {
  return (
    <div className="md:absolute -top-14 right-16 flex items-center">
      <img
        src={"./src/assets/home/human_illustration.svg"}
        alt=""
        className="w-[427px] z-10"
      />
      <div className="border border-color-black h-[430px] w-[430px] max-md:hidden rounded-full md:top-32 md:right-1 md:absolute z-0" />
    </div>
  );
}

export default RightSideContext;
