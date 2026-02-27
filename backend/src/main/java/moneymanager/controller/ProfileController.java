package moneymanager.controller;

import moneymanager.dto.AuthDTO;
import moneymanager.dto.ProfileDTO;
import moneymanager.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1.0/auth") // Combined with endpoints below, matches frontend exactly
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    // ✅ POST: /api/v1.0/auth/register
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerProfile(@RequestBody ProfileDTO profileDTO) {
        ProfileDTO registeredProfile = profileService.registerProfile(profileDTO);

        AuthDTO authDTO = new AuthDTO();
        authDTO.setEmail(registeredProfile.getEmail());
        authDTO.setPassword(profileDTO.getPassword()); 

        Map<String, Object> response = profileService.authenticateAndGenerateToken(authDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // ✅ POST: /api/v1.0/auth/login
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody AuthDTO authDTO) {
        Map<String, Object> response = profileService.authenticateAndGenerateToken(authDTO);
        return ResponseEntity.ok(response);
    }

    // ✅ GET: /api/v1.0/auth/profile
    @GetMapping("/profile")
    public ResponseEntity<ProfileDTO> getCurrentProfile() {
        ProfileDTO profileDTO = profileService.getPublicProfile(null);
        return ResponseEntity.ok(profileDTO);
    }
}