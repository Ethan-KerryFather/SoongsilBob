import { Snackbar } from "react-native-paper";

function CustomSnackbar({ visible, setVisible, contentText }) {
  return (
    <Snackbar
      visible={visible}
      onDismiss={() => {
        setVisible(false);
      }}
    >
      {contentText}
    </Snackbar>
  );
}

export default CustomSnackbar;
