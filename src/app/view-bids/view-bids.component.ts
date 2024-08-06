import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as LayerVector } from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { OSM, Vector as SourceVector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDivider } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';

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

export interface Bids {
  option: number;
  supplier: string;
  qty: number;
  price: number;
  leadTime: number;
  region: string;
}

const ACTIVE_ORDERS: Bids[] = [
  {
    option: 1,
    supplier: 'Supplier 1',
    qty: 1,
    price: 12000,
    leadTime: 30,
    region: 'Asia',
  },
  {
    option: 2,
    supplier: 'Supplier 2',
    qty: 1,
    price: 12000,
    leadTime: 30,
    region: 'Africa',
  },
  {
    option: 3,
    supplier: 'Supplier 3',
    qty: 1,
    price: 12000,
    leadTime: 30,
    region: 'Europe',
  },
];

@Component({
  selector: 'app-view-bids',
  standalone: true,
  imports: [
    MatTableModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatDivider,
    DialogModule,
    StepperModule,
  ],
  templateUrl: './view-bids.component.html',
  styleUrl: './view-bids.component.scss',
})
export class ViewBidsComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  map!: Map;
  @Input() display: boolean = false;
  private mapInitialized = false;

  center = fromLonLat([5.5697, 50.633]);
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

  private initializeMap(): void {
    if (this.mapInitialized || !this.mapContainer) {
      return;
    }

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.markerLayer,
      ],
      target: this.mapContainer.nativeElement,
      view: new View({
        center: this.center,
        zoom: 1,
        maxZoom: 1,
      }),
    });

    this.mapInitialized = true;
  }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  displayedColumns: string[] = [
    'option',
    'supplier',
    'price',
    'leadTime',
    'region',
    'action',
  ];
  dataSource = new MatTableDataSource<any>(ACTIVE_ORDERS);

  selectedBid: number | null = null;

  selectRow(option: number) {
    this.selectedBid = option;
  }
}
