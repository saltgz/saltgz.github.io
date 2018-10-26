---
layout: post
title: JIoT
published: true
categories: projects
---

![jiot](assets/img/jiot_logo.png){:width="216px" margin-right="15px" class="pull-right"}

The [JIoT](http://www.cs.unibo.it/projects/jolie/jiot.html) project is aimed at integrating IoT-related technologies into the Jolie language. 
The Internet of Things (IoT) promotes the communication among heterogeneous entities, from small sensors to Cloud systems. However, IoT systems tend to grow as homogeneous isolated platforms - usually referred as "IoT islands", which hardly interact. 
To achieve a higher degree of interoperability among disparate IoT platforms, the JIoT project investigates how abstractions suitable for service-oriented and microservice architectures can aid integrating disparate IoT islands.
Jolie currently supports the main technologies from Service-Oriented Computing, such as TCP/IP, Bluetooth, and RMI at transport level, and HTTP and SOAP at application level.
The integration of IoT-specific protocols into the service-oriented setting of Jolie poses some interesting challenges, the two main being *i*) the integration of unreliable channels (UDP/CoAP) and *ii*) bridging the simple request-response communication style of Jolie with the peculiarities of the Publish/Subscribe communication pattern.

Useful links for further readings:
- [University of Bologna - JIoT](http://www.cs.unibo.it/projects/jolie/jiot.html)
- [Docker image container for JIoT development - Docker Hub](https://hub.docker.com/r/saltgz/jiot/), a list of example that uses JIoT is provided below.
  - [Blink a NodeMCU](git@bitbucket.org:spacesresearchgroup/blink-node-mcu.git) is a toy example that use JIoT to make a NodeMCU blink;
  - [Mr. Ugly Robot](https://bitbucket.org/saltgz/mr-ugly-robot) is a drivable drone;
  - [JIoT for Home Automation](https://bitbucket.org/spacesresearchgroup/jiot-for-home-automation) implementing simple temperature and light logic.
