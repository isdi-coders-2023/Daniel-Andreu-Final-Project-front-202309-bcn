import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Store, configureStore } from "@reduxjs/toolkit";
import GlobalStyle from "../styles/GlobalStyle";
import { shoesReducer } from "../store/features/shoes/shoesSlice";
import { ToastContainer } from "react-toastify";
import { shoesMock } from "../mocks/shoesMock";
import { mainTheme } from "../styles/mainTheme";
import { PropsWithChildren } from "react";
import { uiReducer } from "../store/features/ui/uiSlice";

const mockStore = configureStore({
  reducer: {
    shoesState: shoesReducer,
    uiState: uiReducer,
  },
  preloadedState: {
    shoesState: { shoes: shoesMock, shoe: shoesMock[0] },
    uiState: { isLoading: false },
  },
});

export const renderWithProviders = (
  children: React.ReactElement,
  optionalStore?: Store,
) => {
  render(
    <Provider store={optionalStore ?? mockStore}>
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

export const renderWithProvidersAndPath = (
  children: React.ReactElement,
  path: string,
) => {
  render(
    <Provider store={mockStore}>
      <MemoryRouter initialEntries={[path]}>
        <ThemeProvider theme={mainTheme}>
          <ToastContainer />
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </MemoryRouter>
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
