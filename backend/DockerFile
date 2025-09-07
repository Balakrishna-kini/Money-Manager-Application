# Use official OpenJDK 21 image
FROM eclipse-temurin:21-jdk-alpine

# Set work directory
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw pom.xml ./
COPY .mvn .mvn

# Copy source code
COPY src ./src

# Make mvnw executable
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# Expose port
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-Dserver.port=$PORT", "-Dspring.profiles.active=prod", "-jar", "target/*.jar"]
