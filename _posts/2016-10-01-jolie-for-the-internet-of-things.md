---
categories: projects
---
The [J<span class="text-primary">IoT</span>](http://www.cs.unibo.it/projects/jolie/jiot.html) project is aimed at integrating IoT-related technologies into the Jolie language.
The Internet of Things (IoT) promotes the communication among heterogeneous entities, from small sensors to Cloud systems. However, IoT systems tend to grow as homogeneous isolated platforms - usually referred as "IoT islands", which hardly interact.
To achieve a higher degree of interoperability among disparate IoT platforms, the JIoT project investigates how abstractions suitable for service-oriented and microservice architectures can aid integrating disparate IoT islands.
Jolie currently supports the main technologies from Service-Oriented Computing, such as TCP/IP, Bluetooth, and RMI at transport level, and HTTP and SOAP at application level.
The integration of IoT-specific protocols into the service-oriented setting of Jolie poses some interesting challenges, the two main being _i_) the integration of unreliable channels (UDP/CoAP) and _ii_) bridging the simple request-response communication style of Jolie with the peculiarities of the Publish/Subscribe communication pattern.

Useful links for further readings:

- University of Bologna -- [the J<span class="text-primary">IoT</span> project web page](http://www.cs.unibo.it/projects/jolie/jiot.html)
- [Docker image container for J<span class="text-primary">IoT</span> development on Docker Hub](https://cloud.docker.com/u/saltgz/repository/docker/saltgz/jolie), a list of example that uses J<span class="text-primary">IoT</span> is provided below.
  - [Blink a NodeMCU](https://bitbucket.org/spacesresearchgroup/blink-node-mcu/src) is a toy example that use J<span class="text-primary">IoT</span> to make a NodeMCU blink;
  - [Mr. Ugly Robot](https://bitbucket.org/saltgz/mr-ugly-robot) is a project to
  take control of drivable drone using microservices;
  - [JIoT for Home Automation](https://bitbucket.org/spacesresearchgroup/jiot-for-home-automation) is a demo project implementing simple temperature and light logic as a microservice.
