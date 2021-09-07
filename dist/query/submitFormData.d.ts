import FormData from 'form-data';
import { ManipulistResponse } from '../../@types/types';
declare type FormSubmit = {
    formData: FormData;
    options: FormData.SubmitOptions;
};
declare const submitFormData: ({ formData, options, }: FormSubmit) => Promise<ManipulistResponse>;
export default submitFormData;
