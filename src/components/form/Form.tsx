import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

import FormInput, { FormInputProps } from "./FormInput";

type ValidChildren<T> = FormInputProps<T>;
interface FormProps<T> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export default function Form<T>({
  form: { register, getFieldState, handleSubmit, formState },
  children,
  onSubmit,
}: PropsWithChildren<FormProps<T>>) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        if (
          isValidElement<ValidChildren<T>>(child) &&
          child.type === FormInput
        ) {
          return cloneElement(child, {
            key: child.props.name,
            formData: {
              register,
              getFieldState,
              formState,
            },
          });
        } else {
          return child;
        }
      })}
    </form>
  );
}
