# Use full Java 21 JDK (not Alpine) to avoid Maven build issues
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw pom.xml ./
COPY .mvn .mvn

# Copy source code
COPY src ./src

# Make Maven wrapper executable
RUN chmod +x mvnw

# Build the project using Maven wrapper, skip tests
RUN ./mvnw clean package -DskipTests

# Rename/copy the JAR to a fixed name (app.jar)
RUN cp target/*-SNAPSHOT.jar app.jar

# Expose the port (Render will assign $PORT)
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-Dserver.port=${PORT}", "-Dspring.profiles.active=prod", "-jar", "app.jar"]
