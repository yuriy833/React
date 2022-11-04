import { configureStore } from "@reduxjs/toolkit"
import { profileReducer, chatsReducer, newsReducer, messageReducer, userReducer } from "../slices/slices"

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chats: chatsReducer,
        message: messageReducer,
        news: newsReducer,
        user: userReducer,
    },
})

