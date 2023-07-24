import "@/styles/globals.css";
import * as React from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Layout from "./layout";
import { Provider } from "react-redux";
import createEmotionCache from "./createEmotionCache";
import { store, persistor } from "@/store";
import Loading from "@/components/shared/loading";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
import { useRouter } from "next/router";
import LayoutDashboard from "./dashboard/layout";

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const route = useRouter();
  const hasDashboard = route.pathname.includes("/dashboard");
  const isLoginPage = route.pathname.includes("/login");

  const renderContent = () => {
    const AppLayout = hasDashboard ? LayoutDashboard : Layout;
    const CommonWrapper = !isLoginPage ? AppLayout : React.Fragment;
    return (
      <CommonWrapper>
        <CssBaseline />
        <Loading />
        <Component {...pageProps} />
        <ToastContainer />
      </CommonWrapper>
    );
  };
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {renderContent()}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
