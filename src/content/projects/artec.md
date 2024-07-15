---
title: ART.E.C.
time: 02-23 to 09-23
description: AR/AI Art Experiments
card: make an AR art experience detecting emotion using machine learning
image:
  url: /images/artec.gif
  alt: heroshot
role:
  - Research
  - Prototype development
  - AI development
  - Unity Prototype
team:
  - Samuele Cellura
  - Mayukh Das
  - Defne Kocamustafaogullari
links:
  - https://drive.google.com/file/d/1E6rUKsZMTS4xq239IXRCzzSRbvqBiJ6i/view?usp=sharing
  - https://vimeo.com/981345063?share=copy
taglinks:
  - Project Report
  - Video Presentation
tags:
  - AI
  - UX-Research
type: None
draft: true
---
### With ART.E.C. (Augmented Reality Trough Emotional Computing) we aimed to discover how an interactive art museum experience could change by introducing an emotional factor. <br/> Through the use of emotion recognition models and bio-metric sensors, we built an art installation that would react to the spectator's emotion, by changing the appearance of the painting thanks to the power of AR.

#### HOW EMOTIONS PLAY IN ART EXPERIENCES?

We were tasked to find a novelty way to put emotion recognition models in art experiences, finding ways in which Since the beginning we decided that our objective would be to enhance the artworks **while maintaining the power of communication of the original artwork**, making little changes in the compositions, colors, or adding sounds with the scope of not overcoming the artworks, as it was already in the scope of the artist to makes the viewers reason and feel their message.

<div class="image">
<div style="padding:56.25% 0 0 0;position:relative;margin-bottom:30px;"><iframe src="https://player.vimeo.com/video/981345063?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ARTEC"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
</div>

---
#### DEVELOPMENT

<div class="image">

![testing](../../assets/hacko-heroshot.jpg)

</div>

We started by testing and collecting emotional responses to artworks by measuring the facial changes and the BPMs of our test subjects, and then we used this data, together with already existing and open-to-public facial expressions image databases, to mash together our emotion recognition model using [Teachable Machine](https://teachablemachine.withgoogle.com/).
The emotion caught by the camera would then be compared with the BPM levels read through a ring wearable, that would connect via Bluetooth to the phone.

<div class="image">

![how the system works](../../assets/hacko-heroshot.jpg)

</div>

The rest of the AR app was built with the Unity engine using [Vuforia](https://developer.vuforia.com/home), which we set on 4 paintings that are present in the Museo del 900 collection in Milano.

For each painting, we thought of ways that we could play with them without overcoming too much of the original intent of the painting.

<div class="image">

![paintings](../../assets/hacko-heroshot.jpg)

</div>


