
import { XMLParser } from "fast-xml-parser";

const BASE_URL = "https://opendata.fmi.fi/wfs";
const parser = new XMLParser();

export async function getWeather(place: string) {
    const params = new URLSearchParams({
        service: "WFS",
        version: "2.0.0",
        request: "getFeature",
        storedquery_id: "fmi::forecast::harmonie::surface::point::simple",
        place: place,
    })

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const xml = await response.text()

    return parser.parse(xml)
}