import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    role: { type: String, default: 'user' },
    skillLevel: {type: String },

    skills: { name: { type: String } },

    experience: [
      {
        title: { type: String },
        company: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String },
        isCurrent: { type: Boolean },
      },
    ],

    education: [
      {
        degree: { type: String },
        institution: { type: String },
        year: { type: Number },
      },
    ],

    certifications: [
      {
        name: { type: String },
        issuer: { type: String },
        date: { type: Date },
      },
    ],

    appliedJobs: [
      {
        job: {
          type: Schema.Types.ObjectId,
          ref: 'Job',
        },
        appliedAt: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          default: 'applied',
        },
      },
    ],

    savedJobs: [
      {
        job: {
          type: Schema.Types.ObjectId,
          ref: 'Job',
        },
        savedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    connections: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],

    notifications: [
      {
        message: { type: String },
        read: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
