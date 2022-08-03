import FormControl, { FormControlProps } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";
import {
  FormState,
  Path,
  UseFormGetFieldState,
  UseFormRegister,
} from "react-hook-form";

export interface FormSelectEntry {
  label: string;
  value: string;
}

export interface FormSelectProps<T> {
  name: Path<T>;
  defaultValue?: string;
  label?: string;
  options?: (string | FormSelectEntry)[];
  validation?: Parameters<UseFormRegister<T>>[1];
  FormControlProps?: FormControlProps;
  SelectProps?: SelectProps;
  formData?: {
    formState: FormState<T>;
    register: UseFormRegister<T>;
    getFieldState: UseFormGetFieldState<T>;
  };
}

export default function FormSelect<T>(props: FormSelectProps<T>) {
  const labelId = `${props.name}-label`;
  const label = props.label && (
    <FormLabel id={labelId}>{props.label}</FormLabel>
  );
  const options = props.options?.map((val) =>
    typeof val === "string" ? (
      <MenuItem key={val} value={val}>
        {val}
      </MenuItem>
    ) : (
      <MenuItem key={val.value} value={val.value}>
        {val.label}
      </MenuItem>
    )
  );

  if (props.formData) {
    const { formState, register, getFieldState } = props.formData;
    const registered = register(props.name, props.validation);
    const { error, isTouched } = getFieldState(props.name, formState);

    return (
      <FormControl
        error={isTouched && Boolean(error)}
        {...props.FormControlProps}
      >
        {label}
        <Select
          labelId={labelId}
          label={props.label}
          defaultValue={props.defaultValue}
          {...props.SelectProps}
          {...registered}
        >
          {options}
        </Select>
        <FormHelperText>{isTouched && error?.message}</FormHelperText>
      </FormControl>
    );
  } else {
    return (
      <FormControl {...props.FormControlProps}>
        {label}
        <Select
          labelId={labelId}
          label={props.label}
          defaultValue={props.defaultValue}
          {...props.SelectProps}
        >
          {options}
        </Select>
      </FormControl>
    );
  }
}
