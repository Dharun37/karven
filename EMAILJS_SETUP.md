# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. **Copy your Service ID** (you'll need this later)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Give it a name (e.g., "Consultation Request")
4. **Copy your Template ID** (you'll need this later)
5. Edit the template content:

### Template Content Example:
```
Subject: New Consultation Request from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Sector: {{sector}}
Service: {{service}}

Requirements:
{{requirements}}

---
This email was sent via your website consultation form.
```

6. Click **Save**

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (or API Key)
3. **Copy it** (you'll need this later)

## Step 5: Configure Environment Variables
1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add the following lines with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. **Replace the placeholder values** with:
   - Service ID from Step 2
   - Template ID from Step 3
   - Public Key from Step 4

## Step 6: Update Email Destination
Open `components/consultation-form.tsx` and update this line:
```typescript
to_email: "info@karvensen.com", // Change to your actual email
```

## Step 7: Restart Development Server
```bash
# Stop the server (Ctrl+C) and restart it
pnpm dev
```

## Testing
1. Fill out the consultation form on your website
2. Submit it
3. Check your email inbox for the consultation request

## Troubleshooting
- **Email not received?** Check your EmailJS dashboard logs
- **Error message?** Verify all three environment variables are correct
- **Still not working?** Make sure you restarted the dev server after adding `.env.local`

## Important Notes
- The `.env.local` file should NOT be committed to Git (it's already in `.gitignore`)
- Variables starting with `NEXT_PUBLIC_` are accessible in the browser
- Free plan limit: 200 emails/month
- For production, you might want to upgrade to a paid plan

## Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available in your dashboard
