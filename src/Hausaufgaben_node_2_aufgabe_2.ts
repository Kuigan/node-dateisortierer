  // Einbindung des FileSystem-Moduls von Node.js
import * as fs from 'node:fs'

// Definition der Funktion createDirs mit zwei Parametern: folderPath und folderNames
function createDirs(folderPath: string, folderNames: string[]): void {
  // Überprüfen, ob der Hauptordner existiert
  if (!fs.existsSync(folderPath)) {
    // Wenn der Hauptordner nicht existiert, erstellen wir ihn synchron
    fs.mkdirSync(folderPath);
  }

  // Schleife über alle Ordner in folderNames
  for (let folderName of folderNames) {
    // Der vollständige Pfad für den aktuellen Ordner wird gebildet
    const folder = `${folderPath}/${folderName}`;
    // Überprüfen, ob der Ordner existiert
    if (!fs.existsSync(folder)) {
      // Wenn der Ordner nicht existiert, wird er synchron erstellt
      fs.mkdirSync(folder);
      // Eine Meldung wird ausgegeben, um anzuzeigen, dass der Ordner erstellt wurde
      console.log(`Ordner ${folder} erstellt.`);
    } else {
      // Wenn der Ordner bereits existiert, wird eine Meldung ausgegeben
      console.log(`Ordner ${folder} existiert bereits.`);
    }
  }
}

// Aufruf der Funktion createDirs mit dem Hauptordnerpfad und den zu erstellenden Unterordnern
createDirs("./output", [".png", ".mp4", ".gif"]);
