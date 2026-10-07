import nodemailer from "nodemailer";

const CONTACT_EMAIL = "mtmediaentertainment@gmail.com";

export async function POST(req: Request) {
    try {

        const data = await req.json();

        const {
            firstName, 
            lastName, 
            email, 
            phone, 
            relationship, 
            interest, 
            date, 
            time, 
            message,
        } = data;

        if(!firstName || !lastName || !email){
            return Response.json(
                {
                    success: false, 
                    message: "Please provide yoru first name, last name, and email address",
                },
                {status: 400}
            );
        }

    } catch (error) {
        console.error("Contact form error:", error);

        return Response.json(
            {
                success: false, 
                message: "Something went wrong. Please try again",

            },
            {status: 500}
        );
    }
}