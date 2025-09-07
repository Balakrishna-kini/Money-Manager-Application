# Use official OpenJDK 21 image
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copy pom.xml and source
COPY pom.xml ./
COPY src ./src

# Install Maven
RUN apk add --no-cache maven

# Build project using system Maven
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-Dserver.port=$PORT", "-Dspring.profiles.active=prod", "-jar", "target/*.jar"]
