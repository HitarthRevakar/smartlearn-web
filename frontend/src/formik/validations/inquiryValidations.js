import * as Yup from 'yup';

export const inquiryValidationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  
  email: Yup.string().email('Invalid email format').required('Email is required'),
  
  phone: Yup.string().matches(/^[0-9+\-\s()]+$/, 'Phone number format is invalid').min(10, 'Phone number must be at least 10 digits').required('Phone number is required'),
  
  levelOfEducation: Yup.string().required('Level of education is required'),
  
  courseInterested: Yup.string().required('Course interested is required'),
  
  subscribeToUpdates: Yup.boolean()
});