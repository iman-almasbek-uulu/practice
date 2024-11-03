"use client"

// src/features/universities/universitiesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface University {
  name: {
    en: string;
    ru: string;
    ky: string;
  };
  country: {
    en: string;
    ru: string;
    ky: string;
    flag: string;
  };
  location: {
    en: string;
    ru: string;
    ky: string;
  };
  established: number;
  specialization: {
    en: string;
    ru: string;
    ky: string;
  };
  type: {
    en: string;
    ru: string;
    ky: string;
  };
  language: {
    en: string;
    ru: string;
    ky: string;
  };
  description: {
    en: string;
    ru: string;
    ky: string;
  };
}

interface UniversitiesState {
  universities: University[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UniversitiesState = {
  universities: [],
  status: 'idle',
  error: null,
};

export const fetchUniversities = createAsyncThunk('universities/fetchUniversities', async () => {
  const response = await axios.get<University[]>('https://65ed686c0ddee626c9b197ce.mockapi.io/study');
  return response.data;
});

const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniversities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUniversities.fulfilled, (state, action: PayloadAction<University[]>) => {
        state.status = 'succeeded';
        state.universities = action.payload;
      })
      .addCase(fetchUniversities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load data';
      });
  },
});

export default universitiesSlice.reducer;
