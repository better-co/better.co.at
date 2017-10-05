---
title: Swarming
lede: Integration Hell vermeiden und besserer Code durch Swarming
---
Oft sehe ich Scrum Teams, das in einem Sprint fünf Stories im Sprint Backlog liegen und dann am Anfang alle Stories begonnen werden. Jeder Entwickler macht eine Story.

Der Burndown sieht dann so aus:

/Integration Hell.jpeg

Also am Anfang wird alles begonnen, dann passiert lange nichts und am Ende des Sprints werden alle Stories fertig und werden integriert.

Am Ende vom Sprint hat man jetzt einen Mega-Stress. Alle Bugs treten erst am Ende auf. Das ist die sogenannte „Integration Hell“.

Auch haben wir jetzt Multitasking, das generell weniger effektiv ist. Das ideale Work In Progress Limit sollte eigentlich 1 sein. Das heißt: es passiert kein Multitasking.

Nächstes Problem: Plannings sind lange und aufwendig, weil alle fünf Stories auf einmal im Planning durchgearbeitet werden. (Und auch mehrere Planning Events schaffen hier keine Abhilfe. Man reißt Leute nur öfter aus ihrer konzentrierten Arbeit raus.)

Außerdem: Ich beobachte dann auch, das zwar 100% der Features im Sprint umgesetzt werden, aber halt nur zu 80%. Weil jeder Entwickler seine Story macht haben wir hier nicht ein einziges Team, sondern 5 Teams zu je einer Person. In einem 1-Personen Team können nie alle Skills vorhanden sein. Also entweder wird die Story nicht 100% umgesetzt oder es treten wieder Abhängigkeiten auf zu anderen 1-Personen Teams. Beispiel: Developer hat eine Abhängigkeit vom Designer.

Wie können wir also jetzt effektiv Multitasking verhindern, gemeinsam an Stories arbeiten, Stories zu 100% abschließen und die „Integration Hell“ am Ende des Sprints vermeiden?

## Swarming schafft hier Abhilfe.

Beim Swarming verhält sich das Team mehr wie ein Schwarm. Also eigentlich mehr wie ein echtes Team, das aus mehreren Personen besteht und gemeinsam arbeitet. Nicht aus 5 Einzelpersonen, die jeweils ihre eigene Aufgabe abarbeiten, sondern 5 Personen die gemeinsam an einer einzigen Story arbeiten.

Beim Swarming wird das Work In Progress Limit auf eine Story pro Team begrenzt. Alle Team-Mitglieder planen gemeinsam eine Story und arbeiten solange gemeinsam an der selben Story bis die Story 100% fertig ist.

Wenn die Story implementiert ist, dann wird das Planning für die nächste Story aus dem Sprint Backlog gemacht und das Ganze geht von vorne los.

## Swarming löst auch Story Fragmentierung

Die „Story Fragmentierung“ ist für mich die Zerteilung eines Features in zu viele kleine Einzelstories. Diese kleinen Stories liefern an sich keinen Wert für den Kunden. Oft sind das Backlogs, wo es eine Frontend und eine Backend Story gibt. Weder die Frontend oder die Backend Story liefert an sich einen Wert. Nur beide gemeinsam.

Warum passiert das? Weil Stories für die Parallelisierung geschrieben wurden. Damit jede Story von einer Einzelperson umgesetzt werden kann.

Beim Swarming können Stories in einer sinnvolleren Größe verbleiben, weil alle Team-Mitglieder immer gemeinsam an der selben Story arbeiten. So bleibt die Story etwas, das wirklich Wert an den Kunden liefert sobald sie umgesetzt wurde.

## Swarming verhindert „Integration Hell“

Da jede Story einzeln abgearbeitet wird, sieht der Burndown in etwa so aus:

/Untitled.jpeg

Dadurch passiert Integration immer wieder während des Sprints. Und nicht mit allen Stories am Ende des Sprints.

## Wie mache ich…

### …Planning?

Nicht ein Planning Event am Anfang vom Sprint. Sondern Planning nachdem eine Story vom PO akzeptiert wurde.

Das hat folgende Vorteile:

- Es gibt nicht ein langes Planning Event, sondern kleinere überschaubarere Events, wo das Team konzentrierter arbeitet
- Stories werden unmittelbar vor dem Beginn der Implementierung in Tasks aufgeteilt. So wird der Plan dann erstellt, wenn die Story auch wirklich durchgeführt wird.

### …Acceptance Testing?

Der PO macht das Acceptance Testing direkt gemeinsam mit dem Team, das auch während der Acceptance Phase schwärmt. Der PO testet und das Team bearbeitet als Ganzes sofort gemeinsam mit dem PO die aufgeworfenen Probleme.

So kann das Team die Probleme auch sofort abarbeiten. Der PO kann sich so auch immer auf die momentane Story konzentrieren und macht nicht das Acceptance Testing für 5 Stories gleichzeitig.

### …Design?

Alle Team-Mitglieder von Anfang an auch schon in der Design Phase involvieren. Visuelle Designs können ohne Feedback von Entwicklern im Team sowieso nie umgesetzt werden. Beim Swarming kommt hier das Entwickler-Feedback unmittelbar und kann sofort berücksichtigt werden. Es gibt keinen Hand-Off zwischen Designer und Entwickler. Natürlich hängt Erfolg hier auch von einer Kultur des Experimentierens ab. Neinsager haben in so einem Prozess nichts verloren.

### …Tasks?

Eine Story kann (und muss) natürlich immer noch auf mehrere Tasks aufgeteilt werden. Verschiedene Team-Mitglieder haben verschiedene Vorlieben. Nur arbeiten alle Team-Mitglieder immer nur an der selben Story. Es gibt keine Tasks zu einer neuen Story, solange nicht alle Tasks der momentanen Story abgeschlossen wurden.
