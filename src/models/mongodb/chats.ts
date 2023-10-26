import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const chats = new Schema(
    {
        id_us: { type: [String] },
        users: { type: [], require: false },
        user: {
            id: { type: String, maxLength: 50 },
            fullName: { type: String, maxLength: 30 },
            avatar: { type: Buffer },
            gender: { type: Number, maxLength: 1 },
        },
        deleted: [
            {
                id: { type: String, maxLength: 50 },
                createdAt: {
                    // user's deleting time
                    type: Date,
                    default: Date.now(),
                },
                show: { type: Boolean, maxLength: 5, default: true },
            },
        ],
        status: { type: String, maxLength: 11 },
        first: { id: { type: String, maxLength: 50 } },
        background: { type: String, maxLength: 50 },
        room: [
            {
                id: { type: String, required: true, maxLength: 50 },
                _id: { type: String, required: true, maxLength: 50 },
                text: {
                    t: { type: String, text: String },
                    icon: { type: String, default: '' },
                },
                imageOrVideos: [
                    {
                        type: { type: String, maxLength: 20 },
                        _id: { type: String, maxLength: 50, unique: true },
                        v: { type: String, maxLength: 50 },
                        icon: { type: String, maxLength: 1, default: '' },
                    },
                    { _id: false },
                ],
                delete: { type: String, maxLength: 50, default: '' },
                seenBy: { type: [String], maxLength: 50 },
                createdAt: { type: Date, default: Date.now() },
                updatedAt: { type: Date, default: '' },
            },
            { _id: false },
        ],
        createdAt: { type: Date, default: Date.now() },
    },
    {
        timestamps: true,
    },
);
export const RoomChats = mongoose.model('chats', chats);
