import connectToDB from "@/database/page";
import User from "@/models/page";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDB();  //connection with db
        const { name, email } = await req.json();

        const newUser = await User.create({ name, email });

        if (newUser) {
            return NextResponse.json({
                success: true,
                message: "User Registration Successful!",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "User Registration Failed! Please try again.",
            });
        }
    } catch (e) {
        console.log(e);

        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again.",
        });
    }
}
