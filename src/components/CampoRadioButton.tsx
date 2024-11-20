import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

interface CampoRadioButtonProps {
  status: "checked" | "unchecked";
  value: string;
  onPress: (e: GestureResponderEvent) => void;
  label: string;
}

export function CampoRadioButton(props: CampoRadioButtonProps) {
  const { status, value, onPress, label } = props;

  return (
    <View style={styles.radioButton}>
      <RadioButton
        value={value}
        status={status}
        onPress={onPress}
      />
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});
