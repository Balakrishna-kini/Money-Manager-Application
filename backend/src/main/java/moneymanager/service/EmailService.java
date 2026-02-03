package moneymanager.service;

import org.springframework.stereotype.Service;

@Service
public class EmailService {

    // Dummy service — no email sending required
    public void sendEmail(String to, String subject, String body) {
        // Do nothing
        System.out.println("📧 Email sending disabled. Tried to send to: " + to);
    }

    public void sendEmailWithAttachment(String to, String subject, String body, byte[] attachment, String filename) {
        // Do nothing
        System.out.println("📧 Email with attachment disabled. Tried to send to: " + to);
    }
}
