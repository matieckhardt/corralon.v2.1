import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";
import { SubmitHandler, useForm, UseFormProps } from "react-hook-form";

import FormInput, { FormInputProps } from "./FormInput";

type ValidChildren<T> = FormInputProps<T>;
interface FormProps<T> {
  options?: UseFormProps<T>;
  onSubmit?: SubmitHandler<T>;
}

export default function Form<T>({
  options,
  onSubmit,
  children,
}: PropsWithChildren<FormProps<T>>) {
  const { register, getFieldState, handleSubmit } = useForm(options);
  return (
    <form onSubmit={onSubmit && handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        if (
          isValidElement<ValidChildren<T>>(child) &&
          child.type === FormInput
        ) {
          return cloneElement(child, {
            register,
            getFieldState,
          });
        } else {
          return child;
        }
      })}
    </form>
  );
}
