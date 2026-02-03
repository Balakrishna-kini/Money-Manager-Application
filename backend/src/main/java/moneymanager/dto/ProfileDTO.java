package moneymanager.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProfileDTO {

    private Long id;

    private String fullName;

    private String email;

    // Only use password when registering or updating; never return it in API
    // responses
    private String password;

    private String profileImageUrl;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
