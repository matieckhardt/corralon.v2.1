import { FormControl, TextareaAutosize } from "@mui/material";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomTextArea = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <FormControl>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={8}
        placeholder={props.placeholder}
        style={{ width: 500 }}
        id={props.id}
        {...field}
        {...props}
      />
    </FormControl>
  );
};
