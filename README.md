
# Spring Boot Keycloak Integration

Ce dépôt GitHub offre une intégration fluide entre Keycloak, une solution de gestion des identités et des accès open source, et Spring Boot, un framework d'application Java. En combinant la puissance de ces deux technologies, ce projet fournit une solution robuste pour l'authentification, l'autorisation et la gestion des sessions dans les applications Java. Avec une configuration simple et des fonctionnalités avancées, cette intégration facilite le développement d'applications sécurisées et évolutives.

## List of dependencies
*Bakend*
- Spring WEB
- Spring Data JPA
- Spring Security
- SpringDoc OpenApi\
- Spring oauth2 ressource server
- Lombok
- h2

*Frontend*
- Keycloak Angular
- Keyclok JS

## List of dependencies
- Java 17+
- Maven
- Keycloak Server 21+

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Keycloak Setup
1. Download the [Keycloak](https://www.keycloak.org/downloads) server and unzip it in the directory of your choice.

2. Once the file has been unzipped, go to your server directory and run the following command:
```
bin/kc.bat start-dev --http-port 8180
```
By default the port used by Keyloak is 8080 you can omit the command ```--http-port 8180```

3. When creating your "Demo" realm, you can import data directly using the [realm-export](https://github.com/Hichem-Belhadj/oidc-keycloak/blob/main/doc/keycloak-realm/realm-export.json) json file available in the resources package.
