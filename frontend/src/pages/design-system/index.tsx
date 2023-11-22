import { Button, Input, Typography } from "../../design-system";
function DesignSystem() {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center m-auto min-h-screen max-w-[500px]">
      <Typography variant="h1" color="secondary">
        Register with us
      </Typography>
      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Address" />
      <Input type="password" label="password" />
      <Button fullWidth>Submit</Button>
    </div>
  );
}

export default DesignSystem;
