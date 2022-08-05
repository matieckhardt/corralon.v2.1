import { FormControl,Typography } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import "./styles.css";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomSelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <FormControl sx={{ width: "auto", marginRight: 5, marginBottom: 3 }}>
      <Typography sx={{fontSize:18}}>{label}</Typography>
      <select className="select" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="text_error" />
    </FormControl>
  );
};
