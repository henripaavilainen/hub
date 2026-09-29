
import { NextResponse } from "next/server";
import { evaluate } from "@/lib/wordle";

export async function POST(request: Request) {
    
    const { guess } = await request.json();

    let word = evaluate(guess, "TESTY")

    return NextResponse.json(word);
}
