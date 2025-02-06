import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request, { params }: { params: { photographer: string } }) {
    const { photographer } = params;

    const imagesDirectory = path.join(process.cwd(), "public", "img", "media", photographer);

    try {
        const files = fs.readdirSync(imagesDirectory);

        const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"]; // Estensioni accettate
        const images = files
            .filter(file => allowedExtensions.some(ext => file.toLowerCase().endsWith(ext))) // Filtra solo immagini
            .map(file => `/img/media/${photographer}/${file}`);

        return NextResponse.json({ images });
    } catch (error) {
        return NextResponse.json({ error: "Photographer not found" }, { status: 404 });
    }
}
