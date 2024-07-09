import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as LayerVector } from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { OSM, Vector as SourceVector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';

export interface locations {
  lon: number;
  lat: number;
}

const SUPPLIER_LOCATIONS: locations[] = [
  {
    lon: 103.8473425488912,
    lat: 1.285746395688935,
  },
  {
    lon: 10.640609982563435,
    lat: 59.912126741718374,
  },
  {
    lon: -1.3967335551980313,
    lat: 50.887725582648,
  },
];

@Component({
  selector: 'app-fabricator-options',
  standalone: true,
  imports: [],
  templateUrl: './fabricator-options.component.html',
  styleUrl: './fabricator-options.component.scss',
})
export class FabricatorOptionsComponent implements OnInit {
  supplierLocations = SUPPLIER_LOCATIONS;

  marker = new Feature({
    geometry: new Point(
      fromLonLat([this.supplierLocations[1].lon, this.supplierLocations[1].lat])
    ),
  });

  markerLayer = new LayerVector({
    source: new SourceVector({
      features: [this.marker],
    }),
    style: new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: './assets/img/pin.png',
      }),
    }),
  });

  public map!: Map;
  center = fromLonLat([5.5697, 50.633]);

  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.markerLayer,
      ],
      target: 'map',
      view: new View({
        center: this.center,
        zoom: 2,
        maxZoom: 18,
      }),
    });
  }
}
