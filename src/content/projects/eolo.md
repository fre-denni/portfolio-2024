---
title: EOLO
time: one month project
description: Playful Experience
card: making a puzzle-platform game for children as a disguise for a spirometry test
image:
  url: /images/eolo.jpg
  alt: heroshot
role:
  - Game design
  - Prototype development
  - Assets and Illustrations
team:
  - Only me!
links:
  - https://vimeo.com/981340667?share=copy
taglinks:
  - Video of the gameplay
tags:
  - Prototyping
type: None
draft: true
---
### Eolo is a puzzle-platform game that works as a way to do a spirometry test by adding a playful spin to the game commands. In the game, you are a castaway who is blocked on a lost island and finds a magical vuvuzela that can bring forth the power of the winds to push the raft away to safety and home. But be aware sailor, there are dangers in the water.

#### PLAYFUL EXPERIENCE

If you put a paper boat in a speck of water and blow on it using a straw, you could actually make it float away and make races with your friends to determine which boat is the fastest or, more realistically, which one of you has the best pulmonary capacity. 

In [spirometry](https://en.wikipedia.org/wiki/Spirometry), it is common to have little games to play using your breath strength, to take away all the medical formalities and have a playful experience, and this inspired me to make a little game prototype, that could mirror the joy of a paper boat race.

<div class="image">

![blow](../../assets/eolo-inspo.jpg)

</div>

---
#### FLOW OF DATA

<div class="image">

![gameplay flow](../../assets/eolo-flow.jpg)

</div>

The test data are all collected on a company app for the doctors, called EOLO DOC. This app is used to set the calibration for the pulmonary flow, and then that will become the difficulty level of the game. <br/>
By evading all the perils, the app will interpret and show the final test results when the player finish the game.

Here you can see a gameplay example:

<div class="image"><div style="padding:56.25% 0 0 0;position:relative;margin-bottom:30px;"><iframe src="https://player.vimeo.com/video/981340667?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="eolo-gameplay-demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> </div>

---

#### DEVELOPMENT

For the development, I used [Protopie](https://www.protopie.io/) to prototype the game and the doctor app to a mid-fi level, making all the animations and connecting the data together between the two apps. All the game and app UI and assets were made by me on Figma, I was inspired by the Monkey Island games for the looks.

The controller is a 3D printed vuvuzela with a micro-controller on the inside, that has an on-board microphone and accelerometer and communicates with the apps via a local server. Using a microphone to measure the blow strength is a practice that [has been theorized](https://homes.cs.washington.edu/~shwetak/papers/SpiroSmart.CR.Final.pdf) in self-testing at home, but lacks medical precision. 
For my purpose was enough but in the future development of this game, it could be interesting to remake it by hacking a spirometer gun.


<div class="image">

![vuvuzela](../../assets/eolo-vuvuzela.jpg)

</div>

<div class="image">

![game design](../../assets/eolo-assets.jpg)

</div>

