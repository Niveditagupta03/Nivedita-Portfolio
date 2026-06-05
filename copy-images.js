const fs = require("fs");
const path = require("path");

const filesToCopy = [
  {
    src: "C:\\Users\\niveditani\\.gemini\\antigravity\\brain\\ee8f5a0d-d7e2-40d8-b5c3-c7c4d4579954\\developer_hero_1780657036749.png",
    dest: "d:\\Projects\\Nivedita-Portfolio\\public\\developer_hero.png"
  },
  {
    src: "C:\\Users\\niveditani\\.gemini\\antigravity\\brain\\ee8f5a0d-d7e2-40d8-b5c3-c7c4d4579954\\developer_about_1780657054444.png",
    dest: "d:\\Projects\\Nivedita-Portfolio\\public\\developer_about.png"
  },
  {
    src: "C:\\Users\\niveditani\\.gemini\\antigravity\\brain\\ee8f5a0d-d7e2-40d8-b5c3-c7c4d4579954\\developer_contact_1780657070126.png",
    dest: "d:\\Projects\\Nivedita-Portfolio\\public\\developer_contact.png"
  }
];

filesToCopy.forEach(file => {
  try {
    fs.copyFileSync(file.src, file.dest);
    console.log(`Successfully copied to ${file.dest}`);
  } catch (err) {
    console.error(`Error copying ${file.src}:`, err.message);
  }
});
