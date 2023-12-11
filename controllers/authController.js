const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/userModel');

const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Gerar token JWT
    const token = jwt.sign({ userId: user.id }, 'seuSegredoAqui', {
      expiresIn: '1h', // Define a expiração do token
    });

    // Armazenar o token no cookie
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Autenticação bem-sucedida', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
