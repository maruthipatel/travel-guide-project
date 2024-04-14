

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const diaryEntryRoutes = require('./routes/diaryEntryRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/travel_diary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/diary', diaryEntryRoutes);

// Global error handling middleware
app.use(errorMiddleware.handleError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));