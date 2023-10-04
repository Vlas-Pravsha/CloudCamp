import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface formSliceProps {
  name: string;
  nickname: string;
  sername: string;
  phone: number;
  email: string;
  sex: string;
  about: string;
  // firstFormIsValid: boolean;
  // secondFormIsValid: boolean;
  // thirdFormIsValid: boolean;
}

const formSlice = createSlice({
  name: "form",
  initialState: {
    nickname: "",
    name: "",
    sername: "",
    phone: 1,
    email: "",
    sex: "man" || "woman",
    about: "",
    checkBox: 0,
    radioInput: "",
    firstFormIsValid: false,
    secondFormIsValid: false,
    advantages: [],
    thirdFormIsValid: false,
  },
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSername: (state, action: PayloadAction<string>) => {
      state.sername = action.payload;
    },
    setPhone: (state, action: PayloadAction<number>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSex: (state, action: PayloadAction<string>) => {
      state.sex = action.payload;
    },
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload;
    },
    setCheckBox: (state, action: PayloadAction<number>) => {
      state.checkBox = action.payload;
    },
    setRadioInput: (state, action: PayloadAction<string>) => {
      state.radioInput = action.payload;
    },
    addTodo: (state, action) => {
      state.advantages = action.payload;
    },
  },
});
export const selectFormData = (state: RootState) => state.form;

export const {
  setNickname,
  setName,
  setSername,
  setPhone,
  setEmail,
  setSex,
  setAbout,
  setCheckBox,
  setRadioInput,
  addTodo,
} = formSlice.actions;

export default formSlice.reducer;
