import { Snackbar } from "react-native-paper";

function CustomSnackbar({ visible, setVisible }) {
  return (
    <Snackbar
      visible={visible}
      onDismiss={() => {
        setVisible(false);
      }}
    >
      금방 준비해서 돌아올게요!
    </Snackbar>
  );
}

export default CustomSnackbar;
