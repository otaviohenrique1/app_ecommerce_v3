import React from "react";
import { Control, Controller, FieldError, FieldPath, FieldValues, Path } from "react-hook-form";
import { HelperText, TextInput } from "react-native-paper";
import { RenderProps, TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types";
import { KeyboardTypeOptions, StyleProp, TextStyle } from "react-native";

interface CampoTextoProps<T extends FieldValues, TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  control: Control<T, TName>;
  label: TextInputLabelProp;
  style?: StyleProp<TextStyle>;
  name: Path<T>;
  errors: FieldError | undefined;
  multiline?: boolean | undefined;
  secureTextEntry?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  render?: (props: RenderProps) => React.ReactNode;
}

export function CampoTexto<T extends FieldValues>(props: CampoTextoProps<T>) {
  const { control, label, name, errors, multiline, style, secureTextEntry, keyboardType, render } = props;
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label={label}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={multiline}
            style={style}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            render={render}
          />
        )}
        name={name}
      />
      {errors && <HelperText type="error">Campo vazio</HelperText>}
    </>
  );
}