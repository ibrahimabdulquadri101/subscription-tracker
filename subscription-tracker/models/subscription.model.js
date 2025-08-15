import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription Name is required"],
      trim: true,
      minLength: 5,
      maxLength: 10,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Minimum price is 0"],
    },
    currency: {
      type: String,
      enum: ["USD", "NGN", "GBP"],
      default: "NGN",
    },
    frequency: {
      type: String,
      enum: ["monthly", "daily", "yearly", "weekly"],
    },
    category: {
      type: String,
      enum: [
        "Entertainment",
        "lifestyle",
        "Food",
        "Utilities",
        "Health",
        "technology",
        "Other",
      ],
      required: [true, "Category is required"],
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "expired", "cancelled"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
      validate: {
        validator: function (v) {
          return v <= new Date();
        },
        message: "Start date cannot be in the future",
      },
    },
    renewalDate: {
      type: Date,
      required: [true, "Renewal date is required"],
      validate: {
        validator: function (v) {
          return v >= this.startDate;
        },
        message: "Renewal date must be after the start date",
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
  },
  { timestamps: true }
);

subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDates) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 1,
    };
    this.renewalDate =  new Date(this.startDate)
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency])
  }
  if(this.renewalDate < new Date()){
      this.status = 'expired'
  }
  next()
});

const Subscription = mongoose.model("Subscription" , subscriptionSchema)

export default Subscription