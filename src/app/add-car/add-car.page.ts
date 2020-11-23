import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';
// import * as moment from 'moment';
import { AlertService } from '../services/alert.service';
import * as dateFormat from 'dateformat';
import { AuthService } from '../services/auth.service';
declare var $: any;
class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-add-car',
  templateUrl: 'add-car.page.html',
  styleUrls: ['add-car.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class addCarPage implements OnInit {
  carName: any;
  kilometers: any;
  price: any;
  description: any;
  customPickerOptions: any;
  customPopoverOptions: any;
  selectedLanguage: string;
  validations_form: FormGroup;
  hideState = false;
  hidePerformance = false;
  hideEnvironment = false;
  hideProperties = false;
  hideEquipment = false;


  images: FileList;
  urls = new Array<string>();
  selectedFile: ImageSnippet;
  sub: any;
  selectedFiles: FileList;
  carPhoto: any;
  constructor(private _Activatedroute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private alertservice: AlertService, private translateConfigService: TranslateConfigService, private authenticationService: AuthService, private appservices: AppServicesService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.currentUser = this.authenticationService.currentUserValue;
  }

  condition: any;
  previousOwners: any;
  warranty: any;

  // ----------------------  state attributes ---------------
  YesOrNoArray: any = ["Yes", "No"]
  //
  NextInspection: any;
  firstRegistration: any;
  currentUser: any;
  Title: any;
  Kilometers: any;
  Price: any;
  Description: any;
  EngineVolume: any;
  DriveChain: any;
  HorsePower: any;
  Torque: any;
  Consumption: any;
  CO2Emission: any;
  Brand: any;
  Model: any;
  BodyColorOriginal: any;
  ModelCode: any;
  CountryVersion: any;
  DateOfPost: any;

  VehicleConditionArray: any = ["New", "Used", "Employee's Car", "Antique / Classic", "Demonstration", "Pre-registered"];
  Vehicle_Condition: any;
  onSelectChangeVehicleCondition(event: any) {
    this.Vehicle_Condition = event.target.value;
    // console.log(this.Vehicle_Condation)
  }

  PreviousOwnersArray: any = ["1", "2", "3", "+4"];
  PreviousOwners: any;
  onSelectChangePreviousOwners(event: any) {
    this.PreviousOwners = event.target.value;
    // console.log(this.PreviousOwners)
  }

  Warranty: any;
  onSelectChangeWarranty(event: any) {
    this.Warranty = event.target.value;
    // console.log(this.Warranty)
  }

  fullService: any;
  onSelectChangefullService(event: any) {
    this.fullService = event.target.value;
    // console.log(this.fullService)
  }

  nonSmokingVehicle: any;
  onSelectChangenonSmokingVehicle(event: any) {
    this.nonSmokingVehicle = event.target.value;
    // console.log(this.nonSmokingVehicle)
  }

  // ---------------------- performance attributes ---------------
  gearingTypeArray: any = ["Automatic", "Manual ", "Semi-automatic"];
  gearingType: any;
  onSelectChangegearingType(event: any) {
    this.gearingType = event.target.value;
    // console.log(this.gearingType)
  }


  cylindersArray: any = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  cylinders: any;
  onSelectChangecylinders(event: any) {
    this.cylinders = event.target.value;
    // console.log(this.cylinders)
  }

  // ---------------------- environment attributes ---------------
  fuelArray: any = ["Petrol", "Diesel", "Electrically-chargeable", "Hybrid", "Alternative fuels"]
  fuel: any;
  onSelectChangefuel(event: any) {
    this.fuel = event.target.value;
    // console.log(this.fuel)
  }


  emissionClassArray: any = ["Euro 1", "Euro 2", "Euro 3", "Euro 4", "Euro 5", "Euro 6", "Euro 6c", "Euro 6d-TEMP", "Euro 6d"];
  emissionClass: any;
  onSelectChangeemissionClass(event: any) {
    this.emissionClass = event.target.value;
    // console.log(this.emissionClass)
  }

  emissionLabelArray: any = ["2 (Red)", "3 (Yellow)", "4 (Green)"];
  emissionLabel: any;
  onSelectChangeemissionLabel(event: any) {
    this.emissionLabel = event.target.value;
    // console.log(this.emissionLabel)
  }

  // ---------------------- properties attributes ---------------


  bodyColorArray: any = ["Beige", "Blue", "Brown", "Bronze", "Yellow", "Grey", "Green", "Red",
    "Black", "Silver", "Violet", "White", "Orange", "Gold"];
  bodyColor: any;
  onSelectChangebodyColor(event: any) {
    this.bodyColor = event.target.value;
    // console.log(this.bodyColor)
  }

  paintTypeArray: any = ["Solid", "Metallic", "Pearlescent", "Matte"];
  paintType: any;
  onSelectChangepaintType(event: any) {
    this.paintType = event.target.value;
    // console.log(this.paintType)
  }

  interiorFittingsArray: any = ["Alcantara", "Cloth", "Full leather", "Part leather", "Velour", "Other"];
  interiorFittings: any;
  onSelectChangeinteriorFittings(event: any) {
    this.interiorFittings = event.target.value;
    // console.log(this.interiorFittings)
  }

  interiorColorsArray: any = ["Beige", "Blue", "Brown", "Bronze", "Yellow", "Grey", "Green", "Red",
    "Black", "Silver", "Violet", "White", "Orange", "Gold"];
  interiorColors: any;
  onSelectChangeinteriorColors(event: any) {
    this.interiorColors = event.target.value;
    // console.log(this.interiorColors)
  }

  bodyArray: any = ["Compact", "Convertible", "Coupe", "Off-Road/Pick-up", "Sedans", "Station wagon", "Transporter", "Van", "Other"];
  body: any;
  onSelectChangebody(event: any) {
    this.body = event.target.value;
    // console.log(this.body)
  }

  NrofDoorsArray: any = ["2/3", "4/5", "6/7"];
  NrofDoors: any;
  onSelectChangeNrofDoors(event: any) {
    this.NrofDoors = event.target.value;
    // console.log(this.NrofDoors)
  }

  NrofSeatsArray: any = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  NrofSeats: any;
  onSelectChangeNrofSeats(event: any) {
    this.NrofSeats = event.target.value;
    // console.log(this.NrofSeats)
  }

  // ---------------------- equipment attributes ---------------
  comfortAndConvenienceArray: any = [
    "Air conditioning",
    "Air suspension",
    "Armrest",
    "Automatic climate control",
    "Cruise control",
    "Electrically adjustable seats",
    "Electrical side mirrors",
    "Leather steering wheel",
    "Lumbar support",
    "Navigation system",
    "Park Distance Control",
    "Parking assist system camera",
    "Parking assist system sensors rear",
    "Rain sensor",
    "Seat heating",
    "Split rear seats",
    "Start-stop system",
    "Sunroof",
  ];
  comfortAndConvenience: any;
  onSelectChangecomfortAndConvenience(event: any) {
    this.comfortAndConvenience = event.target.value;
    // console.log(this.comfortAndConvenience)
  }



  entertainmentAndMediaArray: any = [
    "Bluetooth",
    "CD player",
    "Digital radio",
    "Hands-free equipment",
    "On-board computer",
    "Sound system",
    "Television",
    "MP3",
    "Radio",
    "USB",
  ];
  entertainmentAndMedia: any;
  onSelectChangeentertainmentAndMedia(event: any) {
    this.entertainmentAndMedia = event.target.value;
    // console.log(this.entertainmentAndMedia)
  }




  extrasArray: any = [
    "4WD",
    "Alloy wheels",
    "Shift paddles",
    "Sport package",
    "Sport seats",
    "Sport suspension",
    "Trailer hitch",
    "Voice Control",
  ];
  extras: any;
  onSelectChangeextras(event: any) {
    this.extras = event.target.value;
    // console.log(this.extras)
  }



  safetyAndSecurityArray: any = [
    "ABS",
    "Alarm system",
    "Central door lock",
    "Driver-side airbag",
    "Electronic stability control",
    "Emergency brake assistant",
    "Fog lights",
    "Head airbag",
    "Immobilizer",
    "Isofix",
    "Passenger-side airbag",
    "Power steering",
    "Side airbag",
    "Tire pressure monitoring system",
    "Traction control",
    "Daytime running lights",
    "Emergency system"
  ];
  safetyAndSecurity: any;
  onSelectChangesafetyAndSecurity(event: any) {
    this.safetyAndSecurity = event.target.value;
    // console.log(this.safetyAndSecurity)
  }


  AddNewCarfun() {
    let Title = document.getElementById("carNameinput") as HTMLInputElement;
    let Kilometers = document.getElementById("kilometersinput") as HTMLInputElement;
    let Price = document.getElementById("priceinput") as HTMLInputElement;
    let Description = document.getElementById("descriptioninput") as HTMLInputElement;
    let NextInspection1 = document.getElementById("NextInspectioninput1") as HTMLInputElement;
    let firstRegistration1 = document.getElementById("firstRegistrationinput1") as HTMLInputElement;
    let EngineVolume = document.getElementById("engineVolumeinput") as HTMLInputElement;
    let DriveChain = document.getElementById("driveChaininput") as HTMLInputElement;
    let HorsePower = document.getElementById("horsePowerinput") as HTMLInputElement;
    let Torque = document.getElementById("torqueinput") as HTMLInputElement;
    let Consumption = document.getElementById("consumptioninput") as HTMLInputElement;
    let CO2Emission = document.getElementById("CO2Emissioninput") as HTMLInputElement;
    let Brand = document.getElementById("brandinput") as HTMLInputElement;
    let Model = document.getElementById("modelinput") as HTMLInputElement;
    let BodyColorOriginal = document.getElementById("bodyColorOriginalinput") as HTMLInputElement;
    let ModelCode = document.getElementById("modelCodeinput") as HTMLInputElement;
    let CountryVersion = document.getElementById("countryVersioninput") as HTMLInputElement;

    this.Title = Title.value;

    this.Kilometers = Kilometers.value;

    this.Price = Price.value;

    this.Description = Description.value;

    this.NextInspection = NextInspection1.value;

    this.firstRegistration = firstRegistration1.value;

    this.EngineVolume = EngineVolume.value;

    this.DriveChain = DriveChain.value;

    this.HorsePower = HorsePower.value;

    this.Torque = Torque.value;

    this.Consumption = Consumption.value;

    this.CO2Emission = CO2Emission.value;

    this.Brand = Brand.value;

    this.Model = Model.value;

    this.BodyColorOriginal = BodyColorOriginal.value;

    this.ModelCode = ModelCode.value;

    this.CountryVersion = CountryVersion.value;

    var now = new Date();
    this.DateOfPost = dateFormat(now, "yyyy-mm-dd'T'HH:MM:ss");

    this.appservices.AddNewCar(this.Title, this.Kilometers, this.Price, this.Vehicle_Condition, this.PreviousOwners, this.NextInspection, this.Warranty, this.fullService, this.nonSmokingVehicle, this.gearingType, this.EngineVolume, this.DriveChain, this.cylinders, this.HorsePower, this.Torque
      , this.fuel, this.Consumption, this.CO2Emission, this.emissionClass, this.emissionLabel
      , this.Brand, this.Model, this.firstRegistration, this.bodyColor, this.paintType, this.BodyColorOriginal, this.interiorFittings, this.interiorColors,
      this.body, this.NrofDoors, this.NrofSeats, this.ModelCode, this.CountryVersion,
      this.comfortAndConvenience, this.entertainmentAndMedia, this.extras, this.safetyAndSecurity, this.Description, this.DateOfPost).subscribe(res => {
        this.uploadFiles(res);
        this.alertservice.showAlert("&#xE876;", "success", "Car Added Successfuly");
        this.navigateToHome();
      }, err => {
        this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
      });
  }
  navigateToHome() {
    this.router.navigate(['/tabs/home']);
  }
  detectFiles(event) {
    this.urls = [];
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
      this.images = event.target.files;
    }
  }
  uploadFiles(carId) {
    // this.message = '';
    for (let i = 0; i < this.images.length; i++) {
      this.addcarphotofun(this.images[i], carId);
    }
  }
  addcarphotofun(image, carId) {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.addCarPhoto(image, carId).subscribe(res => {
        this.carPhoto = res;
      }, err => {
        this.carPhoto = err;
      }
      );
    });
  }
  hide(divID) {
    if (divID == "state") {
      //Hide State
      if (this.hideState == false)
        this.hideState = true;
      else if (this.hideState == true) {
        this.hideState = false;
      }
    }
    else if (divID == "performance") {
      //Hide Performance
      if (this.hidePerformance == false)
        this.hidePerformance = true;
      else if (this.hidePerformance == true) {
        this.hidePerformance = false;
      }
    }
    else if (divID == "environment") {
      //Hide Environment
      if (this.hideEnvironment == false)
        this.hideEnvironment = true;
      else if (this.hideEnvironment == true) {
        this.hideEnvironment = false;
      }
    }
    else if (divID == "properties") {
      //Hide Properties
      if (this.hideProperties == false)
        this.hideProperties = true;
      else if (this.hideProperties == true) {
        this.hideProperties = false;
      }
    }
    else if (divID == "equipment") {
      //Hide Equipment
      if (this.hideEquipment == false)
        this.hideEquipment = true;
      else if (this.hideEquipment == true) {
        this.hideEquipment = false;
      }
    }

  }



  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      carimages: new FormControl('', Validators.required),
      carName: new FormControl('', Validators.required),
      kilometers: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      NextInspection: new FormControl('', Validators.required),
      engineVolume: new FormControl('', Validators.required),
      driveChain: new FormControl('', Validators.required),
      horsePower: new FormControl('', Validators.required),
      torque: new FormControl('', Validators.required),
      consumption: new FormControl('', Validators.required),
      CO2Emission: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      bodyColorOriginal: new FormControl('', Validators.required),
      modelCode: new FormControl('', Validators.required),
      countryVersion: new FormControl('', Validators.required),
      firstRegistration: new FormControl('', Validators.required),
    });


  }

  validation_messages = {
    'carName': [
      { type: 'required', message: 'CARNAMEISREQUIRES' }
    ],
    'kilometers': [
      { type: 'required', message: 'KILOMETERSISREQUIRED' },
      // { type: 'min', message: 'Kilometers must be at least 0.' },
    ],
    'price': [
      { type: 'required', message: 'PRICEISREQUIRED' },
      // { type: 'min', message: 'Price must be at least 0.' },
    ],
    'NextInspection': [
      { type: 'required', message: 'ENTERNEXTINSPECTIONDATEISREQUIRED' }
    ],
    'description': [
      { type: 'required', message: 'DESCRIPTIONISREQUIRED' }
    ],
    'engineVolume': [
      { type: 'required', message: 'ENGINEVOLUMEISREQUIRED' },
    ],
    'driveChain': [
      { type: 'required', message: 'DRIVECHAINISREQUIRED' },
    ],
    'horsePower': [
      { type: 'required', message: 'HORSEPOWERISREQUIRED' },
    ],
    'torque': [
      { type: 'required', message: 'TORQUEISREQUIRED' },
    ],

    'consumption': [
      { type: 'required', message: 'CONSUMPTIONISREQUIRED' },
    ],
    'CO2Emission': [
      { type: 'required', message: 'CO2EMISSIONISREQUIRED' },
    ],
    'brand': [
      { type: 'required', message: 'CARBRANDISREQUIRED' },
    ],
    'model': [
      { type: 'required', message: 'CARMODELISREQUIRED' },
    ],
    'firstRegistration': [
      { type: 'required', message: 'CARFIRSTREGISTRATIONDATEISREQUIRED' },
    ],
    'bodyColorOriginal': [
      { type: 'required', message: 'BODYCOLORORIGINALISREQUIRED' },
    ],
    'modelCode': [
      { type: 'required', message: 'MODELCODEISREQUIRED' },
    ],
    'countryVersion': [
      { type: 'required', message: 'COUNTRYVERSIONISREQUIRED' },
    ],
  };









}
