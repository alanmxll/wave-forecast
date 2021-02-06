import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("forecast")
export class ForecastController {
  @Get("")
  public getForecastForLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        time: "2021-02-06T00:00:00+00:00",
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: "Manly",
            position: "E",
            rating: 2,
            sweelDirection: 64.26,
            sweelHeight: 0.15,
            sweelPeriod: 3.89,
            time: "2021-02-06T00:00:00+00:OO",
            waveDirection: 231.38,
            waveHeight: 0.47,
            windDirection: 299.45,
          },
        ],
      },
      {
        time: "2021-02-06T00:00:00+00:00",
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: "Manly",
            position: "E",
            rating: 2,
            sweelDirection: 123.41,
            sweelHeight: 0.21,
            sweelPeriod: 3.67,
            time: "2021-02-06T00:00:00+00:OO",
            waveDirection: 232.12,
            waveHeight: 0.46,
            windDirection: 310.48,
          },
        ],
      },
    ]);
  }
}
