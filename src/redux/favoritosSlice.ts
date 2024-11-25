import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DataTypeFavorito = {
  id: number;
  nome: string;
  preco: number;
};

interface FavoritoState {
  data: DataTypeFavorito[];
}

const dadosIniciais: FavoritoState = {
  data: [
    {
      id: 1,
      nome: "Placa de video RTX 4070 12GB",
      preco: 3000,
    }
  ],
};

export const favoritoSlice = createSlice({
  name: "favoritos",
  initialState: dadosIniciais,
  reducers: {
    adicionarNosFavoritos: (state, action: PayloadAction<DataTypeFavorito>) => {
      state.data.push(action.payload)
    },
    removerDosFavoritos: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((item) => {
        return item.id !== action.payload
      })
    }
  }
});

export const { adicionarNosFavoritos, removerDosFavoritos } = favoritoSlice.actions;

export default favoritoSlice.reducer;
