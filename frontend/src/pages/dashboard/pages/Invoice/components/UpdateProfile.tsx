import { Form, Formik } from "formik";
import { useAppContext } from "../../../../../contexts";
import { Button, Input, Modal } from "../../../../../design-system";
import {
  formikHelper,
  removeDataFromLocalStorage,
  setDataToLocalStorage,
} from "../../../../../utils/helper";
import { useMutation } from "react-query";
import { updateProfile } from "../../Dashboard/api-dashboard";
import { toast } from "react-toastify";
import AppLoadingState from "../../../../../components/loader/AppLoader";

interface FormValues {
  business_name: string;
  owner_name: string;
  contact_number: string;
  business_address: string;
  business_description: string;
}

export default function UpdateProfile() {
  const initialValues: FormValues = {
    business_name: "",
    owner_name: "",
    contact_number: "",
    business_address: "",
    business_description: "",
  };

  const { toggleIsUpdateProfileModalOpen, isUpdateProfileModalOpen } =
    useAppContext();

  const { mutateAsync, isLoading } = useMutation(updateProfile);

  if (isLoading) {
    return <AppLoadingState isLoading={isLoading} />;
  }
  async function handleSubmit(values: FormValues) {
    try {
      console.log(initialValues);
      const result = await mutateAsync(values);
      removeDataFromLocalStorage("currentUser");
      setDataToLocalStorage(
        "currentUser",
        JSON.stringify(result.data.owner as any)
      );
      toggleIsUpdateProfileModalOpen();
      toast("You've sucessfully updated your profile.");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      title={"Set-up your Profile"}
      isModalOpen={isUpdateProfileModalOpen}
      onClose={() => {
        toggleIsUpdateProfileModalOpen();
      }}
    >
      {isUpdateProfileModalOpen && (
        <div className="sm:!w-auto md:!w-[500px] !rounded-lg mt-4">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(formik) => {
              const { getFieldProps, dirty } = formik;

              return (
                <Form className="grid gap-5 placeholder:text-gray-100">
                  <Input
                    label="Business Name"
                    placeholder="Enter business name"
                    {...getFieldProps("business_name")}
                    {...formikHelper(formik, "business_name")}
                    className=" placeholder:text-sm"
                  />

                  <Input
                    label="Owner Name"
                    placeholder="Enter owner name"
                    {...getFieldProps("owner_name")}
                    {...formikHelper(formik, "owner_name")}
                    className=" placeholder:text-sm"
                  />

                  <Input
                    label="Contact Number"
                    placeholder="Enter contact number"
                    {...getFieldProps("contact_number")}
                    {...formikHelper(formik, "contact_number")}
                    className=" placeholder:text-sm"
                  />

                  <Input
                    label="Business Address"
                    placeholder="Enter business address"
                    {...getFieldProps("business_address")}
                    {...formikHelper(formik, "business_address")}
                    className=" placeholder:text-sm"
                  />

                  <Input
                    label="Business Description"
                    placeholder="Enter business description"
                    {...getFieldProps("business_description")}
                    {...formikHelper(formik, "business_description")}
                    className=" placeholder:text-sm"
                  />

                  <Button type="submit" disabled={!dirty} fullWidth>
                    Save
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </Modal>
  );
}
