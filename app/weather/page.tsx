
import { getWeather } from "@/lib/weather";

export default async function WeatherPage() {
    const weather = await getWeather("helsinki");
     
                                
    return (
        <main>
            <pre>{JSON.stringify(weather["wfs:FeatureCollection"]["wfs:member"], null, 2)}</pre>
        </main>
    );
}

/*
"Pressure",
"GeopHeight",
"Temperature",
"DewPoint",
"Humidity",
"WindDirection",
"WindSpeedMS",
"WindUMS",
"WindVMS",
"PrecipitationAmount",
"TotalCloudCover",
"LowCloudCover",
"MediumCloudCover",
"HighCloudCover",
"RadiationGlobal",
"RadiationGlobalAccumulation",
"RadiationNetSurfaceLWAccumulation",
"RadiationNetSurfaceSWAccumulation",
"RadiationSWAccumulation",
"Visibility",
"WindGust"
*/

/* 
TODO:

- weather info now: atleast these(temp, wind, gusts, clouds, rain)
- weather in 1 hour: same as above
- plot full prediction: plot temperature and rain 


- avaruussää

*/