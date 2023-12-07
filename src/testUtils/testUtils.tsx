import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import GlobalStyle from "../styles/GlobalStyle";
import { shoesReducer } from "../store/features/shoes/shoesSlice";
import { ToastContainer } from "react-toastify";
import shoesMock from "../mocks/shoesMock";
import { mainTheme } from "../styles/mainTheme";
import { PropsWithChildren } from "react";
import { uiReducer } from "../store/features/ui/uiSlice";

const mockStore = configureStore({
  reducer: {
    shoesState: shoesReducer,
    uiState: uiReducer,
  },
  preloadedState: {
    shoesState: { shoes: shoesMock },
    uiState: { isLoading: false },
  },
});

export const renderWithProviders = (children: React.ReactElement) => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <ToastContainer />
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>
  );
};
