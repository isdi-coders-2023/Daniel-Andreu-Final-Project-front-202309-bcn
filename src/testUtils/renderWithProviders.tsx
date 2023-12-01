import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import GlobalStyle from "../styles/GlobalStyle";
import { shoesReducer } from "../store/features/shoes/shoesSlice";
import shoesMock from "../mocks/shoesMock";
import { mainTheme } from "../styles/mainTheme";

const renderWithProviders = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      shoesState: shoesReducer,
    },
    preloadedState: { shoesState: { shoes: shoesMock } },
  });

  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};

export default renderWithProviders;
