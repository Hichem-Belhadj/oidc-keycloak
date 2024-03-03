
# Spring Boot Keycloak Integration

This GitHub repository offers seamless integration between Keycloak, an open source identity and access management solution, and Spring Boot, a Java application framework. By combining the power of these two technologies, this project provides a robust solution for authentication, authorization and session management in Java applications. With simple configuration and advanced features, this integration facilitates the development of secure, scalable applications.

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
