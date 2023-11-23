import { Formik, Field, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../design-system';

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  acceptTerms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

const handleSubmit = (
  values: FormikValues,
  //{ setSubmitting }: FormikHelpers<FormValues>
) => {
console.log(values);
}


const RegisterForm: React.FC = () => {
  const initialValues: FormValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  return (
    <div className=' pb-6'>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({dirty, isValid, values}) => (
        <form className="grid gap-5 placeholder:text-gray-100">
          <label htmlFor="fullName" className='flex flex-col'>
          <Field type="text" name="fullName"  placeholder="Full Name" className="placeholder"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid rgba(128, 128, 128, 0.3)' }} />
          <ErrorMessage name="fullName" component="div" className="error" />
          </label>

          <label htmlFor="email" className='flex flex-col'>
          <Field type="email" name="email" placeholder="Email" className="placeholder" 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid rgba(128, 128, 128, 0.3)' }}/>
          <ErrorMessage name="email" component="div" className="error" />
          </label>

          <label htmlFor="password" className='flex flex-col'>
          <Field type="password" name="password" placeholder="Password" className="placeholder"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid rgba(128, 128, 128, 0.3)' }}/>
          <ErrorMessage name="password" component="div" className="error" />
          </label>

          <label htmlFor="confirmPassword" className='flex flex-col'>
          <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="placeholder"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid rgba(128, 128, 128, 0.3)' }} />
          <ErrorMessage name="confirmPassword" component="div" className="error" />
          </label>

          <label htmlFor="acceptTerms" className='flex gap-2 items-center'>
          <Field type="checkbox" name="acceptTerms"
          style={{ fontSize: '14px'}}/>
          I agree to the term and conditions, and the privacy policy.
          <ErrorMessage name="acceptTerms" component="div" className="error block" />
          </label>

          <Button type="submit" disabled={!(dirty && isValid && values.acceptTerms)}  className='!w-full'>Sign Up</Button>
        </form>
      )}
    </Formik>
  </div>
  );
};

export default RegisterForm;
