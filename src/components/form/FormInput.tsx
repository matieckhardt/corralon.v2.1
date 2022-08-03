import TextField, { TextFieldProps } from "@mui/material/TextField";
import {
  FormState,
  Path,
  UseFormGetFieldState,
  UseFormRegister,
} from "react-hook-form";

export interface FormInputProps<T> {
  name: Path<T>;
  validation?: Parameters<UseFormRegister<T>>[1];
  formData?: {
    formState: FormState<T>;
    register: UseFormRegister<T>;
    getFieldState: UseFormGetFieldState<T>;
  };
}

export default function FormInput<T>({
  name,
  validation,
  formData,
  ...rest
}: FormInputProps<T> & Omit<TextFieldProps, "name">) {
  if (formData) {
    const { formState, register, getFieldState } = formData;
    const registered = register(name, validation);
    const { error, isTouched } = getFieldState(name, formState);
    return (
      <TextField
        {...rest}
        {...registered}
        error={isTouched && Boolean(error)}
        helperText={isTouched && error?.message}
      />
    );
  } else {
    return <TextField {...rest} />;
  }
}
