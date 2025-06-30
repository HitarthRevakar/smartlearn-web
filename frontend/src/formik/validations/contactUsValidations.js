//--------------------------------------------------import Yup validations-----------------------------------------------//

import * as Yup from 'yup';

//----------------------------------------------------Yup shema---------------------------------------------------------//

export const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

