import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DataTypeCarrinho = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

interface CarrinhoState {
  data: DataTypeCarrinho[];
}

const dadosIniciais: CarrinhoState = {
  data: [
    {
      id: 1,
      nome: "Placa de video RTX 4070 12GB",
      preco: 3000,
      quantidade: 1,
    }
  ],
};

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: dadosIniciais,
  reducers: {
    adicionarNoCarrinho: (state, action: PayloadAction<DataTypeCarrinho>) => {
      state.data.push(action.payload)
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((item) => {
        return item.id !== action.payload
      })
    }
  }
});

export const { adicionarNoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
