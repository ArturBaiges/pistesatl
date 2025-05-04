# 🏃‍♂️ pistesatl

## ‼️ Tema i motivació

La meva web **“PISTES”** té com a objectiu donar un servei a **atletes** i **aficionats a l’esport**.  
La web proporciona un **anàlisi de totes les pistes d’atletisme** que es poden trobar al **Camp de Tarragona**.

He escollit aquesta temàtica perquè l’**atletisme ha estat una part fonamental** de la meva vida.  
Durant molts anys vaig ser **atleta del Club Natació Reus Ploms**, i actualment sóc **entrenador d’atletisme**.  
Crear aquesta web representa un **homenatge** a tot el que aquest esport m’ha aportat.

**Objectiu principal de la plataforma:**  

🔎 Oferir informació útil per a **atletes, aficionats a córrer** i **entrenadors**, destacant els equipaments de cada pista.

Conèixer **els equipaments disponibles** és fonamental per preparar una competició, i jo com a entrenador m'he trobat en situacions complicades per no disposar de la informació amb antelació.

**Visibilitzar l’atletisme**:

Al Camp de Tarragona, l’atletisme sovint ha quedat **a l’ombra** d'altres esports més populars com el futbol o el bàsquet.  
Aquesta web també pretén:

- 🫵 **Donar visibilitat** a l’atletisme.
- 🫵 **Difondre** la seva riquesa i diversitat de disciplines.
- 🫵 **Fomentar** una major pràctica esportiva.

## 🗂️🤖 Dades i continguts

Per a l’elaboració de la web, s’han utilitzat dades de diverses fonts:

### 📷 Fotografies i informació:

- Les fotografies són de les pàgines oficials de cada pista del Camp de Tarragona i d'altres estan creades amb IA.
- La informació sobre cada pista, en alguns casos, ha estat extreta de fonts oficials, i en altres ha estat creada expressament per completar el contingut.

## 🧩 Estructura i presentació de la web

La web està organitzada en diverses pestanyes, accessibles a través del menú principal.

### 📂 Seccions principals

- **Inici**: Breu presentació de la web i de la seva motivació.
- **Informació**: Informació sobre la ubicació i horaris de cada pista d’atletisme.
- **Equipaments**: Secció interactiva que permet consultar quins equipaments té cada pista.
- **Mapa**: Integració d'un mapa interactiu amb la localització exacta de les instal·lacions.
- **Contacte**: Formulari per rebre comentaris, dubtes o suggeriments.

### 🤔 Decisions de disseny i presentació

- ✅ **Organització visual clara** amb encapçalaments i separació de continguts per facilitar la lectura.
- ✅ **Separació entre estructura i estil**: l'HTML i el CSS es mantenen ben diferenciats.
- ✅ **Botó de “pujar amunt”** per millorar la navegació.
- ✅ **Uniformitat cromàtica** i estilística a tota la web.
- ✅ S’ha aplicat el framework **Bootstrap** per millorar el disseny visual, facilitar la responsivitat i implementar components ja formats, com el sistema de columnes, galeries i botons.

### 🕴️ Representació visual

- 📷 Galeries d’imatges per enriquir la descripció de les pistes.
- 📋 Presentació clara dels horaris i serveis de cada instal·lació.
- 🗺️ Mapa interactiu per ubicar fàcilment les pistes al territori.

## 📱 Web responsive

Un objectiu tècnic ha estat que la web fos completament accessible des de qualsevol dispositiu: ordinador, tauleta o mòbil.

### 🧩👾 Tècniques de disseny responsive aplicades

- ✅ **Media queries**: s’han aplicat regles CSS condicionals (`@media`) que permeten ajustar els estils quan la pantalla és petita o gran . Això ha permès:
  - Reduir o augmentar marges i mides de text segons la resolució.
  - Apilar els elements verticalment en comptes de posar-los en fila.
  - Centrar i redimensionar correctament contenidors i imatges.

- ✅ **Framework Bootstrap**: s’ha integrat aquest framework per aprofitar el seu sistema de grilles (`grid system`) i les seves classes responsive. Concretament:
  - S’han fet servir `container`, `row`, `col-md-*` per distribuir el contingut en columnes que s’ajusten segons la mida del dispositiu.
  - Les imatges tenen `class="img-fluid"` per adaptar-se automàticament a l’amplada del contenidor.
  - S’han emprat components com **botons**, **menús** i **targetes** amb classes que ja inclouen comportament responsive per defecte (`p-*`, `m-*`, `d-*`).
  - A més, Bootstrap ha permès mantenir una estètica uniforme, amb marges i tipografies coherents en qualsevol pantalla.

- ✅ **Imatges flexibles** amb `max-width: 100%` i `height: auto` per garantir que mai desbordin el seu contenidor i es vegin bé tant en mòbils com en escriptoris.

- ✅ Menú i elements adaptats per a la navegació tàctil: el menú principal es converteix en un **menú hamburguesa** funcional quan la pantalla és petita. Està programat amb JavaScript i manté l’accessibilitat tàctil.

- ✅ Estructuració clara entre contingut (`HTML`) i estils (`CSS`) per facilitar l'escalabilitat i adaptar el disseny amb agilitat en funció dels dispositius.


### 🖼️🏙️ Optimització de recursos visuals

- 📸 Imatges optimitzades en resolució i mida per reduir el temps de càrrega.
- 📁 Organització coherent dins la carpeta `imatges/`.
- 🧹 Revisions manuals per assegurar una correcta visualització en totes les resolucions.

## 🗺️ Cartografia

Per representar la localització de les pistes d'atletisme:

- 🗺️ Inicialment s’utilitzava **Google Maps Embed**, però posteriorment s’ha substituït per un **mapa interactiu creat amb QGIS** i exportat amb el complement `qgis2web`.
- 📍 Cada pista es representa amb una icona clicable que mostra:
  - El nom de la pista.
  - Els horaris d’obertura.
  - Els equipaments disponibles.
  - Un enllaç a la Federació Catalana d’Atletisme.
  - Un histograma d’afluència en format `.svg`.
- 🧭 El mapa ha estat integrat dins la web amb un `iframe` i és completament **navegable i interactiu**.
- 🔎 El mapa manté la seva funcionalitat i adaptabilitat en qualsevol dispositiu.

## 💬🤔 Dificultats i possibles millores

Durant el desenvolupament de la web s’han trobat diverses dificultats que han requerit esforç i adaptació:

### ⚠️ Dificultats trobades

- 🔁 **Coherència visual**: mantenir una estètica homogènia en totes les seccions va requerir atenció contínua.
- 🎨 **Integració d'un framework CSS**: aplicar-lo sense perdre funcionalitats existents va ser especialment laboriós.
- 📱 **Adaptació responsive**: ajustar correctament elements com formularis, imatges i mapes a tots els formats de pantalla va ser un desafiament constant.
- 🧠 **Entendre el funcionament del codi**: comprendre com interactuaven l’HTML, el CSS i el JavaScript va ser fonamental per construir la web amb garanties.
- 🗺️ **Configuració del mapa amb QGIS**: entendre el funcionament del plugin qgis2web, la gestió dels fitxers exportats i la integració correcta amb la web va requerir temps i proves.

### 🌱 Possibilitats de millora

- 💡 Afegir un **filtre de cerca** per localitzar ràpidament pistes o equipaments.
- 🌐 **Expandir** la base de dades amb més municipis i pistes.
- 🖼️ Enriquir la web amb **efectes visuals** com animacions o transicions suaus.
- 👁️‍🗨️ Incorporar **millores d'accessibilitat** per a tots els públics.

