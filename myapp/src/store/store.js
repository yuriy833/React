import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { profileReducer, chatsReducer, newsReducer, messageReducer } from "../slices/slices"
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer,
    news: newsReducer,
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);


