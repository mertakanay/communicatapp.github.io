import React from 'react';
import './Terms.css';

function Terms() {
  return (
    <div className="terms">
      <div className="page-content">
        <div className="container">
          <div className="terms-container">
            <h1>Terms & Conditions</h1>
            <p className="effective-date">Effective Date: May 26, 2025</p>

            <p>
              Welcome to <strong>Communicat</strong>, a mobile application developed and owned by <strong>Rated10 Inc.</strong> These Terms & Conditions ("Terms") govern your use of Communicat and its services.
            </p>

            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>By using Communicat, you agree to be bound by these Terms. If you do not agree, please do not use the app.</p>
            </section>

            <section>
              <h2>2. Description of Service</h2>
              <p>
                Communicat provides a messaging platform for self-awareness and communication improvement. The app uses AI to analyze user-submitted messages, offering feedback for clarity, tone, empathy, and potential manipulation.
              </p>
              <p>
                Additional features include WhatsApp integration, message evaluations, and manual analysis tools available through a paid subscription.
              </p>
            </section>

            <section>
              <h2>3. User Accounts</h2>
              <p>
                You may be required to sign in using your phone number. You are responsible for maintaining the security of your account and are liable for all activity under your account.
              </p>
            </section>

            <section>
              <h2>4. Subscriptions</h2>
              <p>
                Communicat offers a subscription service that unlocks features such as WhatsApp integration and unlimited evaluations. Subscriptions renew automatically unless canceled. You can manage or cancel your subscription through the App Store or Google Play Store.
              </p>
            </section>

            <section>
              <h2>5. Acceptable Use</h2>
              <p>
                You agree not to use Communicat for any unlawful or abusive behavior, including harassment, hate speech, impersonation, or manipulation of others.
              </p>
            </section>

            <section>
              <h2>6. AI-Generated Feedback</h2>
              <p>
                All evaluations provided are generated using artificial intelligence. They are intended as personal reflection tools and do not constitute mental health or professional advice.
              </p>
            </section>

            <section>
              <h2>7. Data & Privacy</h2>
              <p>
                We store message data to provide our services, including sending evaluations. See our{' '}
                <a href="/privacy" className="link">Privacy Policy</a> for full details on how your data is handled.
              </p>
            </section>

            <section>
              <h2>8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access if you violate these Terms or abuse the platform.
              </p>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>
                Communicat and Rated10 Inc. are not liable for any indirect, incidental, or consequential damages arising from your use of the app or reliance on its feedback.
              </p>
            </section>

            <section>
              <h2>10. Modifications</h2>
              <p>
                We may update these Terms from time to time. You will be notified of material changes via the app or your registered contact method.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>For any questions about these Terms, you can reach us at{' '}
                <a href="mailto:support@rated10.app" className="email-link">support@rated10.app</a>.
              </p>
            </section>

            <p className="consent">
              By using Communicat, you agree to these Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms; 