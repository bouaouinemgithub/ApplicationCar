import Toast from 'react-native-toast-message';

export const showSuccess = message => {
  Toast.show({
    type: 'success',
    text1: message,

  });
};
export const showError = message => {
  Toast.show({
    type: 'error',
    text1: message,
  });
};
export const showNotification = (title, body) => {
  Toast.show({
    type: 'info',
    text1: title,
    text2: body,
  });
};
