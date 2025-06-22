let libros = [];

exports.getLibros = (req, res) => res.json(libros);

exports.createLibro = (req, res) => {
  const libro = req.body;
  libros.push(libro);
  res.status(201).json(libro);
};