import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, sector, service, requirements } = body

    // Validate required fields
    if (!name || !email || !phone || !sector || !service || !requirements) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Customer's email for easy reply
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Sector:</strong> ${sector}</p>
            <p><strong>Service Interest:</strong> ${service}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Requirements:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${requirements}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Consultation request sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending consultation request:", error)
    return NextResponse.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    )
  }
}
