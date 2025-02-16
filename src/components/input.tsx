import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Controller, FieldValues, FormProps, Path } from "react-hook-form";

export default function Input<T extends FieldValues>({
  control,
  helperText,
  name,
  ...props
}: Omit<TextFieldProps, "name"> &
  Pick<FormProps<T>, "control"> & {
    helperTextHidden?: boolean;
    name?: Path<T>;
    EndLabel?: React.ReactNode;
  }) {
  return control && name ? (
    <Controller
      control={control}
      name={name}
      render={({
        field: { ref, ...field },
        fieldState: { error, isTouched },
      }) => (
        <UncontrolledInput
          {...props}
          {...field}
          error={Boolean(error) && isTouched}
          helperText={error?.message || helperText}
          inputRef={ref}
        />
      )}
    />
  ) : (
    <UncontrolledInput {...props} helperText={helperText} />
  );
}

function UncontrolledInput({
  error,
  helperText,
  helperTextHidden,
  inputRef,
  ...props
}: TextFieldProps & {
  helperTextHidden?: boolean;
}) {
  return (
    <div className="pt-1">
      <FormControl fullWidth>
        <TextField {...props} inputRef={inputRef} error={error} fullWidth />
        <FormHelperText error={error} hidden={helperTextHidden}>
          {helperText}
        </FormHelperText>
      </FormControl>
    </div>
  );
}
