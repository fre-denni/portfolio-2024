# Personal Website Logbook 🐢

> **Siamo ufficialmente al 90%**
> *Daje forte*

Daily logbook per tenere conto dei cambiamenti da fare e dei bug noti

## Bug noti

> Qui una lista di tutti i bug che vengono riportati

### iOS

- ~~spaziatura strana su i link del footer, specialmente quelli riferenti ad i link social, probabile causa sono le immagini, non ci sono stili specifici per quei link, ma solo in generale~~

- Non c'è view transition, ma è normale, visto che non c'è l'API, o si aspetta o si può sostituire in un altro modo

- non compare il favicon

- ~~I padding sono fissi su dimensioni tablet, da cambiare in percentuale~~

> **IMPORTANTE**
> ~~da far testare su un safari da macbook~~
> fatto, funziona di cristo


### Mozilla

- ~~I bottoni delle tag hanno un aspetto molto low quality, inoltre il font è sbagliato~~ Da cambiare un pò le dimensioni delle varie box-shadow, font cambiato

- ~~il social link per instagram fa la microinterazione a differenza di altri browser~~ (adesso lo fanno tutti)

- anche qua non view transition

- quando si clicca sul logo nella pagina principale, non ricarica la pagina

## Lavoro da fare

> Divise per importanza <br/>
> Bisogna 🏃🏃🏃

- ~~Aggiungere progetti consigliati a pagina progetto~~
- ~~Progetti consigliati/nuovi per ordinare i progetti sull'homepage~~
- ~~Layout pagina about~~
    - ~~sezione interattiva~~
        - ~~tirare fuori idee~~
    - ~~Completa cv.md e impaginazione (script per automatizzare?)~~
        - ~~vedi come ha fatto tizio~~
        - ~~non aggiungere storia, aggiungi esperienze + cose che ti piacciono a griglia~~
    - ~~aggiungi link sotto immagine (read.cv && altri utili)~~
    - ~~Sezione side-quests~~
        - ~~custom card component~~
        - ~~iniziare a costruire link?~~
- ~~Aggiungi hidden header che si scopre quando scrolli verso l'alto~~
    - ~~aggiungi component ad header (hidden-menu)~~
        - ~~classi dovrebbero essere container -> site-menu -> e poi menu --> li con position fixed e un border bottom~~
        - ~~script che lo nasconde tranne quando navighi da giù in su e tranne quando arrivi in cima (magari z-index sotto l'header)~~

- ~~Aggiungere pagina 404 (link to anche per le side quests)~~
    - sarebbe carino aggiungere un'interazione tipo soft body seguendo esempio dancing man del the coding train
- Fare diverse dimensioni clip-path per immagini e farle cambiare in maniera responsive
    - quadrato, rettangolo basso e rettangolo alto

- Pulisci css
    - Tipografia && importare font giusti
    - Cambiare tutte le dimensioni a responsive (rem && %)
    - Fare variabili di testo globali
    - Fare contorno immagine responsive (quadrato, rettangolare basso, rettangolare alto)
        - aggiustare tutti i casini con le immagini
            1. imposta altezza e larghezza (vedi lavoro fatto per immagini page-about)
            2. crea delle immagini a differenti dimensioni e qualità (1280x914, 400x286, 768x549)
                - fai src set
                - abbina anche il clip-path proporzionato
            3. imposta a tutte le immagini
        
- Commenta Codice e costruisci una buona documentazione sul processo (immagini sopratutto!)
- 💃 Content Time! 💃
    - Obsidian setup && Scrivere content && raccogliere immagini

## Lavoro futuro!

> Progetti post-deployment

- Carosello per progetti consigliati su mobile
- Carosello immagini per heroshot && immagini progetto && immagini su homepage
- Cambiare progetti da markdown --> mdx
    - `<Image/>` astro component && Image collection