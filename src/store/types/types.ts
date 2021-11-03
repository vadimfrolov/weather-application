export type Weather = {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherListItem[] | null;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
  };
};

export type WeatherListItem = {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: 0;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type CurrentDateInterface = {
  rawDate: string;
  date: string;
};
