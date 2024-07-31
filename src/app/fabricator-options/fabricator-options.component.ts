import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as LayerVector } from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { OSM, Vector as SourceVector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { DialogModule } from 'primeng/dialog';

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
  selector: 'app-fabricator-options',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatCardModule,
    MatRadioModule,
    DialogModule,
  ],
  templateUrl: './fabricator-options.component.html',
  styleUrl: './fabricator-options.component.scss',
})
export class FabricatorOptionsComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  map!: Map;
  @Input() display: boolean = false;

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

  ngAfterViewInit() {
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
        zoom: 2,
        maxZoom: 18,
      }),
    });
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedBid: number | null = null;

  selectRow(option: number) {
    this.selectedBid = option;
  }
}
