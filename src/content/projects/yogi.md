---
title: YOGI
time: three weeks workshop
description: Edge AI for IoT
card: teaching AI to protect woods from fire
image:
  url: /images/hacko-2.png
  alt: heroshot
made: with ELISAVA
role:
  - Hardware & Software Design
  - UX/UI Design
  - Research
  - AI development
team:
  - Andrea Fiocca
links:
  - https://docs.google.com/document/d/1hi1jR4ESfe1POSv9JZn9NwBBKJ816eptPMsYZgj9e_Y/edit#heading=h.g7mrpp73l7v8
taglinks:
  - Project Report
tags:
  - Prototyping
  - AI
type: New
draft: true
---
## YOGI is an IoT device capable of detecting ILRs (Ignitable Liquid Residues) and Early Wildfire Gasses where it is deployed, providing the possibility of being deployed in arrays in areas where droughts and climate change could make more possible the risk of wildfire, helping in fast response and detection of arson-related organized crime. The system is supported by LoRa and LoRaWan protocols, permitting long-distance monitoring and communication.


#### HOW THE SYSTEM WORKS

On each Yogi device there is a VOC reading sensor that we trained to identify the difference between air particles and other dangerous gasses, thanks to this we basically have an electronic nose powered by Machine Learning that is capable of alerting us if a fire starts in its vicinity.

Each device goes through a period of sleeping and sniffing that permits lower power consumption and runs the machine learning model on the edge, making it viable to deploy also in places that are distant from human zones. Thanks to the LoRa system this distance can also grow to various kilometers.

<div class="image">

![system works](/images/hacko-1.png)

</div>

<div class="image">

![yogi-prototype](/images/hacko-1.png)

</div>

<div class="image">

![glamour-shotimages/hacko-1.png)

</div>

---

#### FUTURE DEVELOPMENTS

We are now working to make Yogi an open-source kit that is easy for people to modify and use, for this reason, we are also looking at other cheaper and open-source sensors, in order to make a design more accessible.

<div class="image">

![glamour-shotimages/hacko-1.png)

</div>