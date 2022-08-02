import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Path, UseFormGetFieldState, UseFormRegister } from "react-hook-form";

export interface FormInputProps<T> {
  name?: Path<T>;
  validation?: Parameters<UseFormRegister<T>>[1];
  register?: UseFormRegister<T>;
  getFieldState?: UseFormGetFieldState<T>;
}

export default function FormInput<T>({
  name,
  validation,
  register,
  getFieldState,
  ...props
}: FormInputProps<T> & TextFieldProps) {
  if (name && register && getFieldState) {
    const { error, isTouched } = getFieldState(name);
    return (
      <TextField
        error={isTouched && Boolean(error)}
        helperText={isTouched && error?.message}
        {...register(name, validation)}
        {...props}
      />
    );
  } else {
    return <TextField {...props} />;
  }
}
