import * as path from 'node:path'

export function dateiEndungenErstellen(inhalteOrdner: string[]) {

// Ein Set nutzen wir für die duplikatenfreie Speicherung von Sachen
const endungen = new Set()

for (let i = 0; i < inhalteOrdner.length; i = i + 1) {
    const dateiName = inhalteOrdner[i] // Wir laden hier den aktuellen
    const dateiEndung = path.extname(dateiName) // Wir finden die Dateien

    console.log(dateiEndung)
    endungen.add(dateiEndung)
}

console.log(endungen)

}