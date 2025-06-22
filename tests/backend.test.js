const fetch = require('node-fetch');

fetch('http://localhost:4000/libros')
  .then(res => {
    if (res.ok) {
      console.log("✅ Backend respondió correctamente.");
      process.exit(0);
    } else {
      console.error(`❌ Backend respondió con error HTTP: ${res.status}`);
      process.exit(1);
    }
  })
  .catch(() => {
    console.error("❌ El backend no respondió.");
    process.exit(1);
  });