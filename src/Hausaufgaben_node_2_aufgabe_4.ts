function getRandomElementFromList(list: string[]): string {
    // Generiere eine zufällige Indexzahl im Bereich von 0 bis zur Länge der Liste - 1
    const randomIndex = Math.floor(Math.random() * list.length);
  
    // Gib das Element an diesem zufälligen Index zurück
    return list[randomIndex];
  }
  
  // Beispielaufruf der Funktion mit der gegebenen Liste
  const endungen = [
    ".txt",
    ".png",
    ".mp4",
    ".gif",
    ".jpg",
    ".pdf",
    ".docx",
    ".xlsx",
    ".pptx",
  ];
  
  const zufälligesElement = getRandomElementFromList(endungen);
  console.log("Zufälliges Element:", zufälligesElement);
  