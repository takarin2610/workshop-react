import { createSlice } from '@reduxjs/toolkit';
import {PARTNERS} from '../../app/shared/PARTNERS'

const initialState = {
    partnerArray: PARTNERS
};

const partnersSlice = createSlice({
    name: 'partners',
    initialState
});
export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
        return state.partners.partnerArray;
}

export const selectFeaturedPartner = (state) => {
    return state.partners.partnerArray.find((partner) => partner.featured);
}