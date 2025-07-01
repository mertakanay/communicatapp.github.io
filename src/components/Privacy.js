import React from 'react';
import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy">
      <div className="page-content">
        <div className="container">
          <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p className="effective-date">Effective Date: May 26, 2025</p>

            <p>
              Communicat is a product of <strong>Rated10 Inc.</strong>. This Privacy Policy explains how we collect, use, and protect your information when you use the Communicat app and services.
            </p>

            <section>
              <h2>1. Information We Collect</h2>
              <p>We collect the following types of data when you use the app:</p>
              <ul>
                <li><strong>Phone Number:</strong> Used for authentication and identifying your account.</li>
                <li><strong>Messages:</strong> Messages you type or forward to Communicat are stored temporarily to perform evaluations.</li>
                <li><strong>Evaluation History:</strong> AI-generated analysis results and manually evaluated texts are stored for your access and our service improvement.</li>
                <li><strong>Device Information:</strong> Anonymous technical data for troubleshooting and analytics (e.g., device model, OS version).</li>
                <li><strong>Subscription Status:</strong> We store subscription metadata to determine your access to premium features.</li>
              </ul>
            </section>

            <section>
              <h2>2. Use of Your Data</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Provide message evaluations and feedback</li>
                <li>Enable WhatsApp integration and reply to forwarded messages</li>
                <li>Maintain subscription access and billing logic</li>
                <li>Improve and personalize the app experience</li>
              </ul>
            </section>

            <section>
              <h2>3. AI Evaluations</h2>
              <p>
                Message evaluations are powered by OpenAI's language models. Messages you submit are securely transmitted to OpenAI and are not used to train their models. Evaluations are returned to you and stored only in association with your account if you're logged in.
              </p>
            </section>

            <section>
              <h2>4. Data Sharing</h2>
              <p>We do <strong>not</strong> sell your data. We only share data with the following third parties, solely to provide services:</p>
              <ul>
                <li><strong>OpenAI:</strong> For message evaluations</li>
                <li><strong>Twilio:</strong> For WhatsApp message delivery</li>
                <li><strong>Firebase:</strong> For authentication, storage, and database management</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Retention</h2>
              <p>
                Messages and evaluations may be stored indefinitely unless you request deletion. We retain subscription and authentication records for compliance and account continuity.
              </p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your data at any time by contacting us at{' '}
                <a href="mailto:support@rated10.app" className="email-link">support@rated10.app</a>.
              </p>
            </section>

            <section>
              <h2>7. Security</h2>
              <p>
                We take security seriously and use end-to-end encryption where applicable, secure APIs, and access controls to protect your data.
              </p>
            </section>

            <section>
              <h2>8. Children's Privacy</h2>
              <p>
                Communicat is not intended for users under 13. If we learn that a child under 13 has used the app, we will delete their data promptly.
              </p>
            </section>

            <section>
              <h2>9. Updates to This Policy</h2>
              <p>
                We may update this policy from time to time. Users will be notified of material changes via the app or contact information provided.
              </p>
            </section>

            <section>
              <h2>10. Contact</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <p>Email: <a href="mailto:support@rated10.app" className="email-link">support@rated10.app</a></p>
            </section>

            <p className="consent">
              By using Communicat, you consent to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 