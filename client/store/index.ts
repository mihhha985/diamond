import { configureStore } from '@reduxjs/toolkit';
import alertsSlice from './features/alertsSlice';
import profileSlice from './features/profileSlice';
import mailerSlice from './features/mailerSlice';
import paymentSlice from './features/paymentSlice';

export const store = configureStore({
  reducer: {
		modals: alertsSlice,
		profile: profileSlice,
		mailer: mailerSlice,
		payment: paymentSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch