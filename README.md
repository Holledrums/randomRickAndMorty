# rick-and-morty-fetch

Ein Programm, das mit der [Rick-and-Morty-API](https://rickandmortyapi.com/documentation) arbeiten soll

### Funktionalität
- Das Programm soll Daten zu einem zufälligen Charakter von der API laden
- Ein Bild des Charakters soll auf der Seite angezeigt werden, sowie eine Begrüßung 'Hi, I'm `name`!'

### Anleitung
- Erstelle eine HTML- und eine JS-Datei
- Eine Liste aller Charaktäre im JSON-Format kann von hier geladen werden: [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)
- Verwende `fetch` um die Liste zu laden und die `.json()`-Methode des Response-Objekts um das JSON in ein Objekt umzuwandeln
- Analysiere das Objekt und finde heraus, wie du die Anzahl der Charaktäre bekoomst
- Generiere eine Zufallszahl zwischen 1 und der Anzahl der Charaktäre
- Hol die Daten eines Charakters mit der Zufalszahl aus der Liste der Charaktäre im Objekt
- Analysiere das Charakter-Objekt und finde heraus, wie man die URL für das Bild des Charakters bekommt
- Modifiziere das HTML mit DOM so, dass das Bild auf der Seite angezeigt wird, sowie der Name des Charakters
