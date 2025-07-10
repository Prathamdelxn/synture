import mongoose, { Schema } from 'mongoose';

const RecruiterSchema = new Schema(
  {
    companyName: { type: String, required: true },
    contactEmail: { type: String, required: true, unique: true },
    contactPhone: { type: String },
    password: { type: String, required: true },
    companyWebsite: { type: String },
    companyLogo: { type: String },
    description: { type: String },
    address: { type: String },
    //role: { type: String, default: 'recruiter' },

    postedJobs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],

    notifications: [
      {
        message: { type: String },
        read: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Recruiter || mongoose.model('Recruiter', RecruiterSchema);
