export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center; position: relative;">
        <div style="background-color: #ffffff; width: 100px; height: 100px; margin: 0 auto 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
          <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="Messenger Logo" style="width: 70px; height: 70px; border-radius: 50%;">
        </div>
        <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">Welcome to Messenger!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your journey starts here</p>
      </div>
      
      <!-- Main Content -->
      <div style="padding: 45px 40px;">
        <p style="font-size: 20px; color: #667eea; margin: 0 0 20px 0; font-weight: 600;">Hello ${name} 👋</p>
        <p style="font-size: 16px; color: #4a5568; line-height: 1.8; margin: 0 0 30px 0;">
          We're thrilled to have you join our community! Messenger brings people together through seamless, real-time conversations. Connect with friends, family, and colleagues like never before.
        </p>
        
        <!-- Feature Cards -->
        <div style="background: linear-gradient(135deg, #f6f8fb 0%, #e9ecf4 100%); padding: 30px; border-radius: 16px; margin: 30px 0; border: 1px solid #e2e8f0;">
          <p style="font-size: 18px; margin: 0 0 20px 0; color: #2d3748; font-weight: 600;">🚀 Get started in minutes:</p>
          <div style="margin-left: 0;">
            <div style="background-color: #ffffff; padding: 15px 20px; border-radius: 10px; margin-bottom: 12px; border-left: 4px solid #667eea; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="margin: 0; color: #2d3748; font-size: 15px;">✨ Personalize your profile</p>
            </div>
            <div style="background-color: #ffffff; padding: 15px 20px; border-radius: 10px; margin-bottom: 12px; border-left: 4px solid #764ba2; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="margin: 0; color: #2d3748; font-size: 15px;">👥 Connect with your contacts</p>
            </div>
            <div style="background-color: #ffffff; padding: 15px 20px; border-radius: 10px; margin-bottom: 12px; border-left: 4px solid #667eea; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="margin: 0; color: #2d3748; font-size: 15px;">💬 Start meaningful conversations</p>
            </div>
            <div style="background-color: #ffffff; padding: 15px 20px; border-radius: 10px; border-left: 4px solid #764ba2; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="margin: 0; color: #2d3748; font-size: 15px;">📸 Share your moments instantly</p>
            </div>
          </div>
        </div>
        
        <!-- CTA Button -->
        <div style="text-align: center; margin: 40px 0 30px 0;">
          <a href="${clientURL}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 16px 45px; border-radius: 50px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4); transition: transform 0.3s ease;">Open Messenger →</a>
        </div>
        
        <div style="background-color: #f7fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 30px;">
          <p style="margin: 0 0 10px 0; color: #4a5568; font-size: 15px; line-height: 1.7;">
            💡 <strong>Need help?</strong> Our support team is here for you 24/7. Don't hesitate to reach out!
          </p>
          <p style="margin: 0; color: #4a5568; font-size: 15px; line-height: 1.7;">
            Happy messaging! 🎉
          </p>
        </div>
        
        <div style="margin-top: 35px; padding-top: 25px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 5px 0; color: #2d3748; font-size: 15px;">Warmest regards,</p>
          <p style="margin: 0; color: #667eea; font-size: 15px; font-weight: 600;">The Messenger Team</p>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #f7fafc; padding: 30px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0 0 15px 0; color: #718096; font-size: 13px;">© 2026 Messenger. All rights reserved.</p>
        <div>
          <a href="#" style="color: #667eea; text-decoration: none; margin: 0 12px; font-size: 13px; font-weight: 500;">Privacy Policy</a>
          <span style="color: #cbd5e0;">•</span>
          <a href="#" style="color: #667eea; text-decoration: none; margin: 0 12px; font-size: 13px; font-weight: 500;">Terms of Service</a>
          <span style="color: #cbd5e0;">•</span>
          <a href="#" style="color: #667eea; text-decoration: none; margin: 0 12px; font-size: 13px; font-weight: 500;">Contact Us</a>
        </div>
      </div>
      
    </div>
  </body>
  </html>
  `;
}