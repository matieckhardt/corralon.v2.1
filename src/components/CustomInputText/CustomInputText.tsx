import { FormControl, TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import "./styles.css";
interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "date";
  placeholder?: string;
  [x: string]: any;
}

export const CustomInputText = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <FormControl sx={{ marginRight: 5, marginBottom: 3 }}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextField
        id={props.id}
        variant="outlined"
        fullWidth
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name} component="span" className="text_error" />
    </FormControl>
  );
};
