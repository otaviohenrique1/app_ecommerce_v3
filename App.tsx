import { PaperProvider } from 'react-native-paper';
import AppRoutes from './src/pages/routes';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppRoutes />
      </PaperProvider>
    </Provider>
  );
}
