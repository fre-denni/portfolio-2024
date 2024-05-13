# Personal Website Logbook 🐢

> **Siamo ufficialmente al 90%**
> *Daje forte*

Daily logbook per tenere conto dei cambiamenti da fare e dei bug noti

## Bug noti

> Qui una lista di tutti i bug che vengono riportati

### iOS

- spaziatura strana su i link del footer, specialmente quelli riferenti ad i link social, probabile causa sono le immagini, non ci sono stili specifici per quei link, ma solo in generale

- Non c'è view transition, ma è normale, visto che non c'è l'API, o si aspetta o si può sostituire in un altro modo

- I padding sono fissi su dimensioni tablet, da cambiare in percentuale

> **IMPORTANTE**
> da far testare su un safari da macbook


### Mozilla

- I bottoni delle tag hanno un aspetto molto low quality, inoltre il font è sbagliato

- il social link per instagram fa la microinterazione a differenza di altri browser

- anche qua non view transition

- quando si clicca sul logo nella pagina principale, non ricarica la pagina

## Lavoro da fare

> Divise per importanza <br/>
> Bisogna 🏃🏃🏃

- ~~Aggiungere progetti consigliati a pagina progetto~~
- ~~Progetti consigliati/nuovi per ordinare i progetti sull'homepage~~
- Layout pagina about
    - sezione interattiva
        - *tirare fuori idee*
    - aggiungi link sotto immagine (read.cv && altri utili)
- Aggiungere pagina 404
    - sarebbe carino aggiungere un'interazione tipo soft body seguendo esempio dancing man del the coding train
- Fare diverse dimensioni clip-path per immagini e farle cambiare in maniera responsive
    - quadrato, rettangolo basso e rettangolo alto
    - aggiungi snap-scrolling su y axis
- Pulisci css
    - Tipografia && importare font giusti
    - Cambiare tutte le dimensioni a responsive (rem && %)
    - Fare variabili di testo globali
    - Fare contorno immagine responsive (quadrato, rettangolare basso, rettangolare alto)
        - aggiustare tutti i casini con le immagini
- Commenta Codice e costruisci una buona documentazione sul processo
- 💃 Content Time! 💃
    - Obsidian setup && Scrivere content && raccogliere immagini

## Lavoro futuro!

> Progetti post-deployment

- Carosello per progetti consigliati su mobile
- Carosello immagini per heroshot && immagini progetto && immagini su homepage
- Cambiare progetti da markdown --> mdx
    - `<Image/>` astro component && Image collection