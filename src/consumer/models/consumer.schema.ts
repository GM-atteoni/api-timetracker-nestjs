import * as mongoose from 'mongoose';

export const ConsumerSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  fotoPerfil: String,
});