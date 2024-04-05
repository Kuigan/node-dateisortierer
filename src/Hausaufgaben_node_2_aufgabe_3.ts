import * as fs from 'node:fs'
import * as path from 'node:path'


// Definition der Funktion copyFilesByExtension mit zwei Parametern: sourceDir und destinationDir
function copyFilesByExtension(sourceDir: string, destinationDir: string) {
    // Lese den Inhalt des Quellordners
    const files = fs.readdirSync(sourceDir);
  
    // Schleife über alle Dateien im Quellordner
    files.forEach(file => {
      // Bestimme den vollen Pfad der Datei
      const sourceFile = path.join(sourceDir, file);
  
      // Überprüfe, ob es sich bei dem Element um eine Datei handelt
      if (fs.statSync(sourceFile).isFile()) {
        // Ermittle die Dateiendung
        const extension = path.extname(file);
        
        // Erstelle das Zielverzeichnis basierend auf der Dateiendung
        const destinationSubDir = path.join(destinationDir, extension);
  
        // Überprüfe, ob das Zielverzeichnis existiert, andernfalls erstelle es
        if (!fs.existsSync(destinationSubDir)) {
          fs.mkdirSync(destinationSubDir, { recursive: true });
        }
  
        // Kopiere die Datei in das Zielverzeichnis
        const destinationFile = path.join(destinationSubDir, file);
        fs.copyFileSync(sourceFile, destinationFile);
        console.log(`Datei ${file} nach ${destinationFile} kopiert.`);
      }
    });
  }
  
  // Beispielaufruf der Funktion
  copyFilesByExtension("./input", "./output");