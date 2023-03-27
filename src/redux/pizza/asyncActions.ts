import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchType, PizzaType } from "./types";


export const fetchPizzas = createAsyncThunk("pizzaSlice/fetchPizzasStatus ", async (params: FetchType) => {
    const { IndexCategory, sortNameRep, sortType, search, pagePagination } = params;
    const pizzaArr = await axios.get<PizzaType[]>(
      `https://64218c7c86992901b2b64904.mockapi.io/pivo?page=${pagePagination}
                   &limit=4&${IndexCategory}&sortBy=${sortNameRep}&order=${sortType}&${search}`
    );
    return pizzaArr.data as PizzaType[];
  });